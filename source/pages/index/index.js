import common from '../../js/common';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать

import './index.sass';
import animate from '../../js/animate';
import App from '../../js/react';


$(document).ready(function () {
	// инициализация tooltipster
	$(".header_modal a").tooltipster({
		plugins: ['follower'],
		theme: 'tooltipster-shadow'
	});
	$(".header_logo a").tooltipster({
		theme: 'tooltipster-light'
	});
	// инициализация select2
	$(".select2").select2({
		tags: false
	});
	$(".select2-tags").select2({
		tags: true
	});
});

$(window).resize(function () {

});

$(window).scroll(function () {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");