import ReservationBg from "@/assets/bg-reservation.png";
import Image from "next/image";

const TableReservation = () => {
  return (
    <section className="mt-32 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="flex flex-col gap-5 max-w-md">
        <h2 className="font-righteous text-3xl font-semibold">
          Reserve sua mesa
        </h2>
        <p>
          Amplo espaço para você e sua família, venha jantar no melhor local da
          região.
        </p>
        <button className="font-righteous bg-brand-light p-3 rounded-lg shadow-xl border border-brand w-60">
          Fazer reserva
        </button>
      </div>
      <div className="w-72 h-48 lg:w-[32rem] lg:h-[22rem] p-4 bg-brand-light relative">
        <Image
          src={ReservationBg}
          alt="Reserve sua mesa"
          className="absolute right-6 top-5"
        />
      </div>
    </section>
  );
};

export default TableReservation;
