"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

type ArrowProps = {
  left?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

function Arrow({ left, disabled, onClick }: ArrowProps) {
  const disabledClass = disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow ${
        left ? "arrow--left" : "arrow--right"
      }${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="button"
      aria-label={left ? "Previous slide" : "Next slide"}
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function CarouselSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const slider: KeenSliderInstance | null = instanceRef.current;

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>

        {loaded && slider && (
          <>
            <Arrow
              left
              onClick={(e) => {
                e.stopPropagation();
                slider.prev();
              }}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) => {
                e.stopPropagation();
                slider.next();
              }}
              disabled={currentSlide === slider.track.details.slides.length - 1}
            />
          </>
        )}
      </div>

      {loaded && slider && (
        <div className="dots">
          {Array.from(
            { length: slider.track.details.slides.length },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => slider.moveToIdx(idx)}
                className={"dot" + (currentSlide === idx ? " active" : "")}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
        </div>
      )}
    </>
  );
}
