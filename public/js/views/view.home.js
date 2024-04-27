/*
Name: 			View - Home
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.9.3
*/

(function($) {

	'use strict';

	/*
	Move Cloud
	*/
	if ($('.cloud').get(0)) {
		var moveCloud = function() {
			$('.cloud').animate({
				'top': '+=20px'
			}, 3000, 'linear', function() {
				$('.cloud').animate({
					'top': '-=20px'
				}, 3000, 'linear', function() {
					moveCloud();
				});
			});
		};

		moveCloud();
	}

}).apply(this, [jQuery]);
