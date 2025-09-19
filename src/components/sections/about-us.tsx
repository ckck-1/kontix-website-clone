"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BusinessImage, IconImage } from '@/components/ui/SmartImage';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideIn, FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations/ScrollAnimations';
import { FloatingElement, MagneticHover, AnimatedCounter } from '@/components/animations/AdvancedAnimations';
import { SplitTextReveal, BlurReveal } from '@/components/animations/ModernTextAnimations';
import { MagneticCard, ClipPathReveal } from '@/components/animations/ModernInteractiveEffects';
import { EasedCounter } from '@/components/animations/AdvancedScrollEffects';
import { motion } from 'framer-motion';

const AnimatedStat = ({
  start,
  end,
  suffix,
  label,
}: {
  start: boolean;
  end: number;
  suffix: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (end === 0) return;
    const duration = 2000;
    let startVal = 0;
    const stepTime = Math.max(1, Math.floor(duration / end));

    const timer = setInterval(() => {
      startVal += 1;
      setCount(startVal);
      if (startVal >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <div className="text-center">
      <p className="text-5xl font-bold tracking-tighter text-black">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-black">{label}</p>
    </div>
  );
};

export default function AboutUsSection() {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <SlideIn direction="left">
            <StaggerContainer>
              <StaggerItem>
                <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                  {t('about.sectionTitle')}
                </p>
              </StaggerItem>
              <StaggerItem>
                <SplitTextReveal
                  text={t('about.title')}
                  className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight"
                  delay={0.2}
                />
              </StaggerItem>
              <StaggerItem>
                <BlurReveal
                  delay={0.4}
                  className="mt-6 text-base leading-7 text-gray-400"
                >
                  {t('about.description')}
                </BlurReveal>
              </StaggerItem>
            <StaggerItem>
              <div className="mt-10">
                <MagneticHover>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="https://kontix.webflow.io/about-three"
                      className="inline-flex items-center gap-3 rounded-lg bg-primary py-4 px-8 text-black font-medium transition-colors hover:bg-primary/90"
                    >
                      {t('about.learnMore')}
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
                    </Link>
                  </motion.div>
                </MagneticHover>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-12 sm:grid-cols-2">
                <FadeIn delay={0.2} className="flex items-start gap-4">
                  <FloatingElement intensity={0.5}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                                      <IconImage
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMTIiIGZpbGw9IiNGNTlFMEIiLz4KPHBhdGggZD0iTTI0IDEyTDMyIDI0SDI0VjM2TDE2IDI0SDI0VjEyWiIgZmlsbD0id2hpdGUiLz4KPHN2Zz4K"
                                        width={48}
                                        height={48}
                                        alt="Experience icon"
                                        className="flex-shrink-0"
                                      />
                    </motion.div>
                  </FloatingElement>
                  <div>
                    <h3 className="text-xl font-semibold leading-7">{t('about.features.experience.title')}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {t('about.features.experience.description')}
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4} className="flex items-start gap-4">
                  <FloatingElement intensity={0.5}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                                      <IconImage
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMTIiIGZpbGw9IiNGNTlFMEIiLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMjAgMjRMMjIgMjZMMjggMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                                        width={48}
                                        height={48}
                                        alt="Quality icon"
                                        className="flex-shrink-0"
                                      />
                    </motion.div>
                  </FloatingElement>
                  <div>
                    <h3 className="text-xl font-semibold leading-7">{t('about.features.personalized.title')}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {t('about.features.personalized.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </StaggerItem>
            </StaggerContainer>
          </SlideIn>
          <SlideIn direction="right" className="relative mt-10 lg:mt-0">
            <ScaleIn>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <BusinessImage
                  src="https://picsum.photos/570/570?random=20"
                  width={570}
                  height={570}
                  alt="Equipo de profesionales de Caribbean Ventures trabajando juntos"
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </ScaleIn>
            <FloatingElement intensity={0.3}>
              <MagneticCard
                className="static mt-8 flex w-full max-w-sm justify-between gap-8 rounded-2xl bg-primary p-8 lg:absolute lg:mt-0 lg:w-[370px] lg:bottom-[-40px] lg:right-[-40px] transform-gpu"
                intensity={0.5}
              >
                <ClipPathReveal direction="left" className="text-center">
                  <p className="text-5xl font-bold tracking-tighter text-black">
                    <EasedCounter from={0} to={200} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm text-black">{t('about.stats.clients')}</p>
                </ClipPathReveal>
                <ClipPathReveal direction="right" className="text-center">
                  <p className="text-5xl font-bold tracking-tighter text-black">
                    <EasedCounter from={0} to={15} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm text-black">{t('about.stats.experience')}</p>
                </ClipPathReveal>
              </MagneticCard>
            </FloatingElement>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
