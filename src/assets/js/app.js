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
