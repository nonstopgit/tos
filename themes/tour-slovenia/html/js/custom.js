$(document).ready(function() {
	$('.burger').click(function(event) {
	  event.preventDefault();
	  $(this).toggleClass('opened');
	  $('nav').toggleClass('opened');
	});

	$('.single-item').slick();

	$('.utrinek-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$.each($('[data-img]'), function() {
		var $that = $(this);
		$that.css('background', 'url("' + $that.attr('data-img') + '") no-repeat center center').removeAttr('data-img');
	});

	vph = $(window).height();

	$('.single-item').height(vph);
    $('.single-item .slick-slide').height(vph);

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 100) {
	        $("header").addClass("scrollh");
	    } else {
	        $("header").removeClass("scrollh");
	    }
	});
});