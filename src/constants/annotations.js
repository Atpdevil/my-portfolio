export const annotations = [
  {
    id: 1,
    meshName: "characters010_wheat_0",
    title: "Hello I'm Gokul",
    description: "Who I Am and What I Do",
    position: [12, 8.0, -1.5],
    action: { type: "route", value: "/about" },
  },

  {
    id: 2,
    meshName: "characters006_tree_0",
    title: "Contact Me",
    description: "Let's Connect and Talk",
    position: [1.0, 9, -2.0],
    action: { type: "route", value: "/contact" },
  },

  {
    id: 3,
    meshName: "characters005_bridge_0",
    title: "Projects",
    description: "Things I've Built",
    position: [-13.2, 7.0, -4.0],
    action: { type: "route", value: "/projects" },
  },
  
  {
    id: 4,
    meshName: "characters004_house_0",
    title: "Download CV",
    description: "Professional Resume",
    position: [-4, 4.0, 7],
    action: { type: "download", value: "/cv/Gokul_CV.pdf" },
  },
];
