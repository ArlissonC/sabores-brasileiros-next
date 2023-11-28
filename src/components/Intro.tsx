import Image from "next/image";

import emojiSvg from "@/assets/emoji.svg";
import pratoPng from "@/assets/prato-intro.png";

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <div className="relative w-fit">
          <h1 className="font-semibold lg:leading-[7.5rem] text-7xl lg:text-8xl font-righteous text-slate-900">
            Pratos feitos <br />
            com amor
          </h1>
          <Image
            src={emojiSvg}
            width={60}
            alt="Emoji carinha apaixonada"
            className="hidden lg:block absolute bottom-4 right-20"
          />
        </div>
        <p className="max-w-2xl my-10">
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
          elitis. Pra lá, depois divoltis porris, paradis. Paisis, filhis,
          espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in
          elementis mé pra quem é amistosis quis leo.
        </p>
      </div>
      <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-brand-light flex items-center lg:pl-2 pr-4 lg:pr-0">
        <Image src={pratoPng} alt="Emoji carinha apaixonada" />
      </div>
    </div>
  );
};

export default Intro;
