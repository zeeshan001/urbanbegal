$(document).ready(function(){
	$("#nav-wrap").data("top", $("#nav-wrap").offset().top); // set original position on load
	$(window).scroll(fixDiv);
});

function fixDiv() {
	var $div = $("#nav-wrap");
	if ($(window).scrollTop() > $div.data("top")) { 
		$(".nav-hidden-height").show();
		$('#nav-wrap').css({'position': 'fixed', 'top': '0', 'width': '100%'}); 
	}
	else {
		$(".nav-hidden-height").hide();
		$('#nav-wrap').css({'position': 'static', 'top': 'auto', 'width': '100%'});
	}
}

$(document).ready(function(){
	$('#blog-detail').tinyscrollbar();
});
$(function() {
	$('.theme-btn').click(function() {
		$(this).addClass('activebtn');
		$(this).html('ASNIÈRES');
		$(this).next().html('<span>BOIS-COLOMBES</span>');
		$(".theme-btn-2").removeClass('activebtn2');
		$(".resturant-section").show();
		$(".foodtruck-section").hide();
		return false
	});
	$('.theme-btn-2').click(function() {
		$(".theme-btn").removeClass('activebtn');
		$(this).addClass('activebtn2');
		$(this).prev().html('NOS RESTAURANTS');
		$(this).html('FOODTRUCKS');
		$(".resturant-section").hide();
		$(".foodtruck-section").show();
		return false
	});
});

$(document).ready(function() {
	/*
	*   Examples - images
	*/
	
	//$("a.fancybox").fancybox();
	
	// fancybox
		$(".fancybox").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	
	
});


$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth: 59,
    itemMargin: 2,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#carousel"
  });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	itemWidth: 549
  });
});

$(window).load(function() {
  $('.mainflexslider').flexslider({
    animation: "slide",
	itemWidth: 1905
  });
});

$(window).load(function() {
  $('.flexslider-logo').flexslider({
    animation: "slide",
    itemWidth: 162,
    itemMargin: 20,
    minItems: 6,
    maxItems: 6,
	move: 1
  });
});



$(function() {
	var windowWidth = $(window).width();
	var value = null;
	if( windowWidth < 767 ){
		value = 1;
		$('.flexslider-logo').removeClass('flexslider-logo').addClass('flexslider-logo-section');
	}
	else{
		value = 4;
	}

$(window).load(function() {
  $('.flexslider-event').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 240,
    itemMargin: 36,
    minItems: value,
    maxItems: value,
	move: 1
  });
});


$("#nav a").click (function () {
	var navHieght = $("#nav-wrap").height();	
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - navHieght + 10
	}, 1000);
	return false;
});

$(".btn-navbar").click(function () {
	if ( $(this).hasClass('exp') ) {
		$(this).removeClass('exp');
		$(".overlay").fadeOut();
	}
	else{
		$(this).addClass('exp');
		$(".overlay").fadeIn();
	}
	
});


});

