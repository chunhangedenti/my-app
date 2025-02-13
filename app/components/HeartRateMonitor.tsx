"use client";
import { useState } from 'react';

export default function HeartRateMonitor() {
  // Step 1: Initialize state for heart rate
  const [heartRate, setHeartRate] = useState(72); // Initial heart rate is 72 BPM

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Display the current heart rate */}
      <h1 className="text-xl font-medium text-black">Heart Rate Monitor</h1>
      <p className="text-gray-500 text-lg">Current Heart Rate: {heartRate} BPM</p>

      {/* Buttons to modify the heart rate */}
      <div className="flex space-x-4">
        {/* Increment Button */}
        <button
          onClick={() => setHeartRate(heartRate + 1)} // Increase heart rate by 1
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>

        {/* Decrement Button */}
        <button
          onClick={() => setHeartRate(heartRate - 1)} // Decrease heart rate by 1
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>

        {/* Reset Button */}
        <button
          onClick={() => setHeartRate(72)} // Reset heart rate to 72 BPM
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}