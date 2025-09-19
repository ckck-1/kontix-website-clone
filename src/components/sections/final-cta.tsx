import Image from "next/image";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <div
      className="relative bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/67ad72477c605912a4af72eb/68787a6d817452d3a77677d2_Excavator-p-2000.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-primary">
            Let's connect
          </p>
          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Start your vision today with expert construction
          </h2>
          <div className="mt-10 flex justify-center">
            <Link href="#" className="group inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition duration-300 hover:scale-105">
              Request a quote
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg"
                alt="arrow icon"
                width={10}
                height={9}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;