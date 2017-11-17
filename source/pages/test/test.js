// Страница тест сделана чтобы показать как можно кидая всё в main css и в index js делать дополнительную страницу с одинаковыми js и css файлами на выходе. Hо для этого надо убрать из webpack.config.js CommonsChunkPlugin

import common from '../../js/common';

$(document).ready( function() {

	$("body").addClass("blog extinguisher-transition");
});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);