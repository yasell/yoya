// animation
window.sr = ScrollReveal({duration: 1300});
sr.reveal(".banner__img", 10);
sr.reveal(".banner__descr", 70);
sr.reveal(".features__content");
sr.reveal(".features__img-center");
sr.reveal(".sizes__list");
sr.reveal(".sizes__footer");
sr.reveal(".care .container");
sr.reveal(".equipment__item");
sr.reveal(".contacts .container");

$(document).ready(function() {
	// back to top
	$("#back-top").hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
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

 // smooth	scroll
	$(".catalog__nav, .banner__button").on("click", "a", function(event) {
		event.preventDefault();

		var el = $(this).attr("href");
		$("body,html").animate({
			scrollTop: $(el).offset().top
		}, 1800);
		return false;
	});

	// call button
$("#call, .button--buy").click(function() {
	$("#modal_call").addClass("modal--show");
	$(".modal_bg").css("display", "block");
});

$(".modal__close, .modal_bg").click(function() {
	$("#modal_call").removeClass("modal--show");
	$(".modal_bg").css("display", "none");
});

// send mail
$("#call_form, #modal_form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		// open modal
		$("#modal_call").removeClass("modal--show");
		$("#modal_ok").addClass("modal--show");
		$(".modal_bg").css("display", "block");

		$(".modal__close, .modal_bg").click(function() {
			$("#modal_ok").removeClass("modal--show");
			$(".modal_bg").css("display", "none");
		});
		$("#call_form, #modal_form").trigger("reset");
	});
	return false;
});

	// Swiper slider
	// yoya babe
	var slider1 = new Swiper(".swiper-babe", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30
	});

	// yoya plus
	var slider2 = new Swiper(".swiper-plus", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30
	});

	// accessuare
	var slider3 = new Swiper(".swiper-other", {
		loop: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30
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
