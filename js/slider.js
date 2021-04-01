function mySliderClass(url) {
	this.url = url;
}

function fillSlider (myArr, myID) {
	var myItem = '<div class="swiper-wrapper">';
	$.each(myArr, function(i, val) {
		myItem += '<div class="swiper-slide" style="background: url(\''+val.url+'\')"></div>';
	});
	myItem += '</div>';

	$("#"+myID).append(myItem);  
}

$(function(){
	fillSlider(myLandingSliderArr, "slider-landingID");
	fillSlider(myOffertoSliderArr, "slider-offertoID");

	var myLandingSwiper = new Swiper ("#slider-landingID", {
		centeredSlides: true,
		speed: 1000,
		effect: 'fade',
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		}
	});
	
	var myOffertoSwiper = new Swiper ("#slider-offertoID", {
		centeredSlides: true,
		speed: 1000,
		effect: 'cube',
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		}
	});
	
})

var myLandingSliderArr = new Array();
myLandingSliderArr.push(new mySliderClass("Media/lp/lp01.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp02.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp03.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp04.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp05.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp06.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp07.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp08.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp09.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp10.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp11.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp12.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp13.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp14.jpg"));
myLandingSliderArr.push(new mySliderClass("Media/lp/lp15.jpg"));

var myOffertoSliderArr = new Array();
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk01.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk02.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk03.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk04.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk05.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk06.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk07.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk08.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk09.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk10.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk11.jpg"));
myOffertoSliderArr.push(new mySliderClass("Media/aandk/aandk12.jpg"));
