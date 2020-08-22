/*
	Prism by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	});

})(jQuery);



// Switching images for certificates section

function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
	document.getElementById("certificates").src = images[x];
}

function displayPreviousImage() {
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("certificates").src = images[x];
}

function startTimer() {
	setInterval(displayNextImage, 6000);
}

var images = [], x = -1;
images[0] = "images/extern_badge.jpg";
images[1] = "images/lspace_cert.jpg";