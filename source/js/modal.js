$(document).ready(function () {
	// Открываем модальное окно
	$(".modal").click(function (e) {
		e.preventDefault();
		var id = $(this).data('modal');
		var txt = $(this).data('info');
		// var title =  $(this).data('title'); // для изменения title в модалке
		$(".popup[data-modal=" + id + "]").toggle("fade", 1500).find("form").css('display', 'block');
		$(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
		// $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

		if (window.matchMedia("(min-width: 992px)").matches) {
			$("body").css({"overflow": "hidden", "padding-right": "17px"});
		}
		if (window.matchMedia("(max-width: 992px)").matches) {

			$("body").css({"overflow": "hidden", "padding-right": "0px"});
		}
	});
// overlay для закрытия
	$(".overlay").click(function () {
		$(this).parent().hide("fade", 1000);
		$("body").css({"overflow": "inherit", "padding-right": "0"});
		$(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
		$('input:not("[type=submit], [type=hidden]")').removeClass('tooltipster-show').tooltipster('close');
	});
// закрываем модальное окно на крестик
	$(".popup .close").click(function (e) {
		e.preventDefault();
		$(this).parents(".popup").hide("fade", 1000);
		$("body").css({"overflow": "inherit", "padding-right": "0"});
		$(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
		$('input:not("[type=submit], [type=hidden]")').removeClass('tooltipster-show').tooltipster('close');
	});
});
