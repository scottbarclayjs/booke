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

const bookImages = document.querySelectorAll('.screenshot-image');
const imageDot = document.querySelectorAll('.dot');
let displayImage = 0;

imageCycle();
function imageCycle() {
	for (let i = 0; i < bookImages.length; i++) {
		bookImages[i].style.display = 'none';
		imageDot[i].style.backgroundColor = '#aaa';
	}
	bookImages[displayImage].style.display = 'block';
	imageDot[displayImage].style.backgroundColor = '#1c63fb';
	if (displayImage < bookImages.length - 1) {
		displayImage++;
	} else {
		displayImage = 0;
	}
}

let t = setInterval(imageCycle, 4000);

for (let i = 0; i < imageDot.length; i++) {
	imageDot[i].addEventListener('click', () => {
		displayImage = i;
		imageCycle();
	});
}

const imageNav = document.querySelectorAll('.screenshot-image-nav button');
imageNav[0].addEventListener('click', () => {
	if (displayImage > 1) {
		displayImage -= 2;
		imageCycle();
	} else if (displayImage === 0) {
		displayImage = bookImages.length - 2;
		imageCycle();
	} else {
		displayImage = bookImages.length - 1;
		imageCycle();
	}
});
imageNav[1].addEventListener('click', () => {
	imageCycle();
});
