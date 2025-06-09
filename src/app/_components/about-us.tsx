import React from 'react';
import imgTourist from '@/assets/images/happy-tourist.png';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import Link from 'next/link';
import TitleRadius from './title-radius';

const AboutUs = () => {
  return (
    <section className="h-[55.813rem] w-[90rem] bg-white px-[3.75rem] py-[5.938rem]">
      <div className="h-[12.438rem] w-[82.5rem]">
        <TitleRadius title="Veja como funciona" />
        <div className="mt-2 flex h-[9.125rem] w-[82.5rem]">
          <div>
            <h3 className="h-[9.125rem] w-[26.25rem] text-left align-top text-[3.5rem] font-medium tracking-tighter text-neutral-800">
              Sua tranquilidade não tem preço!
            </h3>
          </div>
          <div>
            <p className="ml-[4.625rem] mt-[2.375rem] h-[5.25rem] w-[51.625rem] text-left align-top text-base leading-[130.8%] tracking-tight text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[3.75rem] flex h-[27.75rem] w-[82.5rem]">
        <Image
          src={imgTourist}
          alt="3 tourist happy"
          width={756}
          height={444}
        />

        <div className="my-3 ml-9 h-[26.25rem] w-[33rem]">
          <div className="h-[9.5rem] w-full border-b border-neutral-200 px-3 py-5">
            <h3 className="text-left align-top text-[2.75rem] font-medium tracking-tight text-neutral-800">
              Etapa Inicial
            </h3>

            <p className="h-[2.625rem] w-[31.5rem] text-left align-top text-base font-bold leading-[130.8%] tracking-tighter text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="h-[9.5rem] w-full border-b border-neutral-200 px-3 py-5">
            <h3 className="text-left align-top text-[2.75rem] font-medium tracking-tight text-neutral-800">
              Processos de Entrevista
            </h3>

            <Link
              href={'/'}
              className="flex h-6 w-[6.375rem] items-center gap-2 text-left align-top text-base font-bold leading-[130.8%] tracking-tighter text-neutral-800"
            >
              <FaPlus />
              <span>Leia Mais</span>
            </Link>
          </div>

          <div className="h-[9.5rem] w-full border-b border-neutral-200 px-3 py-5">
            <h3 className="text-left align-top text-[2.75rem] font-medium tracking-tight text-neutral-800">
              Entrega de Documentos
            </h3>

            <Link
              href={'/'}
              className="flex h-6 w-[6.375rem] items-center gap-2 text-left align-top text-base font-bold leading-[130.8%] tracking-tighter text-neutral-800"
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
