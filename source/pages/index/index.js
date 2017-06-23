
import '../../sass/main.sass';
import './index.sass';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();
require("../../libs/libs").animate_modal();
require("../../libs/libs").animate_modal_js();
require("../../libs/libs").tooltipster_follower();
require("../../libs/libs").tooltipster_follower_css();
require("../../libs/libs").tooltipster();
require("../../libs/libs").jqueryValidation();
require("../../libs/libs").tooltipster_main_css();
require("../../libs/libs").tooltipster_bundle_css();

import animate from '../../js/animate';
import common from '../../js/common';
import App from '../../js/react';

$(document).ready( function() {
	$(".header_modal a").tooltipster({
		plugins: ['follower'],
		theme:  'tooltipster-shadow'
	});
	$(".header_logo a").tooltipster({
		theme:  'tooltipster-light'
	});
});

$(window).resize(function() {

});

$(window).scroll(function() {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");