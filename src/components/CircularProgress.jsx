import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CircularProgress = ({ percent, label }) => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = percent / 40; // controls speed
      const interval = setInterval(() => {
        start += step;
        if (start >= percent) {
          setProgress(percent);
          clearInterval(interval);
        } else {
          setProgress(Math.ceil(start));
        }
      }, 20);
    }
  }, [inView, percent]);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div ref={ref} className="flex flex-col items-center space-y-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#ef4444"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-gray-700 text-sm font-bold"
        >
          {progress}%
        </text>
      </svg>
      <p className="text-sm text-center">{label}</p>
    </div>
    );
  };

export default CircularProgress;