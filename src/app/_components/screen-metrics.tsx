import { metricsData } from '@/constants/metrics-data';
import React from 'react';

const ScreenMetrics = () => {
  return (
    <div className="mb-[3.75rem] ml-[3.75rem] mr-[3.875rem] flex h-[6.25rem] w-[33.5rem] gap-x-[1.75rem]">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className={`${index < 2 && 'border-r border-r-neutral-200'} h-[6.25rem] w-[10rem]`}
        >
          <h2 className="mb-2 text-[2.75rem] font-medium">{metric.amount}</h2>
          <p className="text-base leading-[130.8%] tracking-tighter text-neutral-400">
            {metric.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScreenMetrics;
