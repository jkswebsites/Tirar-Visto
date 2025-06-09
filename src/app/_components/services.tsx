import React from 'react';
import TitleRadius from './title-radius';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ServicesItems from './services-items';

const Services = () => {
  return (
    <section className="h-[59.875rem] w-[90rem] px-[3.75rem] pb-[4.719rem] pt-[4.656rem]">
      <div className="h-[7.625rem] w-[82.5rem]">
        <TitleRadius title="Pacotes" />
        <div className="mt-2 flex h-[4.563rem] justify-between">
          <h2 className="w-[70.75rem] text-[3.5rem] font-medium leading-[130.8%] tracking-tight">
            Confira nossos pacotes
          </h2>

          <div className="flex h-[3.375rem] w-[8rem] justify-between self-end">
            <button className="button-size border-blue-950 bg-slate-50 text-blue-950">
              <BsArrowLeft className="mx-auto h-[1.5rem] w-6" />
            </button>

            <button className="button-size border-blue-950 bg-blue-950 text-slate-50">
              <BsArrowRight className="mx-auto h-[1.5re,] w-6" />
            </button>
          </div>
        </div>
      </div>

      <ServicesItems />
    </section>
  );
};

export default Services;
