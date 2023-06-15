import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

gsap.set("#custom-logo", { visibility: "visible" });

const orangeCirclePath = MorphSVGPlugin.convertToPath("#orange-circle");
const pinkCirclePath = MorphSVGPlugin.convertToPath("#pink-circle");
const whiteCirclePaths = gsap.utils.toArray("#white-circle-1, #white-circle-2, #white-circle-3").map((circle) => MorphSVGPlugin.convertToPath(circle));

gsap.from(orangeCirclePath, {
  opacity: 0,
  duration: 4,
  ease: "power2.out"
});

gsap.from(pinkCirclePath, {
  opacity: 0,
  duration: 4,
  ease: "power2.out",
  delay: 1.5
});

whiteCirclePaths.forEach((circlePath, index) => {
  gsap.from(circlePath, {
    morphSVG: orangeCirclePath,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 2.3 + (index * 0.3)
  });
});

gsap.from("#VER", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 2.5 + (whiteCirclePaths.length * 0.3)
});
gsap.from("#BR", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 2.8 + (whiteCirclePaths.length * 0.3)
});
gsap.from("#K", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 3 + (whiteCirclePaths.length * 0.3)
});

GSDevTools.create();
