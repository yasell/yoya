$(document).ready(function() {
	// back to top
	$("#back-top").hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$("#back-top").fadeIn();
		} else {
			$("#back-top").fadeOut();
		}
	});

	$("#back-top").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// slider`s
	// yoya babe
	var slider1 = new Swiper(".swiper-babe", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 100
	});

	// yoya plus
	var slider2 = new Swiper(".swiper-plus", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 100
	});

	// accessuare
	var slider3 = new Swiper(".swiper-other", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 100
	});

	// reviews
	var slider4 = new Swiper(".swiper-reviews", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 2,
    spaceBetween: 100
	});
});
