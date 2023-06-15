// Install the GSAP library and the drawSVG plugin via NPM:
// npm install gsap gsap-plugin-drawsvg

// Import the required GSAP modules
import { gsap } from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

// Register the DrawSVGPlugin
gsap.registerPlugin(DrawSVGPlugin);

// Animation code
gsap.set("#aumio", { visibility: "visible" });

// Animate the drawSVG effect
gsap.fromTo(
  "#aumio path",
  { drawSVG: "0%" },
  { drawSVG: "100%", duration: 2, ease: "power2.out" }
);
