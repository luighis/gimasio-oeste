
/* smoothScroll */

var scroll = new SmoothScroll();

var smoothScrollWithoutHash = function (selector, settings) {

	var clickHandler = function (event) {
		var toggle = event.target.closest(selector);

		if (!toggle || toggle.tagName.toLowerCase() !== 'a') return;
		
		var anchor = document.querySelector(toggle.hash);

		if (!anchor) return;

		event.preventDefault();
		scroll.animateScroll(anchor, toggle, settings || {});
	};

	window.addEventListener('click', clickHandler, false);
};

smoothScrollWithoutHash('a[href*="#"]');

/* menu-boton */

var btn = document.querySelector('.menu-btn');

btn.addEventListener('click', function () {

	var body = document.body;
	body.classList.toggle('show-menu');

	if (body.classList.contains('show-menu')) {
		btn.classList.add('icon-cancel', 'icon-color-top');
	} else {
		btn.classList.remove('icon-cancel', 'icon-color-top');
	}

}, false);

/* menu-color-icon */

var today = document.querySelector("#today"),
	height = today.offsetTop,
	menuBtn = document.querySelector('.menu-btn');

var changeHeight = function () {
	height = today.offsetTop;
};

var changeColorIcon = function () {

	if (window.pageYOffset >= height + 15) {
		menuBtn.classList.add("icon-color-nav");
  	} else {
		menuBtn.classList.remove("icon-color-nav");
  	}
};

window.addEventListener('scroll', changeColorIcon, false);
window.addEventListener('resize', changeHeight, false);