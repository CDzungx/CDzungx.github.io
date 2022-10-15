function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition li", {
		duration: 0.5,
		scaleY: 1,
		transformOrigin: "bottom left",
		stagger: 0.2,
	});

	tl.to(".transition li", {
		duration: 0.5,
		scaleY: 0,
		transformOrigin: "bottom left",
		stagger: 0.1,
		delay: 0.1,
	});
}

function contentAnimation() {
	var tl = gsap.timeline();
	tl.from(".headline", {
		duration: 1.5,
		translateY: 50,
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
                await delay(1500);
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
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

var typed = new Typed(".autotype", {
    strings: ["D z u n", "D u n g x", "C D z u n g x"],
    startDelay: 300,
    typeSpeed: 47,
    backDelay: 550,
    backSpeed: 35,
    showCursor: !1,
    smartBackspace: !0,
  }),
  typed = new Typed(".discordat", {
    strings: ["Discord", "CDzungx#0843"],
    typeSpeed: 38,
    startDelay: 700,
    backDelay: 1650,
    backSpeed: 25,
    showCursor: !1,
  });
