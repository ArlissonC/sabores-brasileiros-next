import Image from "next/image";
import ServicesBg from "@/assets/bg-services.png";
import OrderOn from "@/assets/order-on.svg";
import Chefs from "@/assets/chefs.svg";
import FastDelivery from "@/assets/fast-delivery.svg";
import Price from "@/assets/price.svg";
import Services24 from "@/assets/service-24h.svg";
import Ambient from "@/assets/ambient.svg";

const Services = () => {
  return (
    <section className="mt-40" id="services">
      <div className="flex items-center justify-center gap-14">
        <Image
          src={ServicesBg}
          alt="Serviços"
          className="rounded-full hidden lg:block"
        />
        <div className="flex flex-col gap-3 max-w-lg">
          <h2 className="font-righteous text-4xl font-semibold">
            Múltiplos serviços para lhe servir
          </h2>
          <p className="my-4 lg:my-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex items-end gap-3">
                <Image src={OrderOn} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Pedido Online
                </span>
              </div>
              <div className="flex items-end gap-3">
                <Image src={Services24} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Serviço 24/7
                </span>
              </div>
              <div className="flex items-end gap-3">
                <Image src={FastDelivery} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Entrega rápida
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-10 mt-5">
              <div className="flex items-end gap-3">
                <Image src={Ambient} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Ambiente Agradável
                </span>
              </div>
              <div className="flex items-end gap-3">
                <Image src={Price} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Preço Acessível
                </span>
              </div>
              <div className="flex items-end gap-3">
                <Image src={Chefs} alt="Pedido Online" width={30} />
                <span className="font-righteous font-medium text-xl">
                  Super Chefs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
