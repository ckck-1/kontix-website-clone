import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  slug: string;
  image: string;
  title: string;
  location: string;
}

const projects: Project[] = [
  {
    slug: 'skyline-tower',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6893177c46cc496e4f67516b_Mask%20group%20-%202025-08-06T135452.985-20.webp?',
    title: 'Skyline tower',
    location: 'New York, USA',
  },
  {
    slug: 'facility-building',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6893175f05f7a5810358d089_Mask%20group%20-%202025-08-06T135443.129-21.webp?',
    title: 'Facility building',
    location: 'Grand Haven, USA',
  },
];

const arrowIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874c8e16caffd9e749221fd_Arrow%2011%20(1)-26.svg?";

const PortfolioSection = () => {
  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="text-[#666666] text-sm font-medium tracking-[0.2em] uppercase mb-2">
            Our work
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.3] text-[#121212] max-w-[580px]">
            Innovative building techniques for a brighter future
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href={`/portfolio-details/${project.slug}`} key={project.slug} className="group block">
              <div className="relative rounded-[20px] overflow-hidden aspect-[588/665]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[5px] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end">
                  <div className="absolute top-6 right-6 w-11 h-11 bg-primary rounded-full flex items-center justify-center">
                    <Image src={arrowIconUrl} alt="Arrow Icon" width={14} height={14} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#121212] mb-1">{project.title}</h3>
                    <p className="text-base text-[#666666]">( {project.location} )</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;