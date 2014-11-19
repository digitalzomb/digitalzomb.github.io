$(document).ready(function(){
		// Backstretch

var aboutHidden=false;
var locationHidden=true;
var contactusHidden=true;
$('#about').attr('disabled', true);
$('#about').addClass('clicked');

// $.backstretch("./images/road1.jpg");

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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.location').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.contact-us').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.about').hide()
			$('.location').show();
			$('.google').appendTo('.location');
			next();
		});
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.contact-us').hide()
			$('.location').show();
			$('.google').appendTo('.location');
			next();
		});
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.about').hide()
			$('.contact-us').show();
			next();
		});	
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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
		$('.garage-door').slideToggle(1000).queue(function(next){
			$('.location').hide()
			$('.contact-us').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(1000).queue(function(next){
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



// OLD CODE

// $('#about').click(function(){
// 	if(locationHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.location').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.about').delay(1000).slideToggle(1000);
// 		$('#location').attr('disabled', false);
// 		$('#about').attr('disabled', true);
// 		aboutHidden=false;
// 		locationHidden=true;
// 	} else if (contactusHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.contact-us').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.about').delay(1000).slideToggle(1000);
// 		$('#contactus').attr('disabled', false);
// 		$('#about').attr('disabled', true);
// 		aboutHidden=false;
// 		contactusHidden=true;
// 	}
// });


// $('#location').click(function(){
// 	if(aboutHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.about').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.location').delay(1000).slideToggle(1000);
// 		$('#about').attr('disabled', false);
// 		$('#location').attr('disabled', true);
// 		locationHidden=false;
// 		aboutHidden=true;
// 	} else if (contactusHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.contact-us').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.location').delay(1000).slideToggle(1000);
// 		$('#contactus').attr('disabled', false);
// 		$('#location').attr('disabled', true);
// 		locationHidden=false;
// 		contactusHidden=true;
// 	}
// });

// $('#contactus').click(function(){
// 	if(aboutHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.about').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.contact-us').delay(1000).slideToggle(1000);
// 		$('#about').attr('disabled', false);
// 		$('#contactus').attr('disabled', true);
// 		contactusHidden=false;
// 		aboutHidden=true;
// 	} else if (locationHidden===false){
// 		$('.garage-door').slideToggle(1000);
// 		$('.location').slideToggle(1000);
// 		$('.garage-door').slideToggle(1000);
// 		$('.contact-us').delay(1000).slideToggle(1000);
// 		$('#location').attr('disabled', false);
// 		$('#contactus').attr('disabled', true);
// 		contactusHidden=false;
// 		locationHidden=true;
// 	}
// });