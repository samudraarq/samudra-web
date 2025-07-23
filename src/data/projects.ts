export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "nihonpal",
    title: "NihonPal",
    url: "https://nihonpal.com",
    description:
      "A language learning app that helps users practice Japanese through conversations with AI characters. Built using Next.js (App Router), Supabase, OpenAI API, and Tailwind CSS.",
    technologies: ["Next.js", "Supabase", "OpenAI API", "Tailwind CSS"],
  },
  {
    id: "christopher-landing",
    title: "Christopher Landing Page",
    url: "https://christopher-web.vercel.app/",
    description:
      "A minimalist dark-themed landing page for a professional English tutor. Tailored for young professionals seeking personalized 1-on-1 English learning online. Built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "ngajiaja",
    title: "NgajiAja",
    url: "https://ngajiaja.com",
    description:
      "A web platform that connects students with Quran teachers. I worked on the frontend using React.js and Tailwind CSS to ensure a smooth and accessible user experience.",
    technologies: ["React.js", "Tailwind CSS"],
  },
];
