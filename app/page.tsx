'use client'

import React from "react";
import { ContentPage, Cover } from "./components";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Page() {
  const [ref] = useKeenSlider<HTMLDivElement>()

  return ( 
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide"><Cover /></div>
      <div className="keen-slider__slide"><ContentPage /></div>
    </div>
  );
}