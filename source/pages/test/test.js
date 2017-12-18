// Страница тест сделана чтобы показать как можно кидая всё в main css и в index js делать дополнительную страницу с одинаковыми js и css файлами на выходе. Hо для этого надо убрать из webpack.config.js CommonsChunkPlugin. Ещё хочу заметить, что если мы хотим чтобы обновлялись при изменениях новые pug страницы, мы должны импорты новых страниц писать в index ибо это есть наша точка входа.

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