// Modal variables
var ptsModal = document.getElementById('pts-modal');
var pts = document.getElementById("pts");
var ptsPrev = document.getElementById("pts-prev");
var ptsNext = document.getElementById("pts-next");

var phdModal = document.getElementById('phd-modal');
var phd = document.getElementById("phd");
var phdPrev = document.getElementById("phd-prev");
var phdNext = document.getElementById("phd-next");

var chancesModal = document.getElementById('chances-modal');
var chances = document.getElementById("chances");
var chancesPrev = document.getElementById("chances-prev");
var chancesNext = document.getElementById("chances-next");

var imgIndex = 0;

// Open modal
pts.onclick = function() {
    ptsModal.style.display = "block";
	showImg(0, 'pts');
}
phd.onclick = function() {
    phdModal.style.display = "block";
	showImg(0, 'phd');
}
chances.onclick = function() {
    chancesModal.style.display = "block";
	showImg(0, 'chances');
}

// Close modal
ptsModal.onclick = function() {
	if (event.target != ptsPrev && event.target != ptsNext && event.target.className != "pts-dot") {
		ptsModal.style.display = "none";
		imgIndex = 0;
	}
}
phdModal.onclick = function() {
	if (event.target != phdPrev && event.target != phdNext && event.target.className != "phd-dot") {
		phdModal.style.display = "none";
		imgIndex = 0;
	}
}
chancesModal.onclick = function() {
	if (event.target != chancesPrev && event.target != chancesNext && event.target.className != "chances-dot") {
		chancesModal.style.display = "none";
		imgIndex = 0;
	}
}

window.onclick = function(event) {
    if (event.target == ptsModal) {
        ptsModal.style.display = "none";
		imgIndex = 0;
    }
    else if (event.target == phdModal) {
        phdModal.style.display = "none";
		imgIndex = 0;
    }
    else if (event.target == chancesModal) {
        chancesModal.style.display = "none";
		imgIndex = 0;
    }
}

function getImg (n, modalName) {
	imgIndex = n;
	showImg(imgIndex, modalName);
}

function adjImg (n, modalName) {
	imgIndex += n;
	showImg(imgIndex, modalName);
}

function showImg (n, modalName) {
	var i;
	var imgs = document.getElementsByClassName(modalName + "-img");
	var dots = document.getElementsByClassName(modalName + "-dot");
	
	if (n < 0) {
		imgIndex = imgs.length-1;
	}
	if (n > imgs.length-1) {
		imgIndex = 0;
	}
	
	// Hide all then show current image
	for (i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity = 0; 
	}
	imgs[imgIndex].style.opacity = 1;
	
	for (i = 0; i < dots.length; i++) {
		dots[i].innerHTML = "&#9675;"; 
	}
	dots[imgIndex].innerHTML = "&#9679;";
}

function fillDot (n, modalName) {
	var dot = document.getElementsByClassName(modalName + "-dot")[n];
	dot.innerHTML = "&#9679;";
}

function clearDot (n, modalName) {
	
	if (n != imgIndex) {
		var dot = document.getElementsByClassName(modalName + "-dot")[n];
		dot.innerHTML = "&#9675;";
	}
}
