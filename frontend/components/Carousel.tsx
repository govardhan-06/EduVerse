'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  image: string;
  tags: string[];
  title: string;
  description: string;
  backgroundColor: string;
}

const carouselData: CarouselSlide[] = [
  {
    image: 'https://fotoyxjncpaxhjzckizf.supabase.co/storage/v1/object/public/assets/spaces/college_classroom.png',
    tags: ['Official', 'Game'],
    title: 'ZEP Boxing',
    description: 'Defeat other players and become the champion!',
    backgroundColor: 'bg-blue-900'
  },
  {
    image: 'https://fotoyxjncpaxhjzckizf.supabase.co/storage/v1/object/public/assets/spaces/modern_classroom.png',
    tags: ['Official'],
    title: 'Upgraded PRO Plan',
    description: 'Get unlimited access to the Data Dashboard and Official Apps.',
    backgroundColor: 'bg-violet-500'
  },
  {
    image: 'https://fotoyxjncpaxhjzckizf.supabase.co/storage/v1/object/public/assets/spaces/reading_classroom.png',
    tags: ['Official', 'Game'],
    title: 'Bonbon School Detectives',
    description: 'Uncover the truth behind the missing students!',
    backgroundColor: 'bg-gray-500'
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-[400px] w-full">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`min-w-full h-full relative ${slide.backgroundColor} rounded-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-16">
                {/* Left content */}
                <div className="text-white space-y-4 max-w-md z-10">
                  <div className="flex gap-2">
                    {slide.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-black/20 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div>
                
                {/* Right image */}
                <div className="relative h-full w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};