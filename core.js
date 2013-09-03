jQuery(document).ready(function() {
	jQuery(document).on('click', '.toggle', function() {
		jQuery(this).fadeOut(200);
		jQuery('#menu').delay(200).fadeIn(200);
	});
	jQuery(document).on('click', '.close', function() {
		jQuery('#menu').fadeOut(200);
		jQuery('.toggle').delay(200).fadeIn(200);
	});
	jQuery(document).on('click', '.nav ul li a', function() {
		jQuery('#menu').slideUp(200);
		jQuery('.toggle').delay(200).fadeIn(200);
	});
	function switchScheme() {
		var lastColor = jQuery.cookie('lastColor');
		var linkcolor = new Array("#504a8a", "#59b552", "#5191d8", "#dd4a38", "#3aaea9", "#2a437f", "#d35400", "rgb(245, 188, 51)", "#7d7ad2", "#37a686");
		var link = linkcolor[Math.floor(Math.random() * linkcolor.length)];
		if (lastColor == null) {
			link = "#39aea9";
		}
		if (lastColor === link) {
			switchScheme();
		} else {
			jQuery("#title").css('color', link);
			jQuery('.nav ul li a').css('background', link);
			jQuery('.nav ul li a').css('color', '#ffffff');
			jQuery.cookie('lastColor', link, 0.0104167);
		}
	}

	switchScheme();
	jQuery('#title').addClass('lightSpeedIn animated');
	jQuery('.intro').typer(['Full stack web designer & developer <br> from Ahmedabad, India.', 'Hand Craft pixel perfect & user-friendly interfaces.', 'Write sensible and efficient code.']);
	//Heights
	function setHeight() {
		var windowWidth = jQuery(window).width();
		if (windowWidth < 601) {
			jQuery('.content').height(jQuery(window).height() + 200);
		} else {
			jQuery('.content').height('auto');
		}
	}

	setHeight();
	jQuery(window).resize(function() {
		setHeight();
	});
});
