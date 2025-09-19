import Image from "next/image";
import Link from "next/link";

const features = [
  {
    iconUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f948afe26d123fa1a789_Vector%20(86)-24.svg?",
    iconWidth: 31,
    iconHeight: 42,
    title: "Faster project completion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius finibus erat. In hac habitas",
  },
  {
    iconUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f94843d62cbb7a4301ef_Group%201009003667%20(1)-25.svg?",
    iconWidth: 28,
    iconHeight: 42,
    title: "Increased property value",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit cras diam sapien, mattis sed lorem pretium",
  },
];

const QualityConstruction = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[480px] lg:h-[600px] w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68a6f8abc12a30456070fc93_worker-at-heights-near-eiffel-tower-qk-ay-19.webp?"
              alt="Construction worker"
              width={314}
              height={434}
              className="absolute top-0 left-0 w-3/4 max-w-[314px] rounded-2xl object-cover z-10"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68a6f8ab171f32ee9981ec87_Mask%20group%20-%202025-08-20T141702.980-18.webp?"
              alt="Construction site detail"
              width={313}
              height={311}
              className="absolute bottom-0 right-0 w-3/4 max-w-[313px] rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-[1.4px] uppercase mb-4">
              Quality Construction
            </p>
            <h2 className="text-4xl lg:text-[40px] font-semibold text-foreground leading-tight lg:leading-[52px]">
              Building strong foundations for a stronger future
            </h2>

            <div className="mt-10 pt-10 border-t border-border space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <Image
                    src={feature.iconUrl}
                    alt={`${feature.title} icon`}
                    width={feature.iconWidth}
                    height={feature.iconHeight}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/pricing-one"
              className="group inline-flex items-center justify-center bg-primary text-primary-foreground font-medium py-4 px-8 rounded-full mt-10 transition-transform duration-300 hover:-translate-y-1"
            >
              <span>Get started</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg?"
                alt="Arrow icon"
                width={10}
                height={9}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityConstruction;