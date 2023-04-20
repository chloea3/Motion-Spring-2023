import { gsap } from "gsap";
gsap.from("#hero h1, #hero h2", {
    opacity: 0,
    duration: 1.5,
    delay: 2,
    stagger: 0.6
});

gsap.from("#hero button", {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    delay: 3.5,
    ease: "back.out(1.7)"
    
});

gsap.from("header", {
    opacity: 0,
    duration: 1.5,
    delay: 0.5
  });
