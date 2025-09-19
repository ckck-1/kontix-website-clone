import React from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const servicesData: Service[] = [
  {
    title: 'Power and energy',
    description: 'Lorem ipsum dolor sit amet, constetur elit cras diam sapien, mattis sed lorem pretium',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f1079ca10bf321c3f4_Group%201597883591-10.webp',
    altText: 'Kontix-home-one-power-energy-image-webflow-ecommerce-template',
  },
  {
    title: 'Material engineering',
    description: 'Lorem ipsum dolor sit amet, constetur elit cras diam sapien, mattis sed lorem pretium',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f197c6508f0456e5f6_Group%201597883591%20(1)-11.webp',
    altText: 'Kontix-home-two-concrete-foundation-image-webflow-ecommerce-template',
  },
  {
    title: 'Oil and lubricant',
    description: 'Lorem ipsum dolor sit amet, constetur elit cras diam sapien, mattis sed lorem pretium',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f174824844f6d4336d_Group%201597883591%20(2)-12.webp',
    altText: 'Kontix-home-three-facility-construction-image-webflow-ecommerce-template',
  },
];

const ServiceCard = ({ title, description, imageUrl, altText }: Service) => (
  <div className="group bg-[#f5f5f5] rounded-[20px] overflow-hidden shadow-none transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
    <div className="overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        width={380}
        height={253}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
    <div className="p-[30px]">
      <h3 className="text-2xl font-semibold text-[#121212] mb-2.5">{title}</h3>
      <p className="text-base text-[#666666] leading-relaxed">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[50px] max-w-[580px] mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#666666]">
            Our service
          </p>
          <h2 className="mt-2.5 text-[40px] font-semibold text-[#121212] leading-[1.2]">
            Reliable durable and cost effective construction services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;