import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="custom-container pt-24 pb-24">
      <h2>Say Hello</h2>
      <p className="mt-4 mb-8">
        Have an idea or need help building your next product? I&apos;d love to
        collaborate—whether it&apos;s launching something new or improving what
        you already have.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/samudraarq"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
          title="GitHub"
        >
          <Image
            src="/icons/github-mark.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
        <a
          href="https://youtube.com/@samudrafaris?si=_zRCjjBaiv9nHU2k"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
          title="YouTube"
        >
          <Image
            src="/icons/youtube_social_icon_dark.png"
            alt="YouTube"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
          title="LinkedIn"
        >
          <Image
            src="/icons/InBug-Black.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/samudra_arq/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
          title="Instagram"
        >
          <Image
            src="/icons/Instagram_Glyph_Black.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
