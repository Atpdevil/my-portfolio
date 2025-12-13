import { getTop } from "../utils/annotationHelpers";

export const annotations = [
  {
    id: 1,
    meshName: "characters010_wheat_0",
    title: "Hello I'm Gokul",
    description: "About Me",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x -= 0.4;
      p.z += 4.5;
      p.y -= 1.0;
      return p;
    },
    camera: {
      position: [-10, -4, 17],
      lookAt: [0, 0, 0],
    },
    action: { type: "route", value: "/about" },
  },

  {
    id: 2,
    meshName: "characters006_tree_0",
    title: "Contact Me",
    description: "Get in touch",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x += 2.4;
      p.z -= 0.8;
      p.y -= 7.0;
      return p;
    },
    camera: {
      position: [7.37, -9.7, 4.9],
      lookAt: [12.23, -1.18, 7.03],
    },
    action: { type: "route", value: "/contact" },
  },

  {
    id: 3,
    meshName: "characters005_bridge_0",
    title: "Download CV",
    description: "Download Resume",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x += 2.9;
      p.z += 2.0;
      p.y -= 1.0;
      return p;
    },
    camera: {
      position: [0, 3, 6],
      lookAt: [0, 0, 0],
    },
    action: { type: "download", value: "/cv/Gokul_CV.pdf" },
  },

  {
    id: 4,
    meshName: "characters004_house_0",
    title: "Projects",
    description: "My Work",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.1);
      p.x -= 2.9;
      p.z -= 7.0;
      p.y -= 9.0;
      return p;
    },
    camera: {
      position: [6, 3, 4],
      lookAt: [0, 0, 0],
    },
    action: { type: "route", value: "/projects" },
  },
];
