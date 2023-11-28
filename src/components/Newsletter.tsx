import NewsletterBg from "@/assets/bg-newslatter.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section
      style={{ backgroundImage: `url(${NewsletterBg.src})` }}
      className="mt-60 w-full lg:h-[25.5rem]
      p-10
  lg:py-24 lg:px-52 newsletter bg-no-repeat bg-cover rounded-[3.75rem]"
    >
      <p className="font-righteous text-white font-semibold text-xl lg:text-5xl text-newsletter text-center">
        Assine nossa newsletter e ganhe <br /> 50% de desconto
      </p>
      <div className="relative">
        <input
          type="email"
          className="p-6 w-full rounded-full text-lg mt-10 placeholder:font-medium placeholder:font-righteous placeholder:tracking-widest"
          placeholder="Seu e-mail aqui"
        />
        <button className="absolute p-3 lg:py-4 lg:px-10 bg-brand rounded-full font-medium font-righteous tracking-widest right-3 lg:top-[3.125rem] top-14">
          Assinar
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
