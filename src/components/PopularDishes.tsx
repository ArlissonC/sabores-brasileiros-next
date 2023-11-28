"use client";

import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "./DishCard";
import dishes from "@/dishes.json";

const PopularDishes = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="mt-40">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between">
        <h2 className="font-righteous text-3xl lg:text-4xl font-semibold">
          Pratos populares
        </h2>
        <div className="flex gap-4">
          <button
            onClick={previous}
            className="w-10 h-10 rounded-full border border-brand flex items-center justify-center"
          >
            <IoMdArrowRoundBack className="text-2xl text-brand" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-brand flex items-center justify-center"
          >
            <IoMdArrowRoundForward className="text-2xl text-brand" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {dishes.map((d) => (
          <DishCard key={d.id} dish={d} />
        ))}
      </Slider>
    </section>
  );
};

export default PopularDishes;
