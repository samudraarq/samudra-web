const HeroSection = () => {
  return (
    <section className="custom-container py-14 md:py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-[13px] font-medium text-slate-500">
        <span className="size-2 rounded-full bg-emerald-500" />
        Open to work · Jakarta, Indonesia
      </div>

      <h1 className="mt-5 text-[32px] leading-10 font-semibold tracking-[-0.02em] text-slate-900 md:mt-6 md:text-[40px] md:leading-12">
        Building web and mobile products from first screen to store release.
      </h1>

      <p className="mt-5 text-base leading-6.5 text-slate-500 md:mt-6">
        I&apos;m Samudra, a software engineer with 6 years in React, React
        Native, and Next.js. I own features end to end, and I&apos;m now growing
        into backend and AI-powered features.
      </p>

      <div className="mt-5 flex gap-3 md:mt-6">
        <a
          href="#contact"
          className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Get in touch
        </a>
        <a
          href="#about"
          className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
        >
          Read more
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
