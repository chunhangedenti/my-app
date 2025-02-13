import HeartRateMonitor from './components/HeartRateMonitor';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">PPG-Based Heart Rate Monitor</h1>
      <HeartRateMonitor />
    </div>
  );
}
