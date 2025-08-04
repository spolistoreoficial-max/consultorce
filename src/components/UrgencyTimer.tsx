import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-500 text-white px-2 md:px-3 py-2 rounded-lg text-center mb-3 md:mb-4 animate-pulse mx-2">
      <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-1">
        <Clock className="w-3 h-3 md:w-4 md:h-4" />
        <span className="font-bold text-xs md:text-sm">OFERTA EXPIRA EM:</span>
      </div>
      <div className="flex justify-center space-x-1 md:space-x-2 font-mono font-bold">
        <span className="bg-white text-red-500 px-1 md:px-2 py-1 rounded text-xs md:text-sm">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm">:</span>
        <span className="bg-white text-red-500 px-1 md:px-2 py-1 rounded text-xs md:text-sm">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm">:</span>
        <span className="bg-white text-red-500 px-1 md:px-2 py-1 rounded text-xs md:text-sm">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default UrgencyTimer;