const ProjectsSection = () => {
  return (
    <div className="custom-container pt-24">
      <h2>Selected Projects</h2>

      <div className="space-y-12 mt-4">
        <div className="project">
          <a
            href="https://nihonpal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NihonPal
          </a>
          <p>
            A language learning app that helps users practice Japanese through
            conversations with AI characters. Built using Next.js (App Router),
            Supabase, OpenAI API, and Tailwind CSS.
          </p>
          <div>
            <span>Next.js</span>
            <span>Supabase</span>
            <span>OpenAI API</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="project">
          <a
            href="https://christopher-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christopher Landing Page
          </a>
          <p>
            A minimalist dark-themed landing page for a professional English
            tutor. Tailored for young professionals seeking personalized 1-on-1
            English learning online. Built with Next.js and Tailwind CSS.
          </p>
          <div>
            <span>Next.js</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="project">
          <a
            href="https://ngajiaja.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NgajiAja
          </a>
          <p>
            A web platform that connects students with Quran teachers. I worked
            on the frontend using React.js and Tailwind CSS to ensure a smooth
            and accessible user experience.
          </p>
          <div>
            <span>React.js</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
