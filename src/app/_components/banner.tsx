import React from 'react';
import banner from '@/assets/images/banner-hero.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <aside className="my-5 mr-5 h-[900px] w-[762px]">
      <Image
        src={banner}
        width={762}
        height={900}
        alt="banner hero information"
      />
    </aside>
  );
};

export default Banner;
