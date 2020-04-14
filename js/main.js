/*================================================
[  Table of contents  ]
================================================

	01. jQuery Mobile MeanMenu
	02. Slider Active
	03. Counter Up
	04. Tailer Owl Active
	05. Tailer Home Two Owl Active
	06. Service Owl Active
	07. Service Owl Active Actor
	08. Service Details Owl Active
	09. Testimonial Owl Active
	10. Testimonial Owl Active
	11. Gallery Iostop Active
	12. Our Team Slick Slider
	13. Mailchimp Active
	14. TOP Menu Stick
	15. Magnific Popup For Video
	16. scrollUp
	17. Trigger Menu
	18. Slider Active Actor Home Page
	19. Brand Logo Slider Active
	20. Team Slider Active
	21. YTplayer Video Slider Active
	22. Latest Movies 2018 Home Production Active
	23. Latest News Home Production Activee
	24. Slider Active Production Home Page
	25. Ripples js
	26. Countdown
	27. Upcoming Campiagn
	28. Tailer Home Two Owl Active
	29. Gallery Campaign Active
	
================================================*/

(function ($) {
 "use strict";
	
	/*------ 01. jQuery Mobile MeanMenu ------*/
	jQuery('#mobile-nav').meanmenu();
	
	/*------ 02. Slider Active ------*/
	$('.slider-active').owlCarousel({
		items:1,
		margin:0,
		autoHeight:true
	});	
	
	/*------ 03. Counter Up ------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	/*------ 04. Tailer Owl Active ------*/
	$('.tailer-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})
	
	/*------ 05. Tailer Home Two Owl Active ------*/
	$('.tailer-active-two').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 4
		}
	  }
	})

	/*------ 05. Tailer Home Two Owl Active ------*/
	$('.recent-upload-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 4
		}
	  }
	})
	
	/*------ 06. Service Owl Active ------*/
	$('.sevice-active').owlCarousel({
	  loop: true,
	  center: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})

	/*------ 07. Service Owl Active Actor ------*/
	$('.service-active-actor').owlCarousel({
	  loop: true,
	  center: true,
	  margin: 30,
	  autoplay: false,
	  nav: false,
	  dots:true,
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})

	/*------ 08. Service Details Owl Active ------*/
	$('.service-details-active').owlCarousel({
	  loop: true,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 2
		}
	  }
	})
	
	/*------ 09. Testimonial Owl Active ------*/
	$('.testimonial-active').owlCarousel({
	  loop: true,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  animateIn: 'flipInX',
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  items : 1,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	})

	/*------ 10. Testimonial Owl Active ------*/
	$('.clientsay-active').owlCarousel({
	  loop: true,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  animateIn: 'flipInX',
	  navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
	  items : 1,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	})
	$('.testimonial-slider').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots:false,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		items : 1
	})
	
	/*------ 11. Gallery Iostop Active ------*/
	// images have loaded
	$('.gallery-box').imagesLoaded( function() {
	  // Isotop Active
	  $('.gallery-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });

	  // Isotop Full Grid
	  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: 1
		}
	  });

	  // Isotop Full Grid
	  var $grid2 = $('.grid2').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
		}
	  });
	  
	  // Isotop Menu Active
	  $('.gallery-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});
	
	/*------ 12. Our Team Slick Slider ------*/
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  arrows: true,
	  centerPadding: '0px',
	  focusOnSelect: true,
	  prevArrow: '<div class="slick-prev"><i class="icofont icofont-long-arrow-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="icofont icofont-long-arrow-right" aria-hidden="true"></i></div>',
      responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	
	/*------ 13. Mailchimp Active ------*/
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
	});
	function mailChimpResponse(resp) {
		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);
		} 
		else if(resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}  
	};
	
	/*------ 14. TOP Menu Stick ------*/
	var wstick = $(window);
	wstick.on('scroll',function() {    
	   var scroll = wstick.scrollTop();
	   if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
	
	/*------ 15. Magnific Popup For Video ------*/
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	
	$('.popup-gallery').magnificPopup({
		type: 'image',
		gallery:{
		   enabled:true
		}
	});
	
	/*------ 16. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	/*------ 17. Trigger Menu ------*/
    var slideMenu = function (container, trigger) {
        var slideMenuContainer = container;
        var slideMenutrigger = trigger;
        $(slideMenutrigger).on('click', function () {
            $(this).toggleClass('is-active')
                .siblings(slideMenuContainer).toggleClass('is-visible');
        });
    };
    var slidemenu1 = new slideMenu('.main-menu.slide-menu-inner', '.header-style-2 .trigger-menu-icon');

    /*------ 18. Slider Active Actor Home Page ------*/
	$('.slider-active-actor').owlCarousel({
		items:1,
		margin:0,
		dots:false,
		autoHeight:true
	});	

	/*------ 19. Brand Logo Slider Active ------*/
	$('.brand-logo-carousel-activation').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		prevArrow: '<i class="icofont icofont-simple-left"></i>',
		nextArrow: '<i class="icofont icofont-simple-right"></i>',
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.brand-logo-carousel-2').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		prevArrow: '<i class="fa fa-angle-left"></i>',
		nextArrow: '<i class="fa fa-angle-right"></i>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	$('.brand-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		prevArrow: '<i class="icofont icofont-simple-left"></i>',
		nextArrow: '<i class="icofont icofont-simple-right"></i>',
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/*------ 20. Team Slider Active ------*/
	$('.slider-for-team').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav-team'
	});
	$('.slider-nav-team').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for-team',
	  dots: false,
	  vertical: true,
	  centerMode: false,
	  focusOnSelect: true,
	  focusOnSelect: true,
	  prevArrow: '<div class="slick-prev"><i class="icofont-simple-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="icofont-simple-right" aria-hidden="true"></i></div>',
      responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/*------ 21. YTplayer Video Slider Active ------*/
	if ($('.youtube-bg').length) {
		$('.youtube-bg').YTPlayer();
	}
	
	/*------ 22. Latest Movies 2018 Home Production Active ------*/
	$('.latest-movies-2018').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})
	
	/*------ 23. Latest News 2018 Home Production Active ------*/
	$('.pro-latest-news-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})
	
	/*------ 24. Slider Active Production Home Page ------*/
	$('.slider-active-production').owlCarousel({
		items:1,
		margin:0,
		dots:false,
		autoHeight:true,
		nav: true,
		navText:["<span>PREV</span>","<span>NEXT</span>"],
	});	
	
	/*------ 25. Ripples js ------*/

	$('.js-ripples').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
		imageUrl: null,
		interactive: true,
		crossOrigin: ''
	});

	$('.custom1').owlCarousel({
	    items:1,
	    margin:0,
		dots:true,
	    stagePadding:0,
	    smartSpeed:450
	});

	/*--------- 26. Countdown ------------ */ 
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
	  $this.html(event.strftime('<div class="sldr_cnt_box"><span>%-D</span>Days</div><div class="sldr_cnt_box"><span>%-H</span>Hours</div><div class="sldr_cnt_box"><span>%M</span>Mins</div><div class="sldr_cnt_box"><span>%S</span>Secs</div>'));
	  });
	});

	/*------ 27. Upcoming Campiagn ------*/
	$('.upcoming-campiagn').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})

	/*------ 28. Tailer Home Two Owl Active ------*/
	$('.news-campaign').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 3
		}
	  }
	})

	/*------ 29. Gallery Campaign Active ------*/
	$('.gallery-campaign').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:2
		},
		600: {
		  items: 2
		},
		768:{
			items:2
		},
		1000: {
		  items: 4
		}
	  }
	})
	$('.gallery-slider').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: false,
		nav: true,
		dots:false,
		items: 1,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	})

	/*------ 30. Festival Slider Active ------*/
	$('.festival-slider').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: false,
		nav: false,
		dots:true,
		dotsData: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"]
	});
 
})(jQuery);