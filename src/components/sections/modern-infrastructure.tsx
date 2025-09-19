"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface StatCounterProps {
  targetValue: number;
  suffix: string;
  decimals: number;
  className?: string;
}

const StatCounter = ({ targetValue, suffix, decimals, className }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);
            
            const currentValue = easedProgress * targetValue;
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [targetValue]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function ModernInfrastructure() {
  return (
    <section className="bg-background py-[100px]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-x-[100px] gap-y-12 items-center">
          
          <div className="relative">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68a6e89b43d62cbb7a3ccad7_view-heavy-machinery-used-construction-industry_154036306.htm-16.webp?"
              alt="Heavy construction machinery"
              width={668}
              height={708}
              className="rounded-[20px] w-full h-auto object-cover"
            />
            <Link href="/service-two" className="absolute bottom-[40px] -left-[70px] hidden xl:flex bg-primary rounded-[20px] p-[30px] items-center gap-5 w-[495px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68ae7dca8a77dfc842d67158_Group%201000001668-17.webp?"
                alt="Construction worker"
                width={82}
                height={82}
                className="rounded-full flex-shrink-0"
              />
              <p className="text-primary-foreground text-[22px] font-semibold leading-[1.3] flex-1">
                Your trusted partner in building excellence
              </p>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874c1895517f5ba58aae44d_Group%20130966-18.svg?"
                alt="Arrow icon"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-primary uppercase tracking-[0.1em] font-medium text-base mb-4">what we do</p>
              <h2 className="text-white text-[40px] font-bold leading-[1.2]">Trusted builders of modern infrastructure</h2>
            </div>
            
            <Link href="/service-one" className="group inline-flex items-center gap-4">
              <span className="text-white font-medium text-[18px] group-hover:text-primary transition-colors">More details</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6e89b43d62cbb7a3ccad1_Vector%20431-19.svg?"
                alt="Arrow icon"
                width={41}
                height={15}
              />
            </Link>

            <div className="flex flex-col gap-10 mt-5">
              <div className="flex flex-col gap-4">
                <StatCounter 
                  targetValue={2.1} 
                  decimals={1} 
                  suffix="k" 
                  className="text-primary font-bold text-[80px] leading-none" 
                />
                <div className="flex items-center gap-4">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874c21b2219a5da539917f1_Arrow%2010%20(4)-20.svg?"
                    alt="Decorative arrow"
                    width={33}
                    height={48}
                  />
                  <h3 className="text-white text-[21px] font-medium">Projects completed</h3>
                </div>
                <p className="text-muted text-base max-w-sm">Lorem ipsum dolor amet consectetur inorci tempus inmi potenti lectus</p>
              </div>

              <div className="flex flex-col gap-4">
                 <StatCounter 
                  targetValue={4.3} 
                  decimals={1} 
                  suffix="k" 
                  className="text-primary font-bold text-[80px] leading-none" 
                />
                <div className="flex items-center gap-4">
                  <Image
                     src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874c21b2219a5da539917f1_Arrow%2010%20(4)-20.svg?"
                    alt="Decorative arrow"
                    width={33}
                    height={48}
                  />
                  <h3 className="text-white text-[21px] font-medium">Happy clients</h3>
                </div>
                <p className="text-muted text-base max-w-sm">Lorem ipsum dolor amet consectetur inorci tempus inmi potenti lectus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}