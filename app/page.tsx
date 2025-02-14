import HeartRateMonitor from './components/HeartRateMonitor';
import SignalSelector from './components/SignalSelector';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">PPG-Based Heart Rate Monitor</h1>
      <HeartRateMonitor />
      <SignalSelector />
    </div>
  );
}
