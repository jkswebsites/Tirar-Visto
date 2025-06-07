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
    <main className="flex h-[940px] w-[1440px]">
      <div>
        <Header />
        <article className="mb-[115px] ml-[60px] mt-10 h-[525px] w-[598px]">
          <div className="h-[245px] border-b-[1.5px] border-neutral-200">
            <h2 className="h-[213px] text-[54px] font-medium leading-tight tracking-tighter text-neutral-800">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </h2>
          </div>

          <div className="mt-[60px] flex">
            <div className="h-[220px] w-[327px]">
              <p className="leading-[1.31rem]tracking-tight text-left align-top text-base text-neutral-400">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>

              <Link
                href={'/'}
                className="mt-10 flex h-[54px] w-[160px] items-center gap-3 rounded-[40px] bg-blue-950 px-[10px] py-5 text-white"
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

            <div className="ml-5 h-[167px] w-[191px] space-y-[16px] self-end bg-white">
              <Image
                src={imgAboutUs}
                alt="vídeo sobre tirar visto"
                width={191}
                height={110}
              />
              <div className="flex h-[41px] w-[191px] justify-between text-left align-top">
                <div>
                  <h2 className="leading-[1.31rem]text-neutral-800 mb-[4px] text-base font-semibold">
                    Conheça a Bruna
                  </h2>
                  <span className="leading-[1.31rem]text-neutral-400 text-xs">
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
