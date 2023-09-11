const content = document.querySelector('section');
let cuttentPos = window.pageYOffset;

const callDistort = function() {
	const newPos = window.pageYOffset;
	const diff = newPos - cuttentPos;
	const speed = diff * 0.25;

	content.style.transform = "skewY("+ speed + "deg)";
	cuttentPos = newPos;
	requestAnimationFrame(callDistort);
}

callDistort();