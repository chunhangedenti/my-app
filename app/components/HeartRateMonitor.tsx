"use client";
import { useState, useEffect } from 'react';

export default function HeartRateMonitor() {
  // State for heart rate
  const [heartRate, setHeartRate] = useState(72); // Initial heart rate is 72 BPM

  // State for recording status
  const [isRecording, setIsRecording] = useState(false);

  // useEffect to simulate heart rate generation when recording starts
  useEffect(() => {
    let interval:number;

    if (isRecording) {
      // Start generating heart rate data every second
      interval = setInterval(() => {
        const newHeartRate = Math.floor(Math.random() * 40 + 60); // Random heart rate between 60-100
        setHeartRate(newHeartRate);
      }, 1000);
    }

    // Cleanup: Stop the interval when recording stops
    return () => clearInterval(interval);
  }, [isRecording]); // Dependency array ensures this runs only when `isRecording` changes

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Header */}
      <h1 className="text-xl font-medium text-black">Heart Rate Monitor</h1>

      {/* Display Current Heart Rate */}
      <p className="text-gray-500 text-lg">Current Heart Rate: {heartRate} BPM</p>

      {/* Recording Button */}
      <div className="flex justify-center">
      <button
  onClick={() => setIsRecording(!isRecording)} // Toggle recording state
  className={`p-3 rounded-lg text-sm transition-all duration-300 ${
    isRecording
      ? 'bg-red-500 hover:bg-red-600 text-white' // Red when recording
      : 'bg-cyan-500 hover:bg-cyan-600 text-white' // Cyan when not recording
  }`}
>
  {isRecording ? '■ STOP RECORDING' : '● START RECORDING'}
</button>
</div>
    </div>
  );
}