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
    technologies: ["Three.js", "React Three Fiber", "Blender"],
  },
];
