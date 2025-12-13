import { getTop } from "../utils/annotationHelpers";

export const annotations = [
  {
    id: 1,
    meshName: "characters010_wheat_0",
    title: "Hello I'm Gokul",
    description: "Who I Am and What I Do",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x -= 0.1;
      p.z += 3.5;
      p.y += 5.0;
      return p;
    },
    action: { type: "route", value: "/about" },
  },

  {
    id: 2,
    meshName: "characters006_tree_0",
    title: "Contact Me",
    description: "Let's Connect and Talk",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x += 2.4;
      p.z -= 0.8;
      p.y -= 1.0;
      return p;
    },
    action: { type: "route", value: "/contact" },
  },

  {
    id: 3,
    meshName: "characters005_bridge_0",
    title: "Download CV",
    description: "Professional Resume",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x += 2.9;
      p.z += 2.0;
      p.y += 6.0;
      return p;
    },
    action: { type: "download", value: "/cv/Gokul_CV.pdf" },
  },

  {
    id: 4,
    meshName: "characters004_house_0",
    title: "Projects",
    description: "Things I've Built",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x -= 1.9;
      p.z -= 7.0;
      p.y -= 4.0;
      return p;
    },
    action: { type: "route", value: "/projects" },
  },
];
