"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { HeroImage, IconImage } from '@/components/ui/SmartImage';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { FloatingElement, MagneticHover, ParallaxBackground } from '@/components/animations/AdvancedAnimations';
import { SplitTextReveal, WordReveal } from '@/components/animations/ModernTextAnimations';
import { MorphingButton, LiquidMorph } from '@/components/animations/ModernInteractiveEffects';

const slidesData = [
  {
    id: 1,
    key: 'consultoria',
    bgImage: "https://picsum.photos/1920/1080?random=10",
    thumb: {
        image: "https://picsum.photos/400/300?random=10"
    }
  },
  {
    id: 2,
    key: 'gestion',
    bgImage: "https://picsum.photos/1920/1080?random=11",
    thumb: {
        image: "https://picsum.photos/400/300?random=11"
    }
  },
  {
    id: 3,
    key: 'asesoria',
    bgImage: "https://picsum.photos/1920/1080?random=12",
    thumb: {
        image: "https://picsum.photos/400/300?random=12"
    }
  },
];

const customerIcons = [
  "https://picsum.photos/32/32?random=1",
  "https://picsum.photos/32/32?random=2",
  "https://picsum.photos/32/32?random=3",
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
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get slides with translations
  const slides = slidesData.map(slide => ({
    ...slide,
    headline: t(`hero.slides.${slide.key}.title`),
    description: t(`hero.slides.${slide.key}.description`),
    thumb: {
      ...slide.thumb,
      title: t(`hero.slides.${slide.key}.thumb`)
    }
  }));

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
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => 
            index === activeIndex ? (
              <motion.div
                  key={slide.id}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
              >
                  <ParallaxBackground speed={0.2}>
                    <HeroImage
                        src={slide.bgImage}
                        alt={slide.headline}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index === 0}
                    />
                  </ParallaxBackground>
                  <div className="absolute inset-0 bg-black/60" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      
        <div className="relative z-10 w-full container mx-auto px-5">
            <div className="grid grid-cols-12 gap-x-8 items-center">
                <div className="col-span-12 lg:col-span-7">
                    <SlideIn direction="left" className="max-w-2xl">
                        <AnimatePresence mode="wait">
                          {slides.map((slide, index) => 
                            index === activeIndex ? (
                              <motion.div 
                                key={slide.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                              >
                                <div className="relative">
                                  <LiquidMorph className="-z-10 opacity-20" />
                                  <StaggerContainer>
                                    <StaggerItem>
                                      <small className="block mb-4 text-primary uppercase font-semibold tracking-[0.05em]">
                                          {t('hero.tagline')}
                                      </small>
                                    </StaggerItem>
                                    <StaggerItem>
                                      <SplitTextReveal
                                        text={slide.headline}
                                        className="text-[56px] font-bold leading-tight mb-6"
                                        delay={0.3}
                                      />
                                    </StaggerItem>
                                    <StaggerItem>
                                      <WordReveal
                                        text={slide.description}
                                        className="text-lg text-gray-300 max-w-lg mb-10"
                                        delay={0.6}
                                      />
                                    </StaggerItem>
                                  </StaggerContainer>
                                </div>
                              </motion.div>
                            ) : null
                          )}
                        </AnimatePresence>
                        
                        <FadeIn delay={0.8} className="flex flex-wrap items-center gap-y-6 gap-x-12">
                           <MorphingButton className="text-black font-medium">
                             <div className="flex items-center gap-3">
                               <span>{t('hero.startProject')}</span>
                               <motion.div
                                 whileHover={{ x: 5 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                               >
                                 <IconImage 
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEwIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDQuNUwxIDQuNU0yLjUgOEw5IDQuNUwyLjUgMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHN2Zz4K"
                                     width={10}
                                     height={9}
                                     alt="Arrow icon"
                                 />
                               </motion.div>
                             </div>
                           </MorphingButton>
                            <div className="flex items-center gap-4">
                                <IconImage
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTEwIDIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHBhdGggaWQ9InN0YXIiIGQ9Ik0xMCAwTDEyLjI0NSA2LjkwOTgzTDE5LjUxMDYgNi45MDk4M0wxMy42MzI3IDExLjE4MDNMMTUuODc3OCAxOEwxMCAxMy43Mjk3TDQuMTIyMTUgMThMNi4zNjcyNyAxMS4xODAzTDAuNDg5NDM0IDYuOTA5ODNMNS4wOTgxNyA2LjkwOTgzTDEwIDAiLz4KPC9kZWZzPgo8dXNlIGhyZWY9IiNzdGFyIiBmaWxsPSIjRkZENzAwIiB4PSIwIi8+Cjx1c2UgaHJlZj0iI3N0YXIiIGZpbGw9IiNGRkQ3MDAiIHg9IjIyIi8+Cjx1c2UgaHJlZj0iI3N0YXIiIGZpbGw9IiNGRkQ3MDAiIHg9IjQ0Ii8+Cjx1c2UgaHJlZj0iI3N0YXIiIGZpbGw9IiNGRkQ3MDAiIHg9IjY2Ii8+Cjx1c2UgaHJlZj0iI3N0YXIiIGZpbGw9IiNGRkQ3MDAiIHg9Ijg4Ii8+Cjwvc3ZnPgo="
                                    alt="5-star rating"
                                    width={110}
                                    height={20}
                                />
                                <div className="flex items-center">
                                    <div className="flex items-center -space-x-3">
                                        {customerIcons.map((icon, i) => (
                                            <IconImage 
                                                key={i}
                                                src={icon}
                                                alt={`Customer ${i + 1}`}
                                                width={32}
                                                height={32}
                                                className="rounded-full border-2 border-black"
                                            />
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-black bg-[#1D1D1D] flex items-center justify-center">
                                          <IconImage 
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMVY2TTYgNkg2SDAiIHN0cm9rZT0iI0Y1OUUwQiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHN2Zz4K"
                                            alt="More customers"
                                            width={12}
                                            height={12}
                                          />
                                        </div>
                                    </div>
                                    <p className="ml-4 text-sm font-medium">{t('hero.rating')}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </SlideIn>
                </div>
                <SlideIn direction="right" className="hidden lg:block col-span-12 lg:col-span-4 lg:col-start-9">
                    <div className="flex flex-col gap-3">
                        <StaggerContainer>
                          {slides.map((slide, index) => (
                            <StaggerItem key={slide.id}>
                              <MagneticHover>
                                <motion.div 
                                    onClick={() => handleThumbClick(index)} 
                                    className={`relative cursor-pointer p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                                      index === activeIndex 
                                        ? 'bg-white/20 border-primary shadow-lg shadow-primary/20' 
                                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                                    }`}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <ProgressBar active={index === activeIndex} />
                                    <div className="flex items-center gap-4">
                                      <motion.div
                                        whileHover={{ rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                      >
                                        <HeroImage 
                                            src={slide.thumb.image}
                                            alt={slide.thumb.title}
                                            width={64}
                                            height={64}
                                            className="rounded-md object-cover w-16 h-16"
                                        />
                                      </motion.div>
                                      <div className="flex-1">
                                          <h3 className="font-semibold text-white">{slide.thumb.title}</h3>
                                      </div>
                                    </div>
                                </motion.div>
                              </MagneticHover>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                    </div>
                </SlideIn>
            </div>
      </div>
    </section>
  );
}