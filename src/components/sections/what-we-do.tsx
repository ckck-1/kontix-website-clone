import Image from "next/image";

const services = [
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874e8d451ee2a9d7c63b529_Vector%20(19)-21.svg?",
    alt: "Icono de consultoría empresarial",
    title: "Consultoría Empresarial",
    description: "Soluciones estratégicas para mejorar la eficiencia y rentabilidad de su negocio",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d06e4b0e24e9ff3b0_Vector%20(73)-22.svg?",
    alt: "Icono de gestión administrativa y contable",
    title: "Gestión Administrativa y Contable",
    description: "Servicios integrales para optimizar las operaciones de su empresa",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d2d11acf80787b302_Vector%20(74)-23.svg?",
    alt: "Icono de asesoría financiera",
    title: "Asesoría Financiera",
    description: "Maximice sus ganancias con estrategias financieras personalizadas",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p className="text-sm font-normal text-zinc-500 uppercase tracking-[0.2em] mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-[36px] font-semibold leading-[1.3] text-zinc-900 max-w-2xl mx-auto">
            Soluciones integrales para el éxito de su negocio
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-center text-center px-9 pt-4 pb-5 ${
                index > 0 ? 'mt-8 md:mt-0' : ''
              } ${index < services.length - 1 ? "md:border-r md:border-zinc-200" : ""}`}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src={service.iconUrl}
                  alt={service.alt}
                  width={70}
                  height={70}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-zinc-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;