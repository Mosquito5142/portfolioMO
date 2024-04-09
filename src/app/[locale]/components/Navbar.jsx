import { useTranslations } from 'next-intl';
import Navbar2 from './Navbar2';

export default function Navbar() {
    const Index = useTranslations('Index');
    const Nav = useTranslations('Nav');
    const name = Index('name');
    const about = Nav('about'); // Access translated value
    const project = Nav('project');
    const contact = Nav('contact');
  return (
    <Navbar2 about={about} name={name} project={project} contact={contact}/> // Pass translated title as prop
  );
}
