import Image from "next/image";
import LocationBg from "@/assets/location-bg.png";

const Location = () => {
  return (
    <section
      className="mt-40 flex flex-col lg:flex-row justify-center gap-10 lg:gap-40 items-center"
      id="contact"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-righteous text-3xl font-semibold border-b pb-2">
          Nossa localização
        </h2>
        <p className="text-lg font-medium">Praça Rio Branco, 363 Recife</p>
        <h2 className="font-righteous text-3xl font-semibold border-b pb-2">
          Contato
        </h2>
        <p className="text-lg font-medium">(81) 3300-5555</p>
        <p className="text-lg font-medium">contato@saboresdobrasil.com</p>
      </div>
      <div className="w-64 h-[24rem] p-4 bg-brand-light relative">
        <Image
          src={LocationBg}
          alt="Reserve sua mesa"
          className="absolute right-6"
        />
      </div>
    </section>
  );
};

export default Location;
