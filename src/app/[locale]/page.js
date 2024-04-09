import HeroSectionT from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { useTranslations } from 'next-intl';

export default function Home() {
  const Index = useTranslations('Index');
  const Nav = useTranslations('Nav');
  const HeroSection = useTranslations('HeroSection');
  const About = useTranslations('AboutSection');


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar about={Nav('about')} name={Index('name')} project={Nav('project')} contact={Nav('contact')}/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSectionT Hello={HeroSection('Hello')} name={HeroSection('name')} nickname={HeroSection('nickname')} webdeveloper={HeroSection('webdeveloper')} 
    mobiledeveloper={HeroSection('mobiledeveloper')} description={HeroSection('description')} github={HeroSection('github')} resume={HeroSection('resume')}/>
        <AboutSection about={About('aboutMe')} description={About('description')} skills={About('skills')} education={About('education')} education1={About('education1')} education2={About('education2')} education3={About('education3')} education4={About('education4')} education5={About('education5')} />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
