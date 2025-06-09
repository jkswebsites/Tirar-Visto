import { services } from '@/constants/services-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesItems = () => {
  return (
    <div className="mt-[3.75rem] flex h-[39.125rem] w-[82.5rem] gap-6">
      {services.map((service) => (
        <div
          className="h-[39.125rem] w-[26.5rem] rounded-3xl border border-neutral-200 bg-slate-50 p-4"
          key={service.category}
        >
          <Image
            src={service.img}
            alt={service.category}
            className="h-[18.75rem] w-[24.5rem] rounded-2xl"
          />
          <div className="mt-8 h-[16.375rem] w-[24.5rem]">
            <div className="flex h-[2rem] w-[12.938rem] items-center justify-between text-base font-semibold">
              <button className="h-[2rem] w-[5.125rem] rounded-[2.5rem] border border-neutral-800 text-neutral-800">
                Basic
              </button>
              <button className="h-[2rem] w-[6.813rem] rounded-[2.5rem] border border-neutral-400 text-neutral-400">
                Premium
              </button>
            </div>

            <div className="mt-5 h-[7.688rem] w-[24.5rem] border-b border-neutral-200">
              <h2 className="h-8 align-top text-[28px] font-semibold">
                {service.category}
              </h2>

              <div className="mt-4 flex h-[70px] w-[392px] justify-between">
                <div className="h-[50px] w-[154px]">
                  <h3 className="mb-2 h-[21px] w-[154px] text-base font-medium text-neutral-800">
                    Atendimento
                  </h3>
                  <p className="w-[156px] text-base text-neutral-400">
                    {service.type}
                  </p>
                </div>

                <div className="h-[50px] w-[154px] space-y-2">
                  <h3 className="text-base font-medium text-neutral-800">
                    Tempo
                  </h3>
                  <p className="w-[156px] text-base text-neutral-400">
                    {service.time} dias
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex h-[4.188rem] w-[24.5rem] items-center justify-between">
              <div>
                <h6 className="h-[1.313rem] w-[6.375rem] align-top text-base text-neutral-400">
                  A partir de
                </h6>
                <p className="align-top text-[2rem] font-semibold">
                  {service.price}
                </p>
              </div>
              <Link
                href={'/'}
                className="flex h-[3.375rem] w-[7.188rem] items-center justify-center rounded-[2.5rem] bg-blue-950 text-white"
              >
                Contratar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesItems;
