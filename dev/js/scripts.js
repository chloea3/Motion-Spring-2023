import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

gsap.registerPlugin(GSDevTools);

gsap.set("#custom-logo", { visibility: "visible" });

gsap.from("#orange-circle", {
  opacity: 0,
  duration: 3,
  ease: "power2.out"
});

gsap.from("#pink-circle", {
  opacity: 0,
  duration: 3,
  ease: "power2.out",
  delay: 1
});

gsap.from("#white-circle-1", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 1.5
});

gsap.from("#white-circle-2", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  delay: 1.9
});

gsap.from("#white-circle-3", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 2.2
});

gsap.from("#VER, #BR, #K", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 2.5
});



GSDevTools.create();
