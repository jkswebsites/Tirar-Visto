import { services } from '@/constants/services-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesItems = () => {
  return (
    <div className="mt-[60px] flex h-[626px] w-[1320px] gap-6">
      {services.map((service) => (
        <div
          className="h-[626px] w-[424px] rounded-3xl border border-neutral-200 bg-slate-50 p-4"
          key={service.category}
        >
          <Image
            src={service.img}
            alt={service.category}
            className="h-[300px] w-[392px] rounded-2xl"
          />
          <div className="mt-8 h-[262px] w-[392px]">
            <div className="flex h-[32px] w-[207px] items-center justify-between text-base font-semibold">
              <button className="h-[32px] w-[82px] rounded-[40px] border border-neutral-800 text-neutral-800">
                Basic
              </button>
              <button className="h-[32px] w-[109px] rounded-[40px] border border-neutral-400 text-neutral-400">
                Premium
              </button>
            </div>

            <div className="mt-5 h-[123px] w-[392px] border-b border-neutral-200">
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

            <div className="mt-5 flex h-[67px] w-[392px] items-center justify-between">
              <div>
                <h6 className="h-[21px] w-[102px] align-top text-base text-neutral-400">
                  A partir de
                </h6>
                <p className="align-top text-[32px] font-semibold">
                  {service.price}
                </p>
              </div>
              <Link
                href={'/'}
                className="flex h-[54px] w-[115px] items-center justify-center rounded-[40px] bg-blue-950 text-white"
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
