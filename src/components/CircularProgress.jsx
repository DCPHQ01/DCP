import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CircularProgress = ({ percent, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = percent / (duration / (1000 / steps));
      let currentCount = 0;

      const animate = () => {
        currentCount += increment;
        if (currentCount < percent) {
          setCount(Math.ceil(currentCount));
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(percent);
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="flex flex-col items-center w-full max-w-[120px] space-y-2 mx-auto">
      <div className="relative w-[100px] h-[100px]">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={8}
            r={42}
            cx={50}
            cy={50}
          />
          <circle
            stroke="#ef4444"
            fill="transparent"
            strokeWidth={8}
            strokeLinecap="round"
            r={42}
            cx={50}
            cy={50}
            className="transition-all duration-2000 ease-out"
            style={{
              strokeDasharray: 264,
              strokeDashoffset: inView ? 264 - (percent / 100) * 264 : 264,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-700">{count}%</span>
        </div>
      </div>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
};

export default React.memo(CircularProgress);
