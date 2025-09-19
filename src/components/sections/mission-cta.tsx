import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MissionCta = () => {
  const backgroundImageUrl = "https://cdn.prod.website-files.com/67ad72477c605912a4af72eb/689dba6042929fa08d7ed48d_Mask%20group%20-%202025-08-14T155717.035.webp";
  const arrowIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg?";

  return (
    <div
      className="relative w-full bg-cover bg-center py-28"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            ABOUT KONTIX
          </p>
          <h2 className="text-4xl md:text-[44px] font-bold text-white leading-tight mb-8">
            Our mission is simple, to provide unparalleled expertise, guidance, and support to our clients across their real estate journey
          </h2>
          <Link href="/contact-one" className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-md transition duration-300 hover:bg-yellow-600 group">
            Let's build
            <Image
              src={arrowIconUrl}
              alt="arrow icon"
              width={12}
              height={12}
              className="ml-3 transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionCta;