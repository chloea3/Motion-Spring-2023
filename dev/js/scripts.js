import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  gsap.registerPlugin(ScrollTrigger);
  const trigger = {
    trigger: star,
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    markers: true
  };
  gsap.to(star, {
    rotation: 360,
    duration: 3,
    ease: 'power2.out',
    repeat: -1,
    scrollTrigger: trigger

  });
});

gsap.registerPlugin(ScrollTrigger);

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const trigger = {
    trigger: circle,
    start: "top 80%", 
    end: "bottom 20%", 
    scrub: true,
    markers: true
  };
  gsap.to(circle, {
    scale: 1.5, 
    duration: 1, 
    scrollTrigger: trigger
  });
  gsap.to(circle, {
    scale: 1, // 
    duration: 1, 
    scrollTrigger: {
      trigger: circle,
      start: "top 20%", 
      end: "bottom 80%", 
      scrub: true
    }
  });
});



gsap.registerPlugin(ScrollTrigger);

const octagons = document.querySelectorAll('.octagon');

octagons.forEach(octagon => {
  gsap.to(octagon, {
    x: '+=100%',
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: octagon,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers:true,
      toggleActions: 'restart none none reverse',
      onEnter: () => octagon.classList.add('right'),
      onLeaveBack: () => octagon.classList.remove('right')
    }
  });
});



