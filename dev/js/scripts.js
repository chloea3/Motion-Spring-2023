import { gsap } from "gsap";

function animateHero() {
  const tl = gsap.timeline();
  
  gsap.set("header", { opacity: 0 });
  gsap.set("#hero h1, #hero h2", { opacity: 0 });
  gsap.set("#hero button", { opacity: 0, scale: 0.5 });
  
  if (window.matchMedia("(min-width: 768px)").matches) {
    tl.to({}, 0.1, {}) 
      .to("header", { opacity: 1, duration: 1.5, delay: 0.2 })
      .to("#hero h1, #hero h2", { opacity: 1, duration: 1.5, stagger: 0.6 }, "-=0.8")
      .to("#hero button", { opacity: 1, scale: 1, duration: 2, ease: "back.out(1.7)" }, "-=0.5");
  } else {
    tl.to({}, 0.1, {}) 
      .to("header", { opacity: 1, duration: 1.5, delay: 0.2 })
      .to("#hero h1, #hero h2", { opacity: 1, duration: 1.5, stagger: 0.6 }, "-=0.8")
      .to("#hero button", { opacity: 1, duration: 2 }, "-=0.5");
  }
}

requestAnimationFrame(animateHero);


