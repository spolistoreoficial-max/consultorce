import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const ViewerCounter = () => {
  const [viewers, setViewers] = useState(47);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(35, Math.min(65, newValue));
      });
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto hide/show every 10-15 seconds
  useEffect(() => {
    const hideTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 3000); // Hidden for 3 seconds
    }, 12000); // Hide every 12 seconds

    return () => clearInterval(hideTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 animate-fade-in">
      <div className="bg-[#00e676]/90 backdrop-blur-sm text-[#15192c] px-3 py-2 rounded-lg shadow-lg border border-white/20">
        <div className="flex items-center space-x-2">
          <Eye className="w-3 h-3 animate-pulse" />
          <span className="font-semibold text-xs">
            {viewers} visualizando
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewerCounter;