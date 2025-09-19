import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  features: string[];
  link: string;
}

const servicesData: Service[] = [
  {
    title: 'Consultoría Empresarial',
    description: 'Soluciones estratégicas para optimizar el rendimiento de su negocio y alcanzar sus objetivos comerciales.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f1079ca10bf321c3f4_Group%201597883591-10.webp',
    altText: 'Consultoría Empresarial',
    features: [
      'Análisis de mercado y competencia',
      'Estrategias de crecimiento',
      'Optimización de procesos',
      'Planificación estratégica'
    ],
    link: '/servicios/consultoria-empresarial'
  },
  {
    title: 'Gestión Administrativa y Contable',
    description: 'Servicios integrales para la gestión eficiente de las operaciones administrativas y financieras de su empresa.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f197c6508f0456e5f6_Group%201597883591%20(1)-11.webp',
    altText: 'Gestión Administrativa y Contable',
    features: [
      'Contabilidad general',
      'Nóminas y recursos humanos',
      'Facturación electrónica',
      'Reportes financieros'
    ],
    link: '/servicios/gestion-administrativa'
  },
  {
    title: 'Asesoría Financiera',
    description: 'Orientación experta para la toma de decisiones financieras inteligentes y sostenibles para su negocio.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/6870f1f174824844f6d4336d_Group%201597883591%20(2)-12.webp',
    altText: 'Asesoría Financiera',
    features: [
      'Análisis financiero',
      'Planificación fiscal',
      'Estructura de capital',
      'Inversiones estratégicas'
    ],
    link: '/servicios/asesoria-financiera'
  },
];

const ServiceCard = ({ title, description, imageUrl, altText, features, link }: Service) => (
  <div className="group bg-[#f5f5f5] rounded-[20px] overflow-hidden shadow-none transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] h-full flex flex-col">
    <div className="overflow-hidden h-[220px]">
      <Image
        src={imageUrl}
        alt={altText}
        width={380}
        height={220}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-2xl font-semibold text-[#121212] mb-3">{title}</h3>
      <p className="text-base text-[#666666] mb-4">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#444444]">
            <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link href={link} className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
          Más información
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluciones integrales para su negocio
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos servicios profesionales diseñados para optimizar sus operaciones y maximizar su rentabilidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link 
            href="/contacto" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Solicite una consulta gratuita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;