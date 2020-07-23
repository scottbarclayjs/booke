const nav = document.querySelector('.nav');
let scrollLocation = 0;

window.addEventListener('scroll', (e) => {
	if (window.pageYOffset > 1) {
		nav.classList.add('scroll');
	} else {
		nav.classList.remove('scroll');
	}
});
