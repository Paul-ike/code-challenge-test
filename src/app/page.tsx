import AnimatedLogos from "@/components/AnimatedLogos";
import FirstPlant from "@/components/FirstPlant";
import Hero from "@/components/Hero";
import LabNotes from "@/components/LabNotes";
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

const labNotesData = [
  {
    imageUrl: '/images/lb1.jpg',
    date: 'January 24, 2025',
    title: 'What is direct air capture?',
    link: 'https://www.missionzero.tech/learn/what-is-dac',
  },
  {
    imageUrl: '/images/lb2.jpg',
    date: 'January 10, 2025',
    title: 'What sets DAC apart from CCS technology?',
    link: 'https://www.missionzero.tech/learn/dac-vs-ccs',
  },
  {
    imageUrl: '/images/lb3.jpg',
    date: 'January 1, 2025',
    title: 'Benefits of direct air capture: Why is it such a promising carbon removal tool?',
    link: 'https://www.missionzero.tech/learn/dac-vs-ccs',
  }
];

const Page = () => {
  return (
    <div>
      <Hero />
      <AnimatedLogos />
      <SectionTwo />
      <PartnerCarousel partners={partnersData} />
      <LabNotes notes={labNotesData} />
      <FirstPlant />
    </div>
  );
};

export default Page;
