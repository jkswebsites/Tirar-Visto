import React from 'react';

const TitleRadius = ({ title }: { title: string }) => {
  return (
    <h2 className="inline-block rounded-[1.25rem] bg-amber-400 px-5 py-[0.625rem] text-center align-top font-medium leading-[130.8%] tracking-tight shadow-md">
      {title}
    </h2>
  );
};

export default TitleRadius;
