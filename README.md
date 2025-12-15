# 3D Interactive Portfolio

> An interactive 3D portfolio built with React, Three.js, and React Three Fiber, featuring animated models, camera transitions, ambient audio, and contextual UI overlays.

This project showcases my work through a fully immersive 3D scene rather than traditional static sections

## Features

`3D Scene Rendering`

- Built using @react-three/fiber and three.js
- HDR environment lighting for realism
- Optimized camera controls with smooth GSAP transitions

`Interactive Annotations`

- Clickable markers placed inside the 3D world
- Each annotation focuses the camera and reveals contextual information
- HTML overlays rendered safely using @react-three/drei

`Model Animations`

- GLTF model animations controlled via useAnimations
- Multiple animations running simultaneously
- Clean animation lifecycle management (start, stop, cleanup)

`Custom Loader`

- Animated loader using uiball (ldrs squircle)
- Rendered inside the Canvas using Drei’s `<Html>` to avoid WebGL context loss

`Global Background Audio`

- Ambient background music with mute/unmute toggle
- Audio persists across all routes
- Transparent floating sound control UI

`Routing`

- Page navigation using `react-router-dom`

**Pages include:**

- Home
- About
- Projects
- Contact

## Tech Stack

`Frontend`

- React
- Vite
- Tailwind CSS

`3D & Animation`

- Three.js
- @react-three/fiber
- @react-three/drei
- GSAP

`Assets`

- GLB 3D models
- HDR environment maps
- SVG icons
- MP3 background audio

Project Structure

```bash
src/
├── assets/
│   ├── icons/
│   │   ├── ../.svg
│   │   ├── soundon.svg
│   │   └── soundoff.svg
│   └── sakura.mp3
│
├── components/
│   ├── BakerModel.jsx
│   ├── GlobalAudio.jsx
│   ├── HomeInfo.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── UiballLoader.jsx
│
├── constants/
│   └── annotations.js
│   └── index.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│   └── index.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Interaction Guide

- `Rotate / Zoom / Pan`: Mouse or trackpad (OrbitControls)
- `Click Annotations`: Camera smoothly focuses and displays info
- `Sound Toggle`: Floating icon at top-right corner
- `Navigation`: Navbar links between sections

## Development

```jsx
npm install
```

```jsx
npm run dev
```

Check It Out [My-Portfolio](https://3d-portfolio-gokul.vercel.app/).
