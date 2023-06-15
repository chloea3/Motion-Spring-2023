import { gsap } from "gsap";
import { GSDevTools } from "gsap/all";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(GSDevTools);

gsap.set("#aumio", { visibility: "visible" });

gsap.fromTo(
  "#aumio path",
  { drawSVG: "0%" },
  { drawSVG: "100%", duration: 2, ease: "power2.out" }
);

const stars = document.querySelectorAll("#star-x-1, #star-x-2, #star-x-3, #star-x-4");

gsap.set(stars, { opacity: 0, rotation: -360 });

function fadeInStars() {
  let delay = 0;
  stars.forEach((star, index) => {
    gsap.to(star, { opacity: 1, rotation: 0, delay: delay });
    delay += 0.5;
  });
}

fadeInStars();

const planet = document.getElementById("planet");
const circles = document.querySelectorAll(".circle");

gsap.set(planet, { opacity: 0, x: -1000 });
gsap.set(circles, { opacity: 0, x: -1000 });

function fadeInAndMove() {
  gsap.to(planet, { opacity: 1, x: 0, duration: 1 });
  gsap.to(circles, { opacity: 1, x: 0, duration: 1, stagger: 0.5 });
}

fadeInAndMove();

GSDevTools.create();
