import logoSvg from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { TbPaperBag } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center mt-5 mb-20 mx-auto max-w-7xl px-2">
      <Link href="/">
        <Image src={logoSvg} alt="Logo" />
      </Link>
      <ul className="flex items-center gap-4 font-bold text-lg">
        <li>
          <a href="/#services">Serviços</a>
        </li>
        <li>
          <a href="/#menu">Menu</a>
        </li>
        <li>
          <a href="/#contact">Contato</a>
        </li>
        <li className="relative">
          <Link
            href="bag"
            className="w-10 h-10 rounded-full border border-brand bg-white flex items-center justify-center"
          >
            <TbPaperBag className="text-brand text-xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
