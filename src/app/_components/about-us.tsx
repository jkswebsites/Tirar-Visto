import React from 'react';
import imgTourist from '@/assets/images/happy-tourist.png';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import Link from 'next/link';
import TitleRadius from './title-radius';

const AboutUs = () => {
  return (
    <section className="h-[893px] w-[1440px] bg-white px-[60px] py-[95px]">
      <div className="h-[199px] w-[1320px]">
        <TitleRadius title="Veja como funciona" />
        <div className="mt-2 flex h-[146px] w-[1320px]">
          <div>
            <h3 className="h-[146px] w-[420px] text-left align-top text-[56px] font-medium tracking-tighter text-neutral-800">
              Sua tranquilidade não tem preço!
            </h3>
          </div>
          <div>
            <p className="ml-[74px] mt-[38px] h-[84px] w-[826px] text-left align-top text-base leading-5 tracking-[-0.02rem] text-neutral-400">
              dLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex h-[444px] w-[1320px]">
        <Image
          src={imgTourist}
          alt="3 tourist happy"
          width={756}
          height={444}
        />

        <div className="my-3 ml-9 h-[420px] w-[528px]">
          <div className="h-[152px] w-full border-b border-neutral-200 px-[12px] py-5">
            <h3 className="text-left align-top text-[44px] font-medium tracking-tight text-neutral-800">
              Etapa Inicial
            </h3>

            <p className="h-[42px] w-[504px] text-left align-top text-base font-bold leading-5 tracking-tighter text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="h-[152px] w-full border-b border-neutral-200 px-[12px] py-5">
            <h3 className="text-left align-top text-[44px] font-medium tracking-tight text-neutral-800">
              Processos de Entrevista
            </h3>

            <Link
              href={'/'}
              className="flex h-[24px] w-[102px] items-center gap-[8px] text-left align-top text-base font-bold leading-5 tracking-tighter text-neutral-800"
            >
              <FaPlus />
              <span>Leia Mais</span>
            </Link>
          </div>

          <div className="h-[152px] w-full border-b border-neutral-200 px-[12px] py-5">
            <h3 className="text-left align-top text-[44px] font-medium tracking-tight text-neutral-800">
              Entrega de Documentos
            </h3>

            <Link
              href={'/'}
              className="flex h-[24px] w-[102px] items-center gap-[8px] text-left align-top text-base font-bold leading-5 tracking-tighter text-neutral-800"
            >
              <FaPlus />
              <span>Leia Mais</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
