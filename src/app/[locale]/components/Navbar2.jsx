import Navtext from "./ืNavtext"; // Assuming Navtext provides navigation link data
import Link from "next/link";

const Navbar = () => {
  const navLinks = Navtext();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <dib className="text-2xl font-bold">ชื่อเว็บไซต์ของคุณ</dib>
        </Link>
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <div className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">{link.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
