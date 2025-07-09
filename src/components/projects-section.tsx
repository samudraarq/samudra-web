const ProjectsSection = () => {
  return (
    <div className="custom-container pt-24">
      <h2>Selected Projects</h2>

      <div className="space-y-16 mt-8">
        <div className="project">
          <h3 className="mb-3">
            <a
              href="https://nihonpal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NihonPal
            </a>
          </h3>
          <p className="mb-4">
            A language learning app that helps users practice Japanese through
            conversations with AI characters. Built using Next.js (App Router),
            Supabase, OpenAI API, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Supabase
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              OpenAI API
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="project">
          <h3 className="mb-3">
            <a
              href="https://christopher-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Christopher Landing Page
            </a>
          </h3>
          <p className="mb-4">
            A minimalist dark-themed landing page for a professional English
            tutor. Tailored for young professionals seeking personalized 1-on-1
            English learning online. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="project">
          <h3 className="mb-3">
            <a
              href="https://ngajiaja.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NgajiAja
            </a>
          </h3>
          <p className="mb-4">
            A web platform that connects students with Quran teachers. I worked
            on the frontend using React.js and Tailwind CSS to ensure a smooth
            and accessible user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              React.js
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
