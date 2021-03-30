import background from '../img/bg.jpg'
import background_m from '../img/bg-mobile-4.jpg'

$(document).ready(function($) {

	$(".parallax-slider").attr("alt", "SK-Trans")

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
		$(".s_contacts").css("min-height", $(window).height()); 
		$(".s_about").css("min-height", $(window).height()); 
		// $("section").css("min-height", $(window).height()); 
		//
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

	var res_right_strong = $(".right .resume_description strong")
	var res_right_descr = $(".right .resume_description")

	//console.log(res_right_strong)
	//res_right_strong.prependTo(res_right_descr);
	//$(".right .resume_description strong").prependTo($(".right .resume_description"));
	//$(".right .resume_description strong").remove(); 
	//FORM
	window.addEventListener( "load", function () {
	  function sendData() {
	    const XHR = new XMLHttpRequest();
	    // Bind the FormData object and the form element
	    const FD = new FormData( form );
	    // Define what happens on successful data submission
	    XHR.addEventListener( "load", function(event) {
	    	$('form.main_form').append(`<p class="form-inf-block text-success">Ваші дані відправлені !</p>`)
	    	
	    	$('#my-form > label.hidden > input[name=FIELDS[NAME]]').val('')
	    	$('#my-form > label.hidden > input[name=FIELDS[EMAIL][0][VALUE]]').val('')
	    	$('#my-form > label.hidden > input[name=FIELDS[PHONE][0][VALUE]]').val('')
	    	//#my-form > label.hidden > input[name=FIELDS[NAME]]
	    	//#my-form > label.hidden > input[name=FIELDS[EMAIL][0][VALUE]]
	    	//#my-form > label.hidden > input[name=FIELDS[PHONE][0][VALUE]]
	    	//
	    	//#my-form > label:nth-child(2) > input[type=text]
	    	//$('form.main_form').append(`<pre>${event.target.responseText}</pre>`)
	    } );
	    // Define what happens in case of error
	    XHR.addEventListener( "error", function( event ) {
			$('form.main_form').append(`<p class="form-inf-block text-danger">Ваші дані не відправлено !</p>`)
	    } );
	    // Set up our request 
	    //XHR.open( "POST", "https://sk-trans.bitrix24.ua/rest/1/4da6dwrb36o7ujqd/crm.lead.add.json" );
	    XHR.open( "POST", "https://sk-trans.bitrix24.ua/rest/1/4da6dwrb36o7ujqd/crm.lead.add.json" );
	    // The data sent is what the user provided in the form
	    XHR.send( FD );
	  }
	  // Access the form element...
	  const form = document.getElementById( "my-form" );
	  // ...and take over its submit event.
	  form.addEventListener( "submit", function ( event ) {
	    event.preventDefault();

	    sendData();
	  } );
	} );
	//FORM

	// CHAT WIDGET
        (function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.ua/b17015247/crm/site_button/loader_2_qtkg72.js');
	// CHAT WIDGET
	//$('input[type=phone]').mask("+380 (99) 999-99-99")
});

$(window).on('load', function (){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").addClass("animate__animated animate__fadeInDown");
	$(".top_text p").addClass("animate__animated animate__fadeInUp");

	$('.filter_div li.active').click()
})