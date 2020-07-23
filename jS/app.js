const nav = document.querySelector('.nav');
let scrollLocation = 0;

window.addEventListener('scroll', (e) => {
	if (window.pageYOffset > 1) {
		nav.classList.remove('unscroll');
		nav.classList.add('scroll');
	} else {
		nav.classList.add('unscroll');
	}
	if (window.pageYOffset > 365) {
		nav.classList.add('nav-min');
	} else {
		nav.classList.remove('nav-min');
	}
});
