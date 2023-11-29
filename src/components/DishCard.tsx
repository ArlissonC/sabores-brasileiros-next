import Image from "next/image";
import feijoadaImg from "@/assets/feijoada.png";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { TbPaperBag } from "react-icons/tb";
import { useBag } from "@/hooks/useBag";
import { Dish } from "@/store/useBagStore";

interface DishCardProps {
  dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
  const { amount, setAmount, addProductToBag } = useBag();
  const starsArray = Array.from({ length: dish.stars }, (_, index) => (
    <FaStar className="text-xs text-yellow-500" key={index} />
  ));

  return (
    <div className="bg-white m-1 mr-4 shadow rounded-md px-8 pb-3 pt-6 flex justify-center items-center flex-col gap-2 mt-10 max-w-sm">
      <img src={dish.img} alt={dish.dish} className="w-52 max-w-full" />
      <span className="font-righteous text-2xl text-brand-secondary font-semibold">
        {dish.dish}
      </span>
      <div className="flex items-center gap-1">{starsArray}</div>
      <p className="text-center">{dish.description}</p>
      <div className="flex items-center gap-7 mt-4">
        <span className="text-brand-secondary font-righteous text-lg">
          {dish.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <div className="flex items-center gap-1">
          <button
            className="px-2 rounded-md border border-brand bg-brand-light flex items-center justify-center font-semibold"
            onClick={() => {
              if (amount > 1) setAmount(amount - 1);
            }}
          >
            -
          </button>
          <input
            className="border border-brand rounded-md w-14 px-2 text-center"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button
            className="px-2 rounded-md border border-brand bg-brand-light flex items-center justify-center font-semibold"
            onClick={() => setAmount(amount + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => addProductToBag(amount, dish)}
          className="w-10 h-10 rounded-full border border-brand bg-white flex items-center justify-center"
        >
          <TbPaperBag className="text-brand text-xl" />
        </button>
      </div>
    </div>
  );
};

export default DishCard;
