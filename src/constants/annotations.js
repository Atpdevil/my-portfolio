import { getTop } from "../utils/annotationHelpers";

export const annotations = [
  {
    id: 1,
    meshName: "characters006_tree_0",
    title: "About Me",
    description: "Who I am and what I build",
    getPosition: (mesh) => {
      const p = getTop(mesh, 0.10);
      p.x += 2.4;
      p.z -= 0.8;
      p.y -= 7.0;
      return p;
    },
    cameraPos: [7.3738, -9.7066, 4.9019],
    lookAt: [12.2314, -1.18694, 7.03113],
    route: "/about",
  },
  {
    id: 2,
    meshName: "characters010_wheat_0",
    title: "Foundation",
    description: "Starting point and basics",
    getPosition: (mesh) => {
    const p = getTop(mesh, 0.1);
    p.x -= 0.4;
    p.z += 4.5;
    p.y -= 1.0;
    return p;
    },
    cameraPos: [-2, 2, 5],
  },
  {
    id: 3,
    meshName: "characters005_bridge_0",
    title: "Skills Bridge",
    description: "Skills connecting ideas to reality",
        getPosition: (mesh) => {
        const p = getTop(mesh, 0.1);
        p.x += 2.9;
        p.z += 2.0;
        p.y -= 1.0;
        return p;
        },
    cameraPos: [0, 3, 6],
  },
  {
    id: 4,
    meshName: "characters004_house_0",
    title: "Background",
    description: "Internship & experience",
        getPosition: (mesh) => {
        const p = getTop(mesh, 0.1);
        p.x -= 2.9;
        p.z -= 7.0;
        p.y -= 9.0;
        return p;
        },
    cameraPos: [6, 3, 4],
  },
  {
    id: 5,
    meshName: "characters004_house_0",
    title: "Education",
    description: "AMC Engineering College",
        getPosition: (mesh) => {
        const p = getTop(mesh, 0.1);
        p.x += 1.0;
        p.z -= 3.5;
        p.y -= 4.0;
        return p;
        },
    cameraPos: [6, 5, 6],
  }
];
