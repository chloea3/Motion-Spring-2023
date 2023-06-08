import { gsap } from "gsap";
import { GSDevTools, DrawSVGPlugin } from "gsap/all";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

gsap.registerPlugin(DrawSVGPlugin);

const mainCircle = document.querySelector("#main-circle");
const planet = document.querySelector("#planet");
const circlesGroup = document.querySelector("#circles-group");
const starX2 = document.querySelector("#star-x-2");
const starX3 = document.querySelector("#star-x-3");
const starX4 = document.querySelector("#star-x-4");
const starX1 = document.querySelector("#star-x-1");

gsap.set([mainCircle, planet, circlesGroup, starX2, starX3, starX4, starX1], { drawSVG: "0%" });

const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

tl.to(mainCircle, { drawSVG: "100%" })
  .to(planet, { drawSVG: "100%" }, "-=0.8")
  .to(circlesGroup, { drawSVG: "100%" }, "-=0.8")
  .to(starX2, { drawSVG: "100%" }, "-=0.5")
  .to(starX3, { drawSVG: "100%" }, "-=0.5")
  .to(starX4, { drawSVG: "100%" }, "-=0.5")
  .to(starX1, { drawSVG: "100%" }, "-=0.5");




GSDevTools.create();
