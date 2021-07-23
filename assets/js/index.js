gsap.registerPlugin(ScrollTrigger);

let locoScroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	repeat: true,
	direction: 'vertical'
});
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
				//contentAnimation();
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
			console.log("se ha cargado algo")
			},
		},
	],
});





locoScroll.on('call', value => {
	if (value == "text") {
		console.log("Hello World!");
	}
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("[data-scroll-container]", {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

function coloresSections(){



	var producto = gsap.timeline({
		scrollTrigger: {
			clearProps: true ,
			trigger: "#slide01",
			scroller: "[data-scroll-container]",
			scrub: true,
			start: "top 50%", // top trigger    50% viewport
			end: "bottom 50%",
		}
	});
	producto.to("body", { backgroundColor: "#000000" }, 0);



var tkivnon = gsap.timeline({
	scrollTrigger: {
		clearProps: true ,
		trigger: "#slide03",
		scroller: "[data-scroll-container]",
		scrub: true,
		start: "top 50%", // top trigger    50% viewport
		end: "bottom 50%",
	}
});
tkivnon.to("body", { backgroundColor: "#ff0000" }, 0);



var tQartum = gsap.timeline({
	scrollTrigger: {
		
		trigger: "#slide04",
		scroller: "[data-scroll-container]",
		scrub: true,
		start: "top 50%", // top trigger    50% viewport
		end: "bottom 50%",
	}
});
tQartum.to("body", { backgroundColor: "#28a92b" }, 0);


var tLlamada = gsap.timeline({
	scrollTrigger: {
		trigger: "#slide05",
		scroller: "[data-scroll-container]",
		scrub: true,
		start: "top 50%", // top trigger    50% viewport
		end: "bottom 50%",
	}
});
tLlamada.to("body", { backgroundColor: "#eaeaea" }, 0);

	
}


function scrollSmooth() {
	scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true
	});
}



function initColor() {
	gsap.to("body", { backgroundColor: "#000000",duration: 1 });
}





coloresSections();
initColor()

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
barba.hooks.after(() => {
	scrollSmooth();
	cursor();
	coloresSections();
	initColor();
	console.log("se ha cargado algo")
});
