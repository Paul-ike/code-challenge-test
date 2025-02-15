import AnimatedLogos from "@/components/AnimatedLogos";
import Hero from "@/components/Hero";
import PartnerCarousel from "@/components/PartnerCarousel";
import SectionTwo from "@/components/SectionTwo";

const partnersData = [
  {
      imageUrl: '/images/i1.png',
      alt: 'O.C.O Technology',
      link: 'https://www.missionzero.tech/projects/oco-technology',
  },
  {
      imageUrl: '/images/i3.png',
      alt: 'Sheffield University',
      link: 'https://www.sheffield.ac.uk',
  },
  {
      imageUrl: '/images/i2.png',
      alt: 'Deep Sky',
      link: 'https://www.deepsky.com',
  },
];

const Page = () => {
  return (
    <div>
      <Hero />
      <AnimatedLogos />
      <SectionTwo />
      <PartnerCarousel partners={partnersData} />
    </div>
  );
};

export default Page;
