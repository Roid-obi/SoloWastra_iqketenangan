import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initSmoothScroll() {
	if (typeof window === "undefined") return;
	if (lenis) return lenis;

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	gsap.registerPlugin(ScrollTrigger);

	if (prefersReducedMotion) {
		// Respect user preference: no custom smooth scroll, native behavior only.
		return null;
	}

	lenis = new Lenis({
		duration: 1.1,
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 1.2,
	});

	lenis.on("scroll", ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis?.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	return lenis;
}

export function getLenis() {
	return lenis;
}
