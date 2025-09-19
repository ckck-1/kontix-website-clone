"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              About us
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              From blueprint to reality we make it happen
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc viverra, imperdiet dolor ac, laoreet ex. Aenean luctus lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="mt-10">
              <Link
                href="https://kontix.webflow.io/about-three"
                className="inline-flex items-center gap-3 rounded-lg bg-primary py-4 px-8 text-black font-medium transition-colors hover:bg-primary/90"
              >
                Read more
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg?"
                  width={10}
                  height={9}
                  alt="Arrow icon"
                />
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-12 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67b5620ddf5bb24ce0d35f10_icon-box-teo-01-15.svg?"
                  width={48}
                  height={48}
                  alt="On-time delivery icon"
                  className="flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold leading-7">On-time delivery</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Lorem ipsum dolor sit consctetur sem et nunc vierra odio con
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67b5620d77cf31f90308ecf3_icon-box-two-02-16.svg?"
                  width={48}
                  height={48}
                  alt="Sustainable practices icon"
                  className="flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold leading-7">Sustainable practices</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Lorem ipsum dolor sit consc tetur sem et nunc vierra
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68a6e61d8e58fa10010d47ce_orange-stairs-ascend-against-a-blue-sky-lJ1PjBeJRZo-15.webp?"
              width={570}
              height={570}
              alt="Orange stairs against a blue sky, representing construction progress"
              className="rounded-2xl object-cover"
            />
            <div
              ref={statsRef}
              className="static mt-8 flex w-full max-w-sm justify-between gap-8 rounded-2xl bg-primary p-8 lg:absolute lg:mt-0 lg:w-[370px] lg:bottom-[-40px] lg:right-[-40px]"
            >
              <AnimatedStat start={isVisible} end={158} suffix="+" label="Projects completed" />
              <AnimatedStat start={isVisible} end={98} suffix="%" label="Happy clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}