import React from 'react';

const TrustBanner = () => {
  return (
    <section className="bg-background py-20 md:py-[100px]">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[1.5px] text-primary">
            Trust
          </p>
        </div>
        <h2 className="max-w-[700px] text-3xl font-semibold leading-tight text-foreground md:text-[40px] md:leading-[1.4]">
          Join the 850+ companies trusting our construction service
        </h2>
      </div>
    </section>
  );
};

export default TrustBanner;