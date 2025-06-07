import { imagesGrid } from '@/constants/grid-images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GridImages = () => {
  return (
    <section className="h-[1081px] w-[1440px] bg-white">
      <div className="card-vector flex h-[423px] w-full items-center justify-center">
        <div className="h-[270px] w-[880px]">
          <div className="mx-auto w-[127px] rounded-[20px] bg-amber-400 py-[10px] text-center align-top text-base font-medium tracking-tighter text-neutral-800 shadow-md">
            Top Destinos
          </div>
          <div className="mt-8 h-[73px] w-[880px]">
            <h2 className="text-center align-top text-[56px] font-medium leading-[1.308rem] tracking-tighter text-neutral-800">
              Destinos mais procurados
            </h2>
            <p className="mx-auto mb-10 mt-8 h-[42px] w-[584px] text-center align-top text-base leading-[1.308rem] tracking-tight text-neutral-400">
              Confira os destinos mais procurados por nossos clientes nos
              últimos meses, qual seria o seu novo destino?
            </p>
            <Link
              href={'/'}
              className="mx-auto block w-[150px] rounded-[40px] bg-blue-950 px-5 py-[10px] text-white"
            >
              Conheça mais
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid h-[580px] w-[880px] grid-cols-3 items-center justify-items-center gap-5">
        <Image
          src={imagesGrid[0].src}
          alt={imagesGrid[0].name}
          className="self-end"
        />
        <Image
          src={imagesGrid[1].src}
          alt={imagesGrid[1].name}
          className="self-start"
        />
        <Image
          src={imagesGrid[2].src}
          alt={imagesGrid[2].name}
          className="self-end"
        />
        <Image
          src={imagesGrid[3].src}
          alt={imagesGrid[3].name}
          className="self-start"
        />
        <Image
          src={imagesGrid[4].src}
          alt={imagesGrid[4].name}
          className="self-end"
        />
        <Image
          src={imagesGrid[5].src}
          alt={imagesGrid[5].name}
          className="self-start"
        />
      </div>
    </section>
  );
};

export default GridImages;
