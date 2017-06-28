import common from '../../js/common';

import './index.sass';
import animate from '../../js/animate';
import App from '../../js/react';


$(document).ready(function () {
	// пример анимации через библиотечку animat (но лучше анимировать через GSAP)
	$('.our_advantages h2').animated("fadeInUp");
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
		//minimumResultsForSearch: -1, // выключам поле ввода поиска
		tags: false,
		width: null
	});
	$(".select2-tags").select2({
		tags: true,
		placeholder: "Выберите один или несколько тегов",
		width: null // если null то будет шириной родителя
	});

});

$(window).resize(function () {

});

$(window).scroll(function () {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");