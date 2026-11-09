import Chip from "@/components/common/chip";

const skills = ["React", "React Native", "Next.js", "Expo", "TypeScript", "C#"];

const AboutSection = () => {
  return (
    <section id="about" className="custom-container">
      <div className="border-t border-slate-200 py-10 md:py-14">
        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.01em] text-slate-900">
          About
        </h2>

        <div className="mt-4 space-y-4 text-base leading-[26px] text-slate-500 md:mt-5 md:space-y-5">
          <p>
            I&apos;m a software engineer based in Jakarta with 5+ years of
            experience in frontend development. Most recently I owned the
            frontend of a wine delivery and warehousing platform, from the
            customer app to the merchant and warehouse tools.
          </p>
          <p>
            I&apos;m now widening into backend and AI-powered features, and
            I&apos;m open to fullstack and product engineering roles.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>

        <p className="mt-4 text-[13px] font-medium text-slate-500">
          Currently learning: Node.js, PostgreSQL, and LLM APIs
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
