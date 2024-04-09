import { useTranslations } from 'next-intl';
import  HeroSection2 from './HeroSection2';

export default function HeroSection() {
  const HeroSection = useTranslations('HeroSection');
  const Hello = HeroSection('Hello'),
        name = HeroSection('name'),
        nickname = HeroSection('nickname'),
        webdeveloper = HeroSection('webdeveloper'),
        mobiledeveloper = HeroSection('mobiledeveloper'),
        description = HeroSection('description'),
        github = HeroSection("github"),
        resume = HeroSection("resume")

  return (
    <HeroSection2 Hello={Hello} name={name} nickname={nickname} webdeveloper={webdeveloper} 
    mobiledeveloper={mobiledeveloper} description={description} github={github} resume={resume}
    /> // Pass translated title as prop
  );
}
