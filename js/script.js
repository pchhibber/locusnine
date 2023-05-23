$(function() {
    //mobile menu
    $('#mobileMenuBtn').click(function() {
        $('#mobileMenu').addClass('open');
    });

    //mobile menu close
    $('#mobileMenuCloseBtn').click(function() {
        $('#mobileMenu').removeClass('open');
    });

    //banner-carousel
    $('.banner-carousel').slick({
        arrows: false,
        dots: true,
        infinite: true
    });

    //companies-carousel
    $('.companies-carousel').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextslide){
        console.log(currentSlide);
        $('.companies-carousel .content').addClass('highlight');
        $('.companies-carousel .slick-slide[data-slick-index="'+nextslide+'"] .content').removeClass('highlight');
      });
    
    //inner-page-companies-carousel
    $('.inner-page-companies-carousel').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '305px',
        responsive: [{
            breakpoint: 992,
            settings: {
                centerPadding: '0',
                slidesToShow: 3,
                centerMode: false
            }
        }]
    });

    //Responsive slider 
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
      });
    function slider() {
        var windowSize = $(this).width();
        if (windowSize < 992) {
            //value-carousel
            $('.value-carousel').not('.slick-initialized').slick({
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '30px'
            });

            //engage-carousel
            $('.engage-carousel').not('.slick-initialized').slick({
                dots: true,
                arrows: true,
                adaptiveHeight: true
            });

            //benefits-carousel
            $('.benefits-carousel').not('.slick-initialized').slick({
                dots: true,
                arrows: false,
                adaptiveHeight: true
            });
        }

    }
    slider();

    // window on resize
    $(window).on('resize orientationChange', function() {
        var windowSize = $(this).width();
        if (windowSize > 992) {
            $('.value-carousel').slick("unslick");
            $('.engage-carousel').slick("unslick");
            $('.benefits-carousel').slick("unslick");
        } else {
            slider();
        }
    });

    // window on scroll
    var dockTopSection = $("#dockTopSection");

    if (dockTopSection.length) {
        var dock = $('.dock');
        var sticky = dockTopSection.offset().top;
        $(window).scroll(function() {
            if ($(this).scrollTop() > sticky) {
                dock.addClass("sticky");
            } else {
                dock.removeClass("sticky");
            }
        });
    }
    // workbox-carousel filteration 
    $('.workbox-carousel .content')
	.on('click', function(){
		var $el = $(this);
		var filterKey = $el.attr('data-filter-key');
		
		$('.workbox-carousel .content').removeClass('selected');
		$el.addClass('selected');
        $('.some-of-work-section').attr('data-filter', filterKey)
        AOS.refresh();
    });
    
    // moving_images
    $(document).mousemove(function (event) {

		$(".moving-img").each(function (index, element) {

			var xPos = (event.clientX / $(window).width()) - 0.5,
				yPos = (event.clientY / $(window).height()) - 0.5,
				box = element;

			TweenLite.to(box, 1, {
				y: xPos * 50,
				x: yPos * 50,
				ease: Power1.easeOut,
			});

		})
	});
});
