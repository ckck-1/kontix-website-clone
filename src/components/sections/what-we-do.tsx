import Image from "next/image";

const services = [
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874e8d451ee2a9d7c63b529_Vector%20(19)-21.svg?",
    alt: "An icon representing emergency services, depicting a triangular warning sign.",
    title: "Emergency services",
    description: "Lorem ipsum dolor sit amet pharetra sapien lectus habitasse hendrerit nibh",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d06e4b0e24e9ff3b0_Vector%20(73)-22.svg?",
    alt: "A shield icon with a lock symbol inside, representing 100% security.",
    title: "100% secure",
    description: "Lorem ipsum dolor sit amet pharetra sapien lectus habitasse hendrerit nibh",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d2d11acf80787b302_Vector%20(74)-23.svg?",
    alt: "A trophy icon with a star, representing awards won.",
    title: "Awards won",
    description: "Lorem ipsum dolor sit amet pharetra sapien lectus habitasse hendrerit nibh",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p className="text-sm font-normal text-zinc-500 uppercase tracking-[0.2em] mb-4">
            What we do
          </p>
          <h2 className="text-[36px] font-semibold leading-[1.3] text-zinc-900 max-w-2xl mx-auto">
            Expert construction services that bring plans to life
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