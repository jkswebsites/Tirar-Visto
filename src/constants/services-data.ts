import imgPassport from '@/assets/images/passport.png';
import imgPassportVisa from '@/assets/images/passport+visa.png';
import imgPassportFull from '@/assets/images/service-full.png';

export const services = [
  {
    category: 'Passaporte',
    type: 'On-line',
    time: '45 dias',
    price: 'R$ 890,00',
    img: imgPassport,
  },
  {
    category: 'Passaporte + Visto',
    type: 'On-line + Presencial',
    time: '25 dias',
    price: 'R$ 1.290,00',
    img: imgPassportVisa,
  },
  {
    category: 'Consultoria Completa',
    type: 'Presencial Completo',
    time: '10 dias',
    price: 'R$ 1.890,00',
    img: imgPassportFull,
  },
];
