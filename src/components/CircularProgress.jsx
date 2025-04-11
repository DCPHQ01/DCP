const CircularProgress = ({ percent, label }) => {
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-15 h-15 rounded-full bg-gray-200">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#dc2626 ${percent * 3.6}deg, #e5e7eb ${percent * 3.6}deg)`,
            }}
          />
          <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white">
            <span className="text-lg font-semibold text-red-600">{percent}%</span>
          </div>
        </div>
        <div className="text-center text-sm font-medium">{label}</div>
      </div>
    );
  };

export default CircularProgress;