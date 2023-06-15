
import { gsap } from "gsap";
import { GSDevTools } from "gsap/all";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#aumio", { visibility: "visible" });

gsap.fromTo(
  "#aumio path",
  { drawSVG: "0%" },
  { drawSVG: "100%", duration: 2, ease: "power2.out" }
);

