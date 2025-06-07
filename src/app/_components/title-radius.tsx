import React from 'react';

const TitleRadius = ({ title }: { title: string }) => {
  return (
    <h2 className="inline-block rounded-[20px] bg-amber-400 px-5 py-[10px] text-center align-top font-medium leading-[1.31rem] tracking-tight shadow-md">
      {title}
    </h2>
  );
};

export default TitleRadius;
