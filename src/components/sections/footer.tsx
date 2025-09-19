import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative bg-black text-[#8FA8B0] pt-24 pb-10"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="absolute right-0 bottom-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/images/68787b61f597cdfce1e64e86_dq-22.webp?"
          width={610}
          height={557}
          alt="background construction tower detail"
          className="w-auto h-auto opacity-30 mix-blend-luminosity"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 pb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="/" aria-label="home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67ad79abdc6c7d0266f82343_footer-logo-29.svg?"
                alt="Kontix Logo"
                width={129}
                height={31}
                className="mb-6 h-auto w-auto"
              />
            </a>
            <p className="text-base leading-relaxed">
              Building the future with integrity, innovation, and proven
              construction expertise
            </p>
          </div>

           {/* Spacer column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <h3 className="font-semibold text-lg text-white mb-4">
              Get a free consultation
            </h3>
            <div className="space-y-2">
              <p>
                Email :{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  info@example.com
                </a>
              </p>
              <p>
                Call us&nbsp;&nbsp;:{" "}
                <a
                  href="tel:8884567890"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  (888) 456 7890
                </a>
              </p>
            </div>
            <div className="mt-6">
              <p className="font-medium text-white">Address:</p>
              <p className="mt-1">410 Sandtown, California, 94001, USA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-center md:text-left mb-4 md:mb-0">
            Designed by{" "}
            <a
              href="https://www.radianttemplates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Radiant Templates
            </a>
            , powered by{" "}
            <a
              href="https://webflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Webflow.
            </a>
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Style guide
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              License
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;