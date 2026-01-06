export interface Showcase {
  id: string;
  title: string;
  url: string;
  description: string;
  technologies: string[];
}

export const showcases: Showcase[] = [
  {
    id: "snow-globe",
    title: "Snow Globe",
    url: "/showcases/snow-globe",
    description:
      "An interactive 3D snow globe experience built with Three.js and React Three Fiber. Users can interact with the globe, pushing the button to shake the snow and enjoy the festive scene inside.",
    technologies: ["Three.js", "React Three Fiber", "Rapier", "Blender"],
  },
  {
    id: "timepiece",
    title: "Timepiece",
    url: "/showcases/timepiece",
    description:
      "A sophisticated 3D timepiece model showcasing intricate details and smooth animations. Built with Three.js and React Three Fiber, it demonstrates advanced 3D modeling and rendering techniques.",
    technologies: ["Three.js", "React Three Fiber", "Blender"],
  },
];
