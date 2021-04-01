var taHTML = '<div id="TA_rated83" class="TA_rated">';
taHTML += '<ul id="ei5kjvA0xtj" class="TA_links SN2ZK5DBaw2F">';
taHTML += '<li id="cfV7nMB" class="zFwLYUCDBGDo">';
taHTML += '<a target="_blank" href="https://www.tripadvisor.co.hu/"><img src="https://www.tripadvisor.co.hu/img/cdsi/img2/badges/ollie-11424-2.gif" alt="TripAdvisor"/></a>';
taHTML += '</li>';
taHTML += '</ul>';
taHTML += '</div>';

$(function(){
	$('[data-toggle="tooltip"]').tooltip();
	
	if ($(window).width() > 575) {
		$("#taBox").append(taHTML);  
	} else {
		$("#taBox-xs").append(taHTML);
	}
 
	$(".myCollapseControl-xs").on('click',function(){
		var aktobjectID=$(this).attr('data-target');
		$(aktobjectID).collapse('toggle');
		$('body,html').animate({scrollTop: $(aktobjectID).offset().top}, 800);
	});

	$(".myCollapseControl").on('click',function(){
		var aktobjectID=$(this).attr('data-target');
		
		$(".myCollapseControl").each(function(){
			var objectID=$(this).attr('data-target');
			if (aktobjectID == objectID) {
				$(objectID).collapse('toggle');
			} else {
				if($(objectID).hasClass('show')) $(objectID).collapse('hide');
			}
		});
		
		$('body,html').animate({scrollTop: $("#offerID").offset().top}, 800);

	});

	jQuery(".dmxHTML5ImageEnhancer").dmxHTML5ImageEnhancer(
		{"border": {"color": "#CFCFCF", "hoverColor": "#BBBBBB", "radius": [5, 5, 5, 5]}, "description": {"bgColor": "#FFF", "bgOpacity": 0.9, "padding": 10, "align": "center", "fontFamily": "'texgyreherosregular', sans-serif", "fontSize": 24, "color": "#34495e", "showAlways": true}, "reflection": {"enabled": true, "distance": 6, "opacity": 0.2}, "filters": ["sepia|1"]}
		
	);

	jQuery("#googleMap").dmxGoogleMaps(
	 {"width": "100%", "height": 520, "dataSource": "", "zoom": 15, "markers": [{"latitude": 47.49027338166171, "longitude": 19.068486392498016, "html": "<h3>Alma & Körte Étterem</h3><i class='fas fa-map-marker-alt'></i>&nbsp;Budapest VIII. Lőrinc Pap tér 3.<br><i class='fas fa-phone'></i>&nbsp;+36306670822, +3617867803<br><i class='fas fa-globe'></i>&nbsp;<a href='https://almaeskorte.hu/'>almaeskorte.hu</a>", "title": "Alma & Körte Étterem", "key": "Alma & Körte Étterem", "popup": true, "icon": {"image": "Media/markerA.png"}}, {"latitude": 47.4979008, "longitude": 19.067101699999967, "html": "<h3>Barack & Szilva Étterem</h3><i class='fas fa-map-marker-alt'></i>&nbsp;Budapest VII. Klauzál u. 13.<br><i class='fas fa-phone'></i>&nbsp;+36302580965, +3617988285<br><i class='fas fa-globe'></i>&nbsp;<a href='https://barackesszilva.hu/'>barackesszilva.hu</a>", "title": "Barack & Szilva Étterem", "key": "Barack & Szilva Étterem", "popup": true, "icon": {"image": "Media/markerB.png"}}], "scrollwheel": false}
   );

	// hide #gotoTop first
	$("#gotoTop").removeClass('d-sm-block');

	// fade in #gotoTop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#gotoTop').fadeIn('slow');
			$('#gotoTop').addClass('d-sm-block');
		} else {
			$('#gotoTop').removeClass('d-sm-block');
		}
	});

	// scroll body to 0px on click
	$("#gotoTop a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$("#gotoBottom a").click(function () {
		$('body,html').animate({scrollTop: $("#offerID").offset().top}, 800);
	});

	$("#verticalMenuArrow").hover(
		function() {$("#verticalMenuBox").collapse('show');$("#verticalMenuArrow").removeClass('d-sm-block');}
	);

	$("#verticalMenuBox").hover(
		function() {}, 
		function() {$("#verticalMenuBox").collapse('hide');$("#verticalMenuArrow").addClass('d-sm-block');}
	);

	$("#verticalMenuBox").click(
		function() {$("#verticalMenuBox").collapse('hide');$("#verticalMenuArrow").addClass('d-sm-block');}
	);

	$("#verticalMenuBox a").click(function () {
		var aktobjectID=$(this).attr('data-target');
		$('html,body').animate({scrollTop:$(aktobjectID).offset().top}, 800);
	});

	$(".info a").click(function () {
		var aktobjectID=$(this).attr('data-target');
		$('html,body').animate({scrollTop:$(aktobjectID).offset().top}, 800);
	});

/* Karácsonyi és szilveszteri menük */
/*
	$(".collapseChristmasNewyear").on('click',function(){
		var aktobjectID=$(this).attr('data-target');
		$(aktobjectID).collapse('toggle');
	});
*/
});
