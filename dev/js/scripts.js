import { gsap } from "gsap";
import { GSDevTools, DrawSVGPlugin } from "gsap/all";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

const aumioPath = document.querySelector('#aumio');
gsap.set(aumioPath, { drawSVG: '0%' });
gsap.to(aumioPath, { duration: 2, drawSVG: '100%', ease: 'power2.out' });

GSDevTools.create();
