var amountScrolled = 200;

$(window).scroll(function () {
	'use strict';
	if ($(window).scrollTop() > amountScrolled) {
		$('.back-to-top::before').fadeIn('slow');
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top::before').fadeOut('slow');
		$('a.back-to-top').fadeOut('slow');
	}
});

$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
	'use strict';
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});

$(".smooth-scroll").on('click', function (event) {
	'use strict';
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 400, function () {

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} // End if
});


$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});

if ($('.lazy').length > 0) {
	$(function() {
		$('.lazy').Lazy();
	});
}

if ($('#clock').length > 0) {
	$(function() {
		$('#clock').countdown('2023/10/31').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''		  
			  + '<div class="grid-col"><span class="display-4">%D</span> <br /><span class="h3">Day%!d</span></div> '
			  + '<div class="grid-col"><span class="display-4">%H</span> <br /><span class="h3">Hours</span></div> '
			  + '<div class="grid-col"><span class="display-4">%M</span> <br /><span class="h3">Minutes</span></div> '
			  + '<div class="grid-col"><span class="display-4">%S</span> <br /><span class="h3">Seconds</span></div> '));
		  });
	});	
}

