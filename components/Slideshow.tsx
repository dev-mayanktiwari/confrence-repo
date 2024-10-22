"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/slideshow1.jpeg",
    alt: "Conference Hall",
    caption: "Join us for NCC 2024 at IIT Madras",
  },
  {
    id: 2,
    src: "/slideshow3.jpeg",
    alt: "Networking Event",
    caption: "Network with leading professionals in communications",
  },
  {
    id: 3,
    src: "/slideshow3.jpeg",
    alt: "Keynote Speaker",
    caption: "Hear from world-renowned speakers in the field",
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <p className="text-lg md:text-xl font-semibold text-center">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
