export default function ProgressBar({ progress }: { progress: number }) {
  const purge = () => {
    if (progress > 100) return 100;
    return progress;
  }
  return (
    <div className="w-60 h-6 bg-gray-200 rounded-full dark:bg-gray-300">
      <div className="h-6 bg-blue-600 rounded-full dark:bg-red-500 text-white" style={{ width: `${purge()}%` }}>
        <span className="p-2">{progress}</span>
      </div>
    </div>
  );
}
