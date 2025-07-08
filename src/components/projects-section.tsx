const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Selected Projects</h2>

      <div className="project">
        <h3>NihonPal</h3>
        <p>
          A language learning app that helps users practice Japanese through
          conversations with AI characters. Built using Next.js (App Router),
          Supabase, OpenAI API, and Tailwind CSS.
        </p>
        <p>🌐 nihonpal.com</p>
      </div>

      <div className="project">
        <h3>Christopher Landing Page</h3>
        <p>
          A minimalist dark-themed landing page for a professional English
          tutor. Tailored for young professionals seeking personalized 1-on-1
          English learning online. Built with Next.js and Tailwind CSS.
        </p>
        <p>🌐 christopher.english</p>
      </div>

      <div className="project">
        <h3>NgajiAja</h3>
        <p>
          A web platform that connects students with Quran teachers. I worked on
          the frontend using React.js and Tailwind CSS to ensure a smooth and
          accessible user experience.
        </p>
        <p>🌐 ngajiaja.com</p>
      </div>
    </div>
  );
};

export default ProjectsSection;
