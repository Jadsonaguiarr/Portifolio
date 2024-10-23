import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "@tsparticles/engine";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleLoaded = async (container: Container  | undefined) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
      className="absolute top-0 left-0 w-full h-full -z-10"
        id="tsparticles"
        particlesLoaded={particleLoaded}
        options={{
          background: {
              color: {
                  value: "#0d47a1",
              },
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  // onClick: {
                  //     enable: true,
                  //     mode: "push",
                  // },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#ffffff",
              },
              links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 5,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                  },
                  value: 105,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}
      />
    )
  );
};

export default ParticleComponent;
