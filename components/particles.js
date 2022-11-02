import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import params from "../data/particles.json";

export default function ParticlesComponent() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return <Particles id="tsparticles" init={particlesInit} options={params}/>;
}
