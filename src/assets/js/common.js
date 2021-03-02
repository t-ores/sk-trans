import background from '../img/bg.jpg'
//import background_m from '../img/bg-mobile-2.jpg'
import background_m from '../img/bg-mobile-4.jpg'

$(document).ready(function() {

	function heightDetect() {
		$("#header").css("height", $(window).height());
		$("section").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//animation
	//$(".section_header").animated("fadeInUp", "fadeOutDown");
	// $(".animation_1").animated("flipInY", "fadeOutDown");
	// $(".animation_2").animated("fadeInLeft", "fadeOutDown");
	// $(".animation_3").animated("fadeInRight", "fadeOutDown");
	// $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	// $(".right .resume_item").animated("fadeInRight", "fadeOutDown");
	//animation

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
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
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
	// $('.logo_container>img').hover(function (){
	// 	this.css('cursor', 'pointer');
	// })

	$(".top_mnu ul a").mPageScroll2id();

});

$(window).on('load', function (){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
})