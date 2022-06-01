$ciclo = true;
function pageTransition() {
	var tl = gsap.timeline();
	tl.to(".transition li", {
		duration: 0.4,
		scaleX: 1,
		transformOrigin: "bottom right",
	});
	tl.to(".transition li", {
		duration: 0.3,
		scaleX: 0,
		transformOrigin: "bottom left",
	});
}

barba.init({
	sync: true,
	transitions: [
		{
			async once(data) {
				console.log("once barba");
				scrollSmooth();
				cursor();
				initSwiper();
				initPage();
				loadPage();
			},
			async leave(data) {
				const done = this.async();
				pageTransition();
				await delay(400);
				done();
				
				console.log("leave barba");
			},
			async enter(data) {
				//	contentAnimation();
				initPage();
				scrollSmooth();
				cursor();
				console.log("enter barba");
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
		smartphone: {
			smooth: true,
		},
		tablet: {
			smooth: true,
		},
	});
	setTimeout(() => {
		locoScroll.on("call", (value, way, obj) => {
			if (way === "enter") {
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
function initPage() {


	if ($ciclo == true) {
		gsap.to(".bg", { height: "0", duration: 1, ease: Expo.easeInOut });
		$ciclo = false;
	} else {
		gsap.to(".bg", { height: "0", duration: 0.1, ease: Expo.easeInOut });
		console.log("carga de pagina 23");
	}

	gsap.to(".outtext-1 .intext", { delay: 0.2, top: "0", duration: 1, ease: Expo.easeInOut, });
	gsap.to(".outtext-2 .intext", { delay: 0.4, top: "0", duration: 1, ease: Expo.easeInOut, });
	gsap.to(".outtext-3 .intext", { delay: 0.5, top: "0", duration: 1, ease: Expo.easeInOut, });
	gsap.to(".outtext-4 .intext", { delay: 0.6, top: "0", duration: 1, ease: Expo.easeInOut, });
	gsap.to(".image-digital", { delay: 0.7, opacity: "1", duration: 1, ease: Expo.easeInOut, });
	console.log("carga de pagina");
}
function loadPage() {
	$ciclo = false;
}
function initSwiper() {
	var menu = [
		"2000",
		"2001",
		"2002",
		"2003",
		"2004",
		"2005",
		"2006",
		"2007",
		"2008",
		"2009",
	];
	var mySwiper = new Swiper(".swiper-container", {
		// If we need pagination
		direction: "horizontal",
		slidesPerView: 5,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 0,
		paginationClickable: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + menu[index] + "</span>";
			},
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
			
			},
			640: {
				slidesPerView: 1.5,
			
			},
			768: {
				slidesPerView: 4,
		
			},
			1280: {
				slidesPerView: 5,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}
//coloresSections();
barba.hooks.after(() => {
	scrollSmooth();
	cursor();
	initPage();
	loadPage();
	initSwiper();
	console.log("fin de la carga de barba");
});
