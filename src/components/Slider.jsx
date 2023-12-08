"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="assets" className="mx-auto max-w-[1240px]">
      <h1 className="p-4 text-center text-2xl font-bold">
        Możliwości użytkownika
      </h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-1 duration-1000 ease-in"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className="absolute left-[30px] top-[50%] z-[2] cursor-pointer select-none text-black"
              size={50}
            />

            {index === current && (
              <Image
                src={slide.image}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className="absolute right-[30px] top-[50%] z-[2] cursor-pointer select-none text-black/70"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
