import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const ViewerCounter = () => {
  const [viewers, setViewers] = useState(47);

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

  return (
    <div className="bg-[#00e676] text-[#15192c] px-2 md:px-3 py-2 rounded-lg text-center mb-3 md:mb-4 mx-2">
      <div className="flex items-center justify-center space-x-1 md:space-x-2">
        <Eye className="w-3 h-3 md:w-4 md:h-4" />
        <span className="font-bold text-xs md:text-sm">
          {viewers} pessoas visualizando agora
        </span>
      </div>
    </div>
  );
};

export default ViewerCounter;