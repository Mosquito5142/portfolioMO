
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function Navbar2() {
  const t = useTranslations("Index");

  return (
    <nav className="bg-gray-800">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold">
        {t("title")}
      </Link>

      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            {t("About")}
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>

      <div className="md:hidden">
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  );
}
