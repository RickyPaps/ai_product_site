import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTextre: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  activeTab: "",
});

export default state;
