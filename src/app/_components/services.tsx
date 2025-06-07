import React from 'react';
import TitleRadius from './title-radius';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ServicesItems from './services-items';

const Services = () => {
  return (
    <section className="h-[958px] w-[1440px] px-[60px] pb-[75.5px] pt-[74.5px]">
      <div className="h-[122px] w-[1320px]">
        <TitleRadius title="Pacotes" />
        <div className="mt-2 flex h-[73px] justify-between">
          <h2 className="w-[1132px] text-[56px] font-medium leading-[2.018rem] tracking-tight">
            Confira nossos pacotes
          </h2>

          <div className="flex h-[54px] w-[128px] justify-between self-end">
            <button className="button-size border-blue-950 bg-slate-50 text-blue-950">
              <BsArrowLeft className="mx-auto h-[24px] w-6" />
            </button>

            <button className="button-size border-blue-950 bg-blue-950 text-slate-50">
              <BsArrowRight className="mx-auto h-[24px] w-6" />
            </button>
          </div>
        </div>
      </div>

      <ServicesItems />
    </section>
  );
};

export default Services;
