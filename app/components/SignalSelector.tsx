"use client";
import { useState,useEffect } from 'react';

export default function SignalSelector() {
  // State for signal combination
  const [signalCombination, setSignalCombination] = useState('default');

  // State for toggling config visibility
  const [showConfig, setShowConfig] = useState(false);

  // Array of signal options
  const signalOptions = [
    { value: 'default', label: 'Default (2R - G - B)' },
    { value: 'redOnly', label: 'Red Only' },
    { value: 'greenOnly', label: 'Green Only' },
    { value: 'blueOnly', label: 'Blue Only' },
    { value: 'redMinusBlue', label: 'Red - Blue' },
    { value: 'custom', label: 'Custom (3R - G - B)' },
  ];

  useEffect(() => {
    // Log the selected signal combination
    console.log('Selected Signal Combination:', signalCombination);
  }, [signalCombination]); // Dependency array ensures the effect re-runs when signalCombination changes

  return (
    <div className="flex flex-col space-y-4 p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      {/* Toggle Config Button */}
      <button
        onClick={() => setShowConfig((prev) => !prev)}
        className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-all duration-300"
      >
        {showConfig ? 'Hide Config' : 'Toggle Config'}
      </button>

      {/* Radio Buttons for Signal Combination */}
      {showConfig && (
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Signal Combination:</label>
          {signalOptions.map((option) => (
            <label key={option.value} className="flex items-center space-x-2">
              <input
                type="radio"
                value={option.value}
                checked={signalCombination === option.value}
                onChange={(e) => setSignalCombination(e.target.value)}
                className="form-radio text-cyan-500"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}

    </div>
  );
}