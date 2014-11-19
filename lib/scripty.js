$(document).ready(function(){
		// Backstretch

var aboutHidden=false;
var locationHidden=true;
var contactusHidden=true;
$('#about').attr('disabled', true);
$('#about').addClass('clicked');

$.backstretch("./images/diamond.jpg");

// ABOUT BUTTON

$('#about').click(function(){
	if(locationHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#location').removeClass('clicked');
		$('#location').addClass('hovereffect');
		$('#about').removeClass('hovereffect');
		$('#about').addClass('clicked');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.location').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#location').attr('disabled', false);
			$('#contactus').attr('disabled', false);
			next();
		});
		aboutHidden=false;
		locationHidden=true;
	} else if (contactusHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#contactus').removeClass('clicked');
		$('#contactus').addClass('hovereffect');
		$('#about').removeClass('hovereffect');
		$('#about').addClass('clicked');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.contact-us').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#location').attr('disabled', false);
			$('#contactus').attr('disabled', false);
			next();
		});
		aboutHidden=false;
		contactusHidden=true;
	}
})

// LOCATION BUTTON

$('#location').click(function(){
	if(aboutHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#about').addClass('hovereffect');
		$('#about').removeClass('clicked');
		$('#location').addClass('clicked');
		$('#location').removeClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.location').show();
			$('.google').appendTo('.location');
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#about').attr('disabled', false);
			$('#contactus').attr('disabled', false);
			next();
		});
		locationHidden=false;
		aboutHidden=true;
	} else if (contactusHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#contactus').removeClass('clicked');
		$('#contactus').addClass('hovereffect');
		$('#location').addClass('clicked');
		$('#location').removeClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.contact-us').hide()
			$('.location').show();
			$('.google').appendTo('.location');
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#about').attr('disabled', false);
			$('#contactus').attr('disabled', false);
			next();
		});
		locationHidden=false;
		contactusHidden=true;
	}
})

// CONTACT BUTTON

$('#contactus').click(function(){
	if(aboutHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#contactus').addClass('clicked');
		$('#contactus').removeClass('hovereffect');
		$('#about').removeClass('clicked');
		$('#about').addClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.contact-us').show();
			next();
		});	
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#location').attr('disabled', false);
			$('#about').attr('disabled', false);
			next();
		});
		contactusHidden=false;
		aboutHidden=true;
	} else if (locationHidden===false){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
		$('#contactus').addClass('clicked');
		$('#contactus').removeClass('hovereffect');
		$('#location').removeClass('clicked');
		$('#location').addClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.location').hide()
			$('.contact-us').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			$('#location').attr('disabled', false);
			$('#about').attr('disabled', false);
			next();
		});
		contactusHidden=false;
		locationHidden=true;
	}
})



$('.testbtn').click(function(){
	$('.garage-door').slideToggle(1000);
})

})

