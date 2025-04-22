import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CircularProgress = ({ percent, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);
  const circleRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames per second
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
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="flex flex-col w-[100px] items-center space-y-2">
      <svg height={100} width={100} className="transform -rotate-90">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={8}
          r={42}
          cx={50}
          cy={50}
        />
        <circle
          ref={circleRef}
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
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-gray-700 text-sm font-bold"
          style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
        >
          {count}%
        </text>
      </svg>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
};

export default React.memo(CircularProgress);