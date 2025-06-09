import Link from 'next/link';
import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

const Contact = () => {
  return (
    <div className="h-[42.188rem] w-[90rem] px-[3.75rem] py-[4.375rem]">
      <div className="flex h-[20.875rem] w-[82.5rem] items-center justify-between">
        <div className="h-[18.375rem] w-[28.5rem]">
          <h3 className="h-[9.125rem] text-[3.5rem] font-medium tracking-tighter">
            Está com alguma dúvida?
          </h3>
          <p className="mt-3 align-text-top text-base tracking-tight text-neutral-400">
            Entre em contato através do nosso canal direto ao cliente através do
            botão abaixo
          </p>

          <Link
            href={'/'}
            className="mt-[40px] inline-block rounded-[40px] bg-blue-950 px-5 py-[10px] text-base text-white"
          >
            Central de Atendimento
          </Link>
        </div>
        <div className="flex h-[4.286rem] w-[31.25rem] items-start justify-between border-b border-neutral-800">
          <h6 className="align-top text-[2.5rem] tracking-tighter">
            Receba novidades
          </h6>
          <TfiArrowTopRight className="text-[40px] text-neutral-800" />
        </div>
      </div>

      <div className="mt-[2.5rem] flex h-[10.063rem] w-[82.5rem] items-end justify-between">
        <div className="h-[5.063rem] w-[28.188rem] space-y-5">
          <p className="h-[1.313rem] text-base font-semibold tracking-tight text-neutral-800">
            Siga em nossas redes:
          </p>

          <div className="link-media-social flex h-[40px] w-[451px] gap-x-5">
            <Link href={'/'}>Instagram</Link>
            <Link href={'/'}>X</Link>
            <Link href={'/'}>Facebook</Link>
            <Link href={'/'}>YouTube</Link>
          </div>
        </div>

        <div className="flex h-[10.063rem] w-[38.25rem] justify-between">
          <div className="cart-contact-links">
            <h4>Empresa</h4>

            <div>
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Quem somos</Link>
              <Link href={'/'}>Serviços</Link>
              <Link href={'/'}>Contato</Link>
            </div>
          </div>

          <div className="cart-contact-links">
            <h4>Novidades</h4>

            <div>
              <Link href={'/'}>Passaporte</Link>
              <Link href={'/'}>Visto</Link>
              <Link href={'/'}>Entrevista</Link>
              <Link href={'/'}>Polícia Federal</Link>
            </div>
          </div>

          <div className="cart-contact-links">
            <h4>Suporte</h4>

            <div>
              <Link href={'/'}>FAQ</Link>
              <Link href={'/'}>Contato</Link>
              <Link href={'/'}>Dúvidas Frequentes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
