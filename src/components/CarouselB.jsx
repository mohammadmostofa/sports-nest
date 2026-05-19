'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const slides = [
  {
    id: 1,
    image: '/one.jpg',
    title: 'Join Our Club',
    subtitle: 'Train with professionals and improve your game every day.',
  },
  {
    id: 2,
    image: '/two.jpg',
    title: 'Start Your Journey',
    subtitle: 'Become part of a strong and passionate sports community.',
  },
  {
    id: 3,
    image: '/three.jpg',
    title: 'Play Like Champions',
    subtitle: 'Experience world-class facilities and competitive matches.',
  },
  {
    id: 4,
    image: '/four.jpg',
    title: 'Achieve Your Goals',
    subtitle: 'Push your limits and unlock your true athletic potential.',
  },
];

const CarouselB = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full my-16">
  <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl">

    {slides?.map((slide, index) => (
      <div
        key={slide.id}
        className={`transition-all duration-700 ease-in-out ${
          currentSlide === index
            ? 'opacity-100 relative'
            : 'opacity-0 absolute inset-0'
        }`}
      >
        <div className="relative">

          <Image
            src={slide.image}
            width={1400}
            height={700}
            alt={slide.title}
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-[rgba(60,32,53,0.44)]"></div>

          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-xl text-white">

              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {slide?.title}
                <br />
                And Start Today
              </h2>

              <p className="mt-5 text-sm md:text-lg text-gray-200 leading-relaxed">
                {slide?.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="px-7 py-3 rounded-full  bg-gradient-to-r  from-[#7a0121] to-[#000a73]  text-white font-semibold border-0 hover:opacity-80  text-md  transition ">
                  Book A Court
                </button>

                <button className="px-7 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black  transition-all duration-300">
                  Join Us Now
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    ))}

  </div>

  <div className="flex justify-center items-center gap-3 mt-6">
    {slides?.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`transition-all duration-300 ${
          currentSlide === index
            ? 'w-8 h-3 bg-violet-600 rounded-full'
            : 'w-3 h-3 bg-gray-300 rounded-full'
        }`}
      ></button>
    ))}
  </div>
</section>
  );
};

export default CarouselB;