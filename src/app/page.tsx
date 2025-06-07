import AboutUs from './_components/about-us';
import Contact from './_components/contact';
import Footer from './_components/footer';
import GridImages from './_components/grid-images';
import Hero from './_components/hero';
import Information from './_components/information';
import Services from './_components/services';

export default function Home() {
  return (
    <div className="bg-white font-[family-name:var(--font-inter)]">
      <Hero />
      <Information />
      <AboutUs />
      <GridImages />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
