import Chip from "@/components/common/chip";

const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "API integration",
];

const AboutSection = () => {
  return (
    <section id="about" className="custom-container">
      <div className="border-t border-slate-200 py-10 md:py-14">
        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.01em] text-slate-900">
          About
        </h2>

        <div className="mt-4 space-y-4 text-base leading-6.5 text-slate-500 md:mt-5 md:space-y-5">
          <p>
            I&apos;m a Frontend Developer creating responsive, user-friendly web
            and mobile applications using React.js, Next.js, and React Native.
          </p>
          <p>
            I started my career in tech with product management, which gave me a
            strong foundation in understanding business needs and user
            requirements. Later, I transitioned into software development,
            building on that foundation to deliver high-quality frontend
            solutions that balance technical execution with user experience.
          </p>
          <p>
            Along the way, I have built personal and freelance projects,
            including Ngajiaja (a platform connecting learners with Quran
            teachers), showcasing my ability to deliver end-to-end solutions.
          </p>
          <p>
            I thrive in collaborative, cross-functional environments and
            I&apos;m passionate about crafting performant, maintainable, and
            visually appealing products. I&apos;m currently seeking fullstack
            opportunities, bringing a strong frontend foundation and a drive to
            expand into backend development.
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
