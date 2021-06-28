function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition li", {
		duration: 0.5,
		scaleX: 1,
		transformOrigin: "bottom right",

	});

	tl.to(".transition li", {
		duration: 0.5,
		scaleX: 0,
		transformOrigin: "bottom left",

	});
}

function contentAnimation() {
	var tl = gsap.timeline();

	tl.from(".headline", {
		duration: 1.5,
		translateX: 50,
		opacity: 0,
	});

	tl.to(
		"img",
		{
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		},
		"-=.1"
	);
}

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
			async leave(data) {
				const done = this.async();

				pageTransition();
				await delay(300);
				done();
			},

			async enter(data) {
				contentAnimation();
			},

			async once(data) {
				contentAnimation();
			},
		},
	],
});
