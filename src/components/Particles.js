export const params = {
  fpsLimit: 144,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "push",
      // },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 300,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: '#6F23B5',
      // color: '#ffffff',
      distance: 175,
      enable: true,
      opacity: 2,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 875,
      },
      value: 65,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3.5,
    },
  },
  detectRetina: true,
}