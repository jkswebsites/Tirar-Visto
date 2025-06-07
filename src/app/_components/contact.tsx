import Link from 'next/link';
import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

const Contact = () => {
  return (
    <div className="h-[675px] w-[1440px] px-[60px] py-[70px]">
      <div className="flex h-[334px] w-[1320px] items-center justify-between">
        <div className="h-[294px] w-[456px]">
          <h3 className="h-[146px] text-[56px] font-medium tracking-tighter">
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
        <div className="flex h-[68.57px] w-[500px] items-start justify-between border-b border-neutral-800">
          <h6 className="align-top text-[40px] tracking-tighter">
            Receba novidades
          </h6>
          <TfiArrowTopRight className="text-[40px] text-neutral-800" />
        </div>
      </div>

      <div className="mt-[40px] flex h-[161px] w-[1320px] items-end justify-between">
        <div className="h-[81px] w-[451px] space-y-5">
          <p className="h-[21px] text-base font-semibold tracking-tight text-neutral-800">
            Siga em nossas redes:
          </p>

          <div className="link-media-social flex h-[40px] w-[451px] gap-x-5">
            <Link href={'/'}>Instagram</Link>
            <Link href={'/'}>X</Link>
            <Link href={'/'}>Facebook</Link>
            <Link href={'/'}>YouTube</Link>
          </div>
        </div>

        <div className="flex h-[161px] w-[612px] justify-between">
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
