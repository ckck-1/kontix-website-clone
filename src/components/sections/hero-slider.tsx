"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    headline: "Crafting landmarks that last a lifetime",
    description: "Suspendisse imperdiet magna sagittis in tortor. Integer tellus sit mauris sit maecenas aenean eu augue in eros sed nunc venenatis senectus",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb9606a5781d34f55a501_hero-three-small-01-3.webp?",
    thumb: {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb9606a5781d34f55a501_hero-three-small-01-3.webp?",
        title: "Coal mining"
    }
  },
  {
    id: 2,
    headline: "Constructing the future with quality",
    description: "Suspendisse imperdiet magna sagittis in tortor. Integer tellus sit mauris sit maecenas aenean eu augue in eros sed nunc venenatis senectus",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb960ddbd6ff42ecfe783_hero-three-small-02-4.webp?",
    thumb: {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb960ddbd6ff42ecfe783_hero-three-small-02-4.webp?",
        title: "House roof"
    }
  },
  {
    id: 3,
    headline: "From concept to creation we build",
    description: "Suspendisse imperdiet magna sagittis in tortor. Integer tellus sit mauris sit maecenas aenean eu augue in eros sed nunc venenatis senectus",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb96005b2a7fae3907211_hero-three-small-03-5.webp?",
    thumb: {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/67dbb96005b2a7fae3907211_hero-three-small-03-5.webp?",
        title: "Building"
    }
  },
];

const customerIcons = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870cf2329bb9aa19d9be95a_Vector%20(2)-8.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870cf23378c729aab2b89f1_Vector-7.webp?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870cf235839476769b4b8ca_Vector%20(1)-6.webp?",
];

const SLIDE_DURATION = 5000;

const ProgressBar = ({ active }: { active: boolean }) => {
  return (
    <div className="absolute top-0 left-0 h-[3px] w-full bg-white/20 rounded-t-lg overflow-hidden">
      <div
        className={`h-full bg-primary transition-all ease-linear duration-[${SLIDE_DURATION}ms]`}
        style={{ width: active ? '100%' : '0%' }}
      />
    </div>
  );
};


export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);

    return () => {
      resetTimeout();
    };
  }, [activeIndex, nextSlide, resetTimeout]);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <Image
                    src={slide.bgImage}
                    alt={slide.headline}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
        ))}
      
        <div className="relative z-10 w-full container mx-auto px-5">
            <div className="grid grid-cols-12 gap-x-8 items-center">
                <div className="col-span-12 lg:col-span-7">
                    <div className="max-w-2xl">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className={`transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0 absolute"}`}>
                                {index === activeIndex && (
                                    <div>
                                        <small className="block mb-4 text-primary uppercase font-semibold tracking-[0.05em]">
                                            Innovative Builds
                                        </small>
                                        <h1 className="text-[56px] font-bold leading-tight mb-6">
                                            {slide.headline}
                                        </h1>
                                        <p className="text-lg text-gray-300 max-w-lg mb-10">
                                            {slide.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                         ))}
                        
                        <div className="flex flex-wrap items-center gap-y-6 gap-x-12">
                           <a href="#" className="inline-flex items-center gap-3 bg-primary text-black font-medium py-4 px-8 rounded-full transition-transform hover:-translate-y-1">
                                <span>Start your project</span>
                                <Image 
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg?"
                                    width={10}
                                    height={9}
                                    alt="Arrow icon"
                                />
                            </a>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6870ce128d61f2edeffcd67c_Group%201009002221-8.svg?"
                                    alt="5-star rating"
                                    width={110}
                                    height={20}
                                />
                                <div className="flex items-center">
                                    <div className="flex items-center -space-x-3">
                                        {customerIcons.map((icon, i) => (
                                            <Image 
                                                key={i}
                                                src={icon}
                                                alt={`Customer ${i + 1}`}
                                                width={32}
                                                height={32}
                                                className="rounded-full border-2 border-black"
                                            />
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-black bg-[#1D1D1D] flex items-center justify-center">
                                          <Image 
                                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6870d6e2afe79d0f0646a61a_Group%201000001834-9.svg?"
                                            alt="More customers"
                                            width={12}
                                            height={12}
                                          />
                                        </div>
                                    </div>
                                    <p className="ml-4 text-sm font-medium">Rated 4.9/5 from over 12,000 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block col-span-12 lg:col-span-4 lg:col-start-9">
                    <div className="flex flex-col gap-3">
                        {slides.map((slide, index) => (
                          <div 
                              key={slide.id} 
                              onClick={() => handleThumbClick(index)} 
                              className="relative cursor-pointer p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-colors hover:bg-white/20"
                          >
                              <ProgressBar active={index === activeIndex} />
                              <div className="flex items-center gap-4">
                                <Image 
                                    src={slide.thumb.image}
                                    alt={slide.thumb.title}
                                    width={64}
                                    height={64}
                                    className="rounded-md object-cover w-16 h-16"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-white">{slide.thumb.title}</h3>
                                </div>
                              </div>
                          </div>
                      ))}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}