function includeJS(x) {
	"use strict";
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", x);
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

function removeJS(x) {
	"use strict";
	var scripts = document.getElementsByTagName('script'), fileref, i;
	for (i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute("src") === x) {
			fileref = scripts[i];
			document.getElementsByTagName("head")[0].removeChild(fileref);
			break;
		}
	}
}

var rules_light_box_flag = 0;
var player1Name = document.getElementById('player-name1').value;
var player2Name = document.getElementById('player-name2').value;
var player2Flag = 0;

function setGameOptions() {
	"use strict";

	player1Name = document.getElementById('player-name1').value;
	if (player1Name.length === 0) {
		player1Name = "Player1";
	}

	player2Name = document.getElementById('player-name2').value;
	if (player2Name.length === 0) {

		player2Name = "Player2";

	}

	document.getElementById('player1').innerHTML = player1Name;
	document.getElementById('player2').innerHTML = player2Name;
	$('#game-options').fadeOut(200);
}

function viewRules() {
	"use strict";

	if (rules_light_box_flag === 0) {
		$("#rules-lightbox").css('display', 'block');
		rules_light_box_flag = 1;
		$('#wrapper').addClass('blur-back');
	}
}

function hideRules() {
	"use strict";

	if (rules_light_box_flag === 1) {
		$("#rules-lightbox").fadeOut(100);
		rules_light_box_flag = 0;
		$('#wrapper').removeClass('blur-back');
	}
}

$(document).ready(function () {
	"use strict";

	includeJS('js/multiplayer.js');
	player2Flag = 2;
	$('#player-name2').fadeIn(100);
	var dynamicHeight = window.outerHeight;

	$('#game-options').css("height", dynamicHeight + 'px');

	$(document).keyup(function (e) {
		if (e.keyCode === 27 && rules_light_box_flag === 1) { //Esc Key
			$("#rules-lightbox").fadeOut(100);
			rules_light_box_flag = 0;
			$('#wrapper').removeClass('blur-back');
		}
	});
});
