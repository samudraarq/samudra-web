const ContactSection = () => {
  return (
    <section id="contact" className="custom-container">
      <div className="border-t border-slate-200 py-10 md:py-14">
        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.01em] text-slate-900">
          Get in touch
        </h2>

        <p className="mt-4 text-base leading-6.5 text-slate-500 md:mt-5">
          The best way to reach me is by email. You can also find my background
          on LinkedIn.
        </p>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="mailto:samudrafaris@gmail.com"
            className="rounded-lg bg-slate-800 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            samudrafaris@gmail.com
          </a>

          <div className="flex gap-5 text-sm font-medium text-slate-800">
            <a
              href="https://www.linkedin.com/in/samudra-faris-arqam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
