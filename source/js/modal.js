$(document).ready(function () {
// 	// Открываем модальное окно
	$(".open-popup-link").click(function () {
		let id = $(this).attr('href');
		let txt = $(this).data('info');
		// var title =  $(this).data('title'); // для изменения title в модалке
		$(`.popup${id} input[name=form_name]`).val(txt);
		// $(`.popup${id} h2`).html(title); // прописать в ссылку data-title="нужный title"

		if (window.matchMedia("(min-width: 992px)").matches) {
			$("body").css({"overflow": "hidden", "padding-right": "17px"});
		}
		if (window.matchMedia("(max-width: 992px)").matches) {
			$("body").css({"overflow": "inherit", "padding-right": "0px"});
		}
	});
// // overlay для закрытия
// 	$(".overlay").click(function () {
// 		$(this).parent().hide("fade", 1000);
// 		$("body").css({"overflow": "inherit", "padding-right": "0"});
// 		$(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
// 		$('input:not("[type=submit], [type=hidden]")').removeClass('tooltipster-show').tooltipster('close');
// 	});
// // закрываем модальное окно на крестик
// 	$(".popup .close").click(function (e) {
// 		e.preventDefault();
// 		$(this).parents(".popup").hide("fade", 1000);
// 		$("body").css({"overflow": "inherit", "padding-right": "0"});
// 		$(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
// 		$('input:not("[type=submit], [type=hidden]")').removeClass('tooltipster-show').tooltipster('close');
// 	});
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 10,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function () {
				$('.white-popup i').hide();
				$("body").css({"overflow": "inherit", "padding-right": "0"});
				$('input:not("[type=submit], [type=hidden]")').removeClass('tooltipster-show').tooltipster('close');
				// Это код закрытия эффекта красивого при открытии и закрытии модалки
				$(".cd-transition-layer").addClass("closing"), $("#popup").removeClass("visible"), $(".cd-transition-layer").children().one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
					$(".cd-transition-layer").removeClass("closing opening visible"), $(".cd-transition-layer").children().off("webkitAnimationEnd oanimationend msAnimationEnd animationend")
				})
			}
		},
		closeOnBgClick: true,
		closeOnContentClick: false
	});
})
;
