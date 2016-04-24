$(document).foundation();


$(".toggle-menu").on("click", function() {
	$("#menu").toggleClass("is-open");
});

$(".close").on("click", function() {
	$("#menu").toggleClass("is-open");
});

$("#menu").on("click", "li", function() {
	$("#menu").toggleClass("is-open");
});


var topbar, yPos;

function yScroll() {
	topbar = document.getElementsByClassName('top-bar')[0];
	yPos = window.pageYOffset;

	if (yPos > 10) {
		topbar.style.backgroundColor = '#e6e6e6';
	} else {
		topbar.style.backgroundColor = '#FFFFFF';
	}
}


window.addEventListener('scroll', yScroll);
