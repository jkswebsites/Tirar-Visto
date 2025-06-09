import { imagesGrid } from '@/constants/grid-images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GridImages = () => {
  return (
    <section className="h-[67.563rem] w-[90rem]">
      <div className="card-vector flex h-[26.438rem] w-full items-center justify-center">
        <div className="h-[16.875rem] w-[55rem]">
          <div className="mx-auto w-[7.938rem] rounded-[1.25rem] bg-amber-400 py-[0.625rem] text-center align-top text-base font-medium tracking-tighter text-neutral-800 shadow-md">
            Top Destinos
          </div>
          <div className="mt-8 h-[4.563rem] w-[55rem]">
            <h2 className="text-center align-top text-[3.5rem] font-medium leading-[130.8%] tracking-tighter text-neutral-800">
              Destinos mais procurados
            </h2>
            <p className="mx-auto mb-10 mt-8 h-[2.625rem] w-[36.5rem] text-center align-top text-base leading-[130.8%] tracking-tight text-neutral-400">
              Confira os destinos mais procurados por nossos clientes nos
              últimos meses, qual seria o seu novo destino?
            </p>
            <Link
              href={'/'}
              className="mx-auto block w-[9.375rem] rounded-[2.5rem] bg-blue-950 px-5 py-[0.625rem] text-white"
            >
              Conheça mais
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid h-[36.25rem] w-[55rem] grid-cols-3 items-center justify-items-center gap-5">
        {imagesGrid.map((image) => (
          <Image
            key={image.name}
            src={image.src}
            alt={image.name}
            className={`${image.align}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GridImages;
