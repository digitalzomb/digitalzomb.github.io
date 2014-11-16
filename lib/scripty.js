$(document).ready(function(){
		// Backstretch

var aboutHidden=false;
var locationHidden=true;
var contactusHidden=true;

$.backstretch("./images/road1.jpg");

$('#about').click(function(){
	if(locationHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.location').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.about').delay(1000).slideToggle(1000);
		$('#location').attr('disabled', false);
		$('#about').attr('disabled', true);
		aboutHidden=false;
		locationHidden=true;
	} else if (contactusHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.contact-us').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.about').delay(1000).slideToggle(1000);
		$('#contactus').attr('disabled', false);
		$('#about').attr('disabled', true);
		aboutHidden=false;
		contactusHidden=true;
	}
});

$('#location').click(function(){
	if(aboutHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.about').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.location').delay(1000).slideToggle(1000);
		$('#about').attr('disabled', false);
		$('#location').attr('disabled', true);
		locationHidden=false;
		aboutHidden=true;
	} else if (contactusHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.contact-us').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.location').delay(1000).slideToggle(1000);
		$('#contactus').attr('disabled', false);
		$('#location').attr('disabled', true);
		locationHidden=false;
		contactusHidden=true;
	}
});

$('#contactus').click(function(){
	if(aboutHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.about').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.contact-us').delay(1000).slideToggle(1000);
		$('#about').attr('disabled', false);
		$('#contactus').attr('disabled', true);
		contactusHidden=false;
		aboutHidden=true;
	} else if (locationHidden===false){
		$('.garage-door').slideToggle(1000);
		$('.location').slideToggle(1000);
		$('.garage-door').slideToggle(1000);
		$('.contact-us').delay(1000).slideToggle(1000);
		$('#location').attr('disabled', false);
		$('#contactus').attr('disabled', true);
		contactusHidden=false;
		locationHidden=true;
	}
});

})



// // notes for garage door
// button click variables for each click

// sets true for current and false for others
// highlight buttonp
// animates sliding door down
// 	changes back to clicked button
// door slides backup with new info