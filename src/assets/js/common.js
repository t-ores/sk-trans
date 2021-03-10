import background from '../img/bg.jpg'
import background_m from '../img/bg-mobile-4.jpg'

$(document).ready(function($) {

	//PORTFOLIO
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".p_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});
	//PORTFOLIO

	function heightDetect() {
		$("#header").css("min-height", $(window).height());
		// $("section").css("min-height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("animate__animated animate__fadeInUp");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("animate__animated animate__fadeInUp");
		}
	});

	let nav = $("nav.top_mnu")
	$("header.main_head>div>div>div").append(nav)

	if($(window).width() > 980){
		$('.main_head').parallax({
			imageSrc: background,
			naturalWidth:1,
			naturalHeight:0,
			speed: 0.6,
			positionX: 'center',
			positionY: 'center',
			zIndex: -100,
			bleed: 0,
		})
	}else{
		$('.main_head').parallax({
			imageSrc: background_m,
		});
	}

	$('.logo_container').click(function (){
		window.location.href = "/";
	})
	$('.logo_container>img').hover(function (){
		$(this).css('cursor', 'pointer');
	})

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});

$(window).on('load', function (){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").addClass("animate__animated animate__fadeInDown");
	$(".top_text p").addClass("animate__animated animate__fadeInUp");

	$('.filter_div li.active').click()
})