//import { gsap } from "gsap";

//QUIZ



import { gsap } from "gsap";

//challenge 1
gsap.from(".graph", { opacity: 0, duration: 2, ease: "slow(0.7, 0.7, false)" });

gsap.to(".red", { duration: 1, x: 350, ease: "slow(0.7, 0.7, false)" });
gsap.to(".blue", { duration: 1, x: 0, ease: "slow(0.7, 0.7, false)", delay: 0 });
//challenge 2
gsap.to(".red", { duration: 2, y: 0, ease: "slow(0.7, 0.7, false)", delay: 2 });
gsap.to(".blue", { duration: 2, y: 300, ease: "slow(0.7, 0.7, false)", delay: 1 });

gsap.to(".green", { duration: 4, scaleX: 2, ease: "slow(0.7, 0.7, false)" });

