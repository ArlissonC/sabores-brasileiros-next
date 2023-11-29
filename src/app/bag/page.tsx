"use client";

import Image from "next/image";
import Feijoada from "@/assets/feijoada.png";
import { IoStorefrontOutline, IoCardOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining, MdOutlinePix } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import classNames from "classnames";
import { useBagStore } from "@/store/useBagStore";
import { useBag } from "@/hooks/useBag";
const deliveryModes = [
  {
    name: "Retirada no local",
    icon: <IoStorefrontOutline className="text-xl" />,
  },
  { name: "Entrega", icon: <MdOutlineDeliveryDining className="text-xl" /> },
];

const paymentMethods = [
  {
    name: "Dinheiro",
    icon: <FaRegMoneyBillAlt className="text-xl" />,
  },
  { name: "PIX", icon: <MdOutlinePix className="text-xl" /> },
  { name: "Cartão", icon: <IoCardOutline className="text-xl" /> },
];

const Bag = () => {
  const {
    state: { bag },
  } = useBagStore();
  const {
    deliveryMode,
    paymentMethod,
    totalPrice,
    setDeliveryMode,
    setPaymentMethod,
    updateAmountDishes,
    removeDish,
  } = useBag();

  return (
    <section className="bg-white rounded-xl p-4 mx-auto max-w-7xl px-2">
      <h2 className="font-righteous text-3xl text-center border-b-2 border-brand-light pb-2">
        Sua sacola
      </h2>
      {bag.length > 0 ? (
        <>
          {bag.map((b) => (
            <div className="font-righteous flex flex-col lg:flex-row items-center lg:justify-between gap-4 mt-10 text-xl border-b-2 pb-6">
              <img src={b.img} alt={b.dish} className="w-20 max-w-full" />
              <p className="lg:w-40">{b.dish}</p>
              <div className="flex gap-2">
                <button
                  className="font-semibold"
                  onClick={() => updateAmountDishes(b.dish)}
                >
                  -
                </button>
                <input
                  readOnly
                  value={b.amount}
                  className="border border-brand rounded-md lg:w-20 px-2 text-center"
                  type="number"
                />
                <button
                  className="font-semibold"
                  onClick={() => updateAmountDishes(b.dish, true)}
                >
                  +
                </button>
              </div>
              <span className="lg:w-44">
                {(b.price * b.amount).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => removeDish(b.id)} className="text-red-600">
                Remover
              </button>
            </div>
          ))}
          <p className="text-right font-righteous text-3xl font-semibold mt-8">
            Total:{" "}
            {totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <p className="font-righteous text-xl">Modo de entrega</p>
            {deliveryModes.map((d) => (
              <button
                onClick={() => setDeliveryMode(d.name)}
                className={classNames({
                  "flex items-center gap-2 p-3 border w-full rounded-md": true,
                  "border-black": d.name !== deliveryMode,
                  "border-brand": d.name === deliveryMode,
                })}
              >
                {d.icon}
                <p className="font-medium">{d.name}</p>
              </button>
            ))}
          </div>
          <div className="border-b-2 pb-8">
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-righteous text-xl">Como você vai pagar?</p>
              {paymentMethods.map((p) => (
                <button
                  onClick={() => setPaymentMethod(p.name)}
                  className={classNames({
                    "flex items-center gap-2 p-3 border w-full rounded-md":
                      true,
                    "border-black": p.name !== paymentMethod,
                    "border-brand": p.name === paymentMethod,
                  })}
                >
                  {p.icon}
                  <p className="font-medium">{p.name}</p>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-righteous text-xl">Qual seu nome?</p>
              <input
                type="text"
                className="py-3 px-4 border rounded-md"
                placeholder="Ex: Jhon"
              />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-righteous text-xl">Número do seu celular</p>
              <input
                type="text"
                className="py-3 px-4 border rounded-md"
                placeholder="Ex: (81) 90000-0000"
              />
            </div>
          </div>
          <button className="w-full border border-brand bg-brand-light p-4 rounded-md mt-4 font-righteous text-xl">
            Finalizar pedido
          </button>
        </>
      ) : (
        <p className="font-righteous text-xl text-center mt-4 text-slate-700">
          Ops! Parece que este lugar está um pouco vazio... 🫣
        </p>
      )}
    </section>
  );
};

export default Bag;
