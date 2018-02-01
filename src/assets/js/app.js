//=require jquery.min.js

//=require what-input.min.js

// Core Foundation files
//=require foundation.core.min.js"
//=require foundation.util.*.min.js"

//=require foundation.dropdown.min.js"
//=require foundation.responsiveMenu.min.js"
//=require foundation.responsiveToggle.min.js"
//=require foundation.toggler.min.js"

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.min.js"
// require foundation.accordion.min.js"
// require foundation.accordionMenu.min.js"
// require foundation.drilldown.min.js"
// require foundation.dropdownMenu.min.js"
//=require foundation.equalizer.min.js
// require foundation.interchange.min.js"
// require foundation.magellan.min.js"
//=require foundation.offcanvas.min.js
// require foundation.orbit.min.js"
// require foundation.reveal.min.js"
// require foundation.slider.min.js"
// require foundation.sticky.min.js"
//=require foundation.tabs.min.js
// require foundation.tooltip.min.js"
// require foundation.zf.responsiveAccordionTabs.min.js"

//=require slick.min.js
//=require rellax.min.js


;
(function ($) {
	$(document).foundation();

	var rellax = new Rellax('.ba-rellax');

	$(document).ready(function () {
		var $slider = $('.ba-gallery');

		$slider.slick({
			slide: '.ba-gallery__slide',
			dots: false,
			infinite: true,
			centerMode: true,
			centerPadding: '100px',
			focusOnSelect: true,
			variableWidth: true,
			nextArrow: '.ba-gallery-next',
			prevArrow: 'ba-gallery-prev',
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: false,
					centerPadding: '50px'
				}
			}]
		});

		var sliderTotal = $slider.slick("getSlick").slideCount,
				sliderTotalEl = $('.ba-gallery-count__total'),
				sliderCurEl = $('.ba-gallery-count__current');

		sliderTotalEl.text(sliderTotal);

		$slider.on('afterChange', function(event, slick, currentSlide){
			sliderCurEl.text(currentSlide + 1);
		});

		var header = document.querySelector('.ba-header'),
			scrollTop;

		window.addEventListener('scroll', fixHeader);

		function fixHeader() {
			scrollTop = window.pageYOffset;
			console.log(scrollTop);

			if (scrollTop >= 50) {
				header.classList.add('ba-stick');
			} else {
				header.classList.remove('ba-stick');
			}
		}
		fixHeader();

	});

})(jQuery);
