import Granim from "granim";

var granimInstance = new Granim({
  element: "#canvas-basic",
  direction: "left-right",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#FFEFBA", "#FFFFFF"],
        ["#654ea3", "#eaafc8"],
        ["#ee9ca7", "#ffdde1"],
      ],
    },
  },
});
