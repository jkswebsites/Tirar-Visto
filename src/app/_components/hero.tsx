import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Banner from './banner';
import imgArrowRight from '@/assets/images/arrow-right.png';
import imgAboutUs from '@/assets/images/about-us.png';
import imgCircleArrowRight from '@/assets/images/circle-arrow-right.png';
import ScreenMetrics from './screen-metrics';

const Hero = () => {
  return (
    <main className="flex h-[58.75rem] w-[90rem]">
      <div>
        <Header />
        <article className="mb-[7.188rem] ml-[3.75rem] mt-10 h-[32.813rem] w-[37.375rem]">
          <div className="h-[15.313rem]">
            <h2 className="h-[13.313rem] text-[3.375rem] font-medium leading-tight tracking-tighter text-neutral-800">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </h2>
            <div className="mt-8 h-[0.063rem] w-[33.625rem] border-b-[0.094rem] border-neutral-200"></div>
          </div>

          <div className="mt-[3.75rem] flex">
            <div className="h-[13.75rem] w-[20.438rem]">
              <p className="text-left align-top text-base leading-[130.8%] tracking-tight text-neutral-400">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>

              <Link
                href={'/'}
                className="mt-10 flex h-[3.375rem] w-[10rem] items-center gap-3 rounded-[2.5rem] bg-blue-950 px-[0.625rem] py-5 text-white"
              >
                <span className="ml-5 inline-block">Saiba mais</span>
                <Image
                  src={imgArrowRight}
                  alt="know more"
                  width={24}
                  height={24}
                />
              </Link>
            </div>

            <div className="ml-5 h-[10.438rem] w-[11.938rem] space-y-[1rem] self-end bg-white">
              <Image
                src={imgAboutUs}
                alt="vídeo sobre tirar visto"
                width={191}
                height={110}
              />
              <div className="flex h-[2.563rem] w-[11.938rem] justify-between text-left align-top">
                <div>
                  <h2 className="mb-[0.25rem] text-base font-semibold leading-[130.8%] text-neutral-800">
                    Conheça a Bruna
                  </h2>
                  <span className="text-xs leading-[130.8%] text-neutral-400">
                    Ver Vídeo
                  </span>
                </div>
                <button className="self-end">
                  <Image
                    src={imgCircleArrowRight}
                    alt="circle button see video"
                    width={36}
                    height={36}
                  />
                </button>
              </div>
            </div>
          </div>
        </article>
        <ScreenMetrics />
      </div>
      <Banner />
    </main>
  );
};

export default Hero;
