import React from 'react';

const ScreenMetrics = () => {
  return (
    <div className="mb-[60px] ml-[60px] mr-[62px] flex h-[100px] w-[536px] gap-x-[28px] [&>div]:h-[100px] [&>div]:w-[160px]">
      <div className="border-r-neutral-200t border-r">
        <h2 className="mb-2 text-[44px] font-medium">509</h2>
        <p className="leading-[1.31rem]tracking-tight text-base text-neutral-400">
          Vistos Tirados
        </p>
      </div>

      <div className="border-r border-r-neutral-200">
        <h2 className="mb-2 text-[44px] font-medium">602</h2>
        <p className="leading-[1.31rem]tracking-tight text-base text-neutral-400">
          Passaportes Tirados
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-[44px] font-medium">634</h2>
        <p className="leading-[1.31rem]tracking-tight text-base text-neutral-400">
          Famílias Felizes
        </p>
      </div>
    </div>
  );
};

export default ScreenMetrics;
