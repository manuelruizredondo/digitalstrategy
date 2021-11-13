function pageTransition() {
	var tl = gsap.timeline();
	tl.to(".transition li", {
		duration: 0.3,
		scaleX: 1,
		transformOrigin: "bottom right",
	});
	tl.to(".transition li", {
		duration: 0.3,
		scaleX: 0,
		transformOrigin: "bottom left",
	});
}
// function contentAnimation() {
// 	var tl = gsap.timeline();
// 	tl.from(".headline", {
// 		duration: 1.5,
// 		translateX: 50,
// 		opacity: 0,
// 	});
// 	tl.to(
// 		"img",
// 		{
// 			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
// 		},
// 		"-=.1"
// 	);
// }
function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}
barba.init({
	sync: true,
	transitions: [
		{
			async once(data) {
				console.log("once");
				scrollSmooth();
				cursor();
			},
			async leave(data) {
				const done = this.async();
				pageTransition();
				await delay(300);
				done();
			},
			async enter(data) {
				//	contentAnimation();
				cursor();
				console.log("enter");
			},
		},
	],
});
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
	scrollTop(value) {
		return arguments.length
			? locoScroll.scrollTo(value, 0, 0)
			: locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		};
	},
	pinType: document.querySelector("[data-scroll-container]").style.transform
		? "transform"
		: "fixed",
});
function coloresSections() {
	gsap.timeline({
		scrollTrigger: {
			clearProps: true,
			trigger: "#slide01",
			scroller: "[data-scroll-container]",
			scrub: true,
			start: "top 50%", // top trigger    50% viewport
			end: "bottom 50%",
		},
	});
	gsap.timeline({
		scrollTrigger: {
			clearProps: true,
			trigger: "#slide03",
			scroller: "[data-scroll-container]",
			scrub: true,
			start: "top 20%", // top trigger    50% viewport
			end: "bottom 50%",
		},
	});
	var tQartum = gsap.timeline({
		scrollTrigger: {
			trigger: "#slide04",
			scroller: "[data-scroll-container]",
			scrub: true,
			start: "top 20%", // top trigger    50% viewport
			end: "bottom 50%",
		},
	});
	tQartum.to(".bodyindex", { backgroundColor: "#28a92b" }, 0);
	gsap.timeline({
		scrollTrigger: {
			trigger: "#slide05",
			scroller: "[data-scroll-container]",
			scrub: true,
			start: "top 50%", // top trigger    50% viewport
			end: "bottom 50%",
		},
	});
}
function scrollSmooth() {
	gsap.registerPlugin(ScrollTrigger);
	let locoScroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
		repeat: true,
		direction: "vertical",
	});





	setTimeout(() => {
		locoScroll.on('call', (value, way, obj) => {
	
		  if (way === 'enter') {
			switch (value) {
			  case "pageColor":
				// get color code from data-scroll-id  assigned to body by obj.id
				gsap.to(".bodyindex", { backgroundColor: obj.id });

				break;      
		   }
		  }
	
		});
	  }, 800);





	locoScroll.on("scroll", ScrollTrigger.update);
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.refresh();
}
function initSwiper() {
	var mySwiper = new Swiper(".swiper-container", {
		// esto es opcional
		direction: "horizontal",
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 0,
		//visibilityFullFit: true,
		pagination: ".swiper-pagination",
		paginationClickable: true,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
	});
}
//coloresSections();
initSwiper();
barba.hooks.after(() => {
	scrollSmooth();
	cursor();
	//coloresSections();
	initSwiper();
	console.log("fin de la carga de barba");
});






gsap.to(".bg", {height: "0",  duration: 1,   ease: Expo.easeInOut})



gsap.to(".image-bg",{delay:1, opacity: "1",duration: 1,  ease: Expo.easeInOut})

gsap.to(".outtext-1 .intext",{ delay:.2, top: "0", duration: 1, ease: Expo.easeInOut})
gsap.to(".outtext-2 .intext",{delay:.4, top: "0",duration: 1,  ease: Expo.easeInOut})
gsap.to(".outtext-3 .intext",{delay:.5, top: "0",duration: 1,  ease: Expo.easeInOut})
gsap.to(".outtext-4 .intext",{delay:.6, top: "0",duration: 1,  ease: Expo.easeInOut})


gsap.to(".image-digital",{delay:.7, opacity: "1",duration: 1,  ease: Expo.easeInOut})


