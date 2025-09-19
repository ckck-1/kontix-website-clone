"use client";
import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/688b678c743b0795c31de79a_creativa-14.svg?",
    alt: "Creativa",
    width: 147,
    height: 26,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/688b678c9aa1b90c8b6380e8_Group%202-11.svg?",
    alt: "LunLap",
    width: 120,
    height: 32,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/688b678c550ff116eb124e27_Group%203%20(1)-13.svg?",
    alt: "Leagone",
    width: 138,
    height: 24,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/688b678c322cc77b2386b5cc_urban%20(1)-12.svg?",
    alt: "Urban",
    width: 111,
    height: 26,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/688b678c98a83338f3c26a1b_Group%205-10.svg?",
    alt: "MARQI",
    width: 123,
    height: 30,
  },
];

const ClientLogos = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
      <section className="bg-black border-y border-border">
        <div className="py-20">
          <div className="relative flex overflow-hidden">
            <div className="flex min-w-max flex-shrink-0 animate-marquee items-center">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 px-[65px] h-8 flex items-center justify-center filter invert"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full w-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div
              className="flex min-w-max flex-shrink-0 animate-marquee items-center"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-duplicate-${index}`}
                  className="flex-shrink-0 px-[65px] h-8 flex items-center justify-center filter invert"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full w-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientLogos;