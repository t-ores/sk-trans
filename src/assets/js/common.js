import background from '../img/bg.jpg'
import background_m from '../img/bg-mobile-4.jpg'

var mixItUp = require('mixitup')

//var $ = require("jquery"); // must be required first to install the global jQuery/$ variable
require("magnific-popup"); // add the .magnificPopup function to $

$(document).ready(function($) {

	//PORTFOLIO
	//$("#portfolio_grid").mixItUp();
	//mixItUp('#portfolio_grid')
	// mixItUp('#portfolio_grid', {
	// 	selectors: {
	// 		target: '.portfolio_item'
	// 	},
	// 	animation: {
	// 		duration: 300
	// 	}
	// })

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	// $.magnificPopup.open({type:"image"})
	// $(".popup").magnificPopup({type:"image"});
	// $(".popup_content").magnificPopup({
	// 	type:"inline",
	// 	midClick: true
	// });
	//PORTFOLIO

	function heightDetect() {
		$("#header").css("min-height", $(window).height());
		$("section").css("min-height", $(window).height());
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