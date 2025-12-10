"use client";
import CarouselSlider from "@/components/pages/home/CarouselSlider";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="main min-h-screen">
      <section
        id="homepage-search"
        className="absolute inset-0 flex flex-col justify-end md:justify-center items-center gap-[30px] z-[1px] px-4 pb-[150px] md:pb-0"
      >
        {/* Carousel */}
        <CarouselSlider />

        {/* <div className="booking"></div>
        <div className="banner-button">
          <Button>EXPLORE</Button>
        </div> */}
      </section>
    </div>
  );
}
