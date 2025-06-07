import React from 'react';

const TitleRadius = ({ title }: { title: string }) => {
  return (
    <span className="inline-block rounded-[20px] bg-amber-400 px-5 py-[10px] text-center align-top font-medium leading-[1.308rem] tracking-tight shadow-md">
      {title}
    </span>
  );
};

export default TitleRadius;
