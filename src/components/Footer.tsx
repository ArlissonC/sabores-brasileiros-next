import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-brand-light h-28 py-6">
      <div className="mx-auto max-w-7xl px-2 flex justify-between items-center gap-2 text-lg">
        <div className="flex flex-col gap-2">
          <p>
            Desenvolvido por:
            <span className="font-bold"> Arlisson Costa</span>
          </p>
          <p>Alguns direitos reservados</p>
        </div>
        <div className="flex gap-4 text-4xl">
          <a href="https://github.com/ArlissonC" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/arlissoncosta/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
