import * as THREE from "three";

export function getTop(mesh, offset = 0.2) {
  const box = new THREE.Box3().setFromObject(mesh);
  const pos = new THREE.Vector3();
  box.getCenter(pos);
  pos.y = box.max.y + offset;
  return pos;
}

export function getCenter(mesh, offsetY = 0.2) {
  const box = new THREE.Box3().setFromObject(mesh);
  const pos = new THREE.Vector3();
  box.getCenter(pos);
  pos.y += offsetY;
  return pos;
}

export function getBehind(mesh, offsetZ = 0.4) {
  const box = new THREE.Box3().setFromObject(mesh);
  const pos = new THREE.Vector3();
  box.getCenter(pos);
  pos.z = box.min.z - offsetZ;
  return pos;
}
