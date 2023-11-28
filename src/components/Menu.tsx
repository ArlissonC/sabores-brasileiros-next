"use client";
import classNames from "classnames";
import { useState } from "react";
import dishes from "@/dishes.json";
import DishCard from "./DishCard";

const filters = [
  { name: "todos" },
  { name: "norte" },
  { name: "nordeste" },
  { name: "sul" },
  { name: "sudeste" },
];

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const filteredDishes = dishes.filter((d) => d.region === activeFilter);

  return (
    <section className="mt-40 flex flex-col gap-10">
      <h2 className="text-center font-righteous text-4xl font-semibold">
        Nosso menu
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-10">
        {filters.map((f) => (
          <button
            key={f.name}
            onClick={() => setActiveFilter(f.name)}
            className={classNames({
              "px-6 py-1 rounded-md font-righteous  text-xl border-brand border capitalize":
                true,
              "bg-brand-light": f.name === activeFilter,
              "bg-white": f.name !== activeFilter,
            })}
          >
            {f.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap max-w-7xl">
        {filteredDishes.length > 0
          ? filteredDishes.map((d) => <DishCard key={d.id} dish={d} />)
          : dishes.map((d) => <DishCard key={d.id} dish={d} />)}
      </div>
    </section>
  );
};

export default Menu;
