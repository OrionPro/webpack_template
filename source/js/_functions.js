// подключение functions.js

$(function () {

	//SVG Fallback
	// if(!Modernizr.svg) {
	//  $("img[src*='svg']").attr("src", function() {
	//      return $(this).attr("src").replace(".svg", ".png");
	//  });
	// };
});
//изменяется - для плавной обратной анимации animate.css*/
$(window).scroll(function () {
	// для правильной рабоы надо прописать в блок которому присваивается анимация атрибут data-anim="fadeInLeft" с названием анимации
	$('.animated').each(function () {
		var imagePos = $(this).offset().top;
		var imageHght = $(this).outerHeight();
		var topOfWindow = $(window).scrollTop() + 40;
		var heightOfWindow = $(window).height();
		var animName = $(this).data('anim');
		if (!$(this).data('atop')) {
			var animTop = 0.9;
		} else {
			var animTop = $(this).data('atop');
		}
		if (imagePos < topOfWindow + heightOfWindow * animTop && imagePos + imageHght > topOfWindow) {
			$(this).css('visibility', 'visible').addClass(animName);

		} else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
			$(this).css('visibility', 'hidden').removeClass(animName);
		}
	});
});

// Initialize Slidebars
(function ($) {
	var slidebars = require("../libs/slidebars.min.js");
	// Initialize Slidebars
	var controller = new slidebars();
	controller.init();

	// Toggle Slidebars
	$('#nav-button-label').on('click', function (event) {
		// Stop default action and bubbling
		event.stopPropagation();
		event.preventDefault();
		// Toggle the Slidebar with id 'id-1'
		controller.toggle('id-1');
		$("html,body").toggleClass("slidebars");
	});

	// Close Slidebar links
	$('[off-canvas] a').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();

		var url = $(this).attr('href'),
			target = $(this).attr('target') ? $(this).attr('target') : '_self';

		$("#nav-button-label").removeClass("nav-on");
		$("#nav-button-label .nav-line").removeClass("active");
		$("html,body").removeClass("slidebars");
		controller.close(function () {
			window.open(url, target);
		});
	});

	// Add close class to canvas container when Slidebar is opened
	$(controller.events).on('opening', function (event) {
		$('[canvas]').addClass('js-close-any');
	});
	// Add close class to canvas container when Slidebar is opened
	$(controller.events).on('closing', function (event) {
		$('[canvas]').removeClass('js-close-any');
	});
	// Close any
	$(document).on('click', '.js-close-any', function (event) {
		if (controller.getActiveSlidebar()) {
			event.preventDefault();
			event.stopPropagation();
			$("#nav-button-label").removeClass("nav-on");
			$("#nav-button-label .nav-line").removeClass("active");
			$("html,body").removeClass("slidebars");
			controller.close();

		}
	});
})($);

$(document).ready(function () {
	// var MobileDetect = require("mobile-detect");
	var MobileDetect = require("../libs/libs").mobileDetect();
	var md = new MobileDetect(window.navigator.userAgent);

	if (md.userAgent() == "Safari" && md.mobile() == "iPhone" || md.mobile() == "iPad") {
		$("html,body").css("overflow", "hidden !important");
	}


	// Select в модальном окне
	$(document).click(function () {
		$('.slct').removeClass('active');
		$('.slct_arrow').removeClass('active');
		$('.slct').parent().find('.drop').slideUp("fast");
	});
	$('.slct').click(function () {
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');
		//  закрываем все открытые
		$('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if (dropBlock.is(':hidden')) {
			dropBlock.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			$(this).siblings(".slct_arrow").addClass('active');


			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').off("click").click(function () {

				/* Заносим в переменную HTML код элемента
				 списка по которому кликнули */
				var selectResult = $(this).html();

				/* Находим наш скрытый инпут и передаем в него
				 значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);

				/* Передаем значение переменной selectResult в ссылку которая
				 открывает наш выпадающий список и удаляем активность */
				$(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
				$(".slct_arrow").removeClass('active');

				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});

			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			$(".slct_arrow").removeClass('active');
			dropBlock.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
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
	//обработчик кнопки на нажатие btn_mnu
	$("#nav-button-label").click(function (e) {
		e.preventDefault();
		$(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
		$(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
		$(this).find('.nav-line').toggleClass('active');
		$(".mnu_dropdown").toggleClass("active");
	});
	// Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
	$(document).click(function (event) {
		if ($(event.target).closest("#nav-button-label").length)
			return;
		if ($(event.target).closest("[off-canvas]").length)
			return;
		$("#nav-button-label").removeClass("nav-on");
		$("#nav-button-label .nav-line").removeClass("active");

		event.stopPropagation();

	});
	//  Отправка форм

	// initialize tooltipster on text input elements
	$('input:not("[type=submit], [type=hidden], [type=file]")').tooltipster({
		trigger: 'none', // чтобы при ховере и клике не вылетало окошко с ошибкой ставим none. Либо hover/click по надобности
		position: 'bottom',
		theme: 'tooltipster-shadow',
		functionPosition: function (instance, helper, position) {
			position.coord.top -= 10;
			return position;
		}
	});
	$('input[type=file]').tooltipster({
		trigger: 'none', // чтобы при ховере и клике не вылетало окошко с ошибкой ставим none. Либо hover/click по надобности
		position: 'bottom',
		theme: 'tooltipster-shadow',
		functionPosition: function (instance, helper, position) {
			position.coord.top -= 10;
			return position;
		}
	});
	$('textarea').tooltipster({
		trigger: 'none', // чтобы при ховере и клике не вылетало окошко с ошибкой ставим none. Либо hover/click по надобности
		position: 'bottom',
		theme: 'tooltipster-shadow',
		functionPosition: function (instance, helper, position) {
			position.coord.top -= 10;
			return position;
		}
	});
	// Добавляем методы для validator
	$.validator.addMethod( "extension", function( value, element, param, size ) {
		param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif|txt|pdf|docx|doc|xlsx";
		return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
	}, $.validator.format( "Выберите файл с правильным расширением." ) );

	$.validator.addMethod('filesize', function (value, element, param) {
		return this.optional(element) || ((element.files[0].size / 1024).toFixed(0)  <= param)
	}, 'Размер файла не должен превышать 10 мегабайт');

	$.validator.addMethod('customphone', function (value, element) {
		return this.optional(element) || /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/.test(value);
	}, "Введите телефон в правильном формате");

	$.validator.addMethod('customemail', function (value, element) {
		return this.optional(element) || /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/.test(value);
	}, "Введите правильный Email");
	$.each($("form"), function () {
		$(this).validate({
			submit: true,
			errorPlacement: function (error, element) {
				var ele = $(element),
					err = $(error),
					msg = err.text();
				if (msg != null && msg !== "") {
					ele.tooltipster('content', msg);
					ele.tooltipster('show'); //open only if the error message is not blank. By default jquery-validate will return a label with no actual text in it so we have to check the innerHTML.
					$(element).siblings('i').hide('fade');
				}
			},
			success: function (label, element) {
				$(element).tooltipster('hide');
				$(element).tooltipster('close');
				$(element).siblings('i').show('fade');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass).tooltipster('close');
			},
			rules: {
				name: {
					required: true,
				},
				textarea: {
					required: false, // не валидируется
				},
				email: {
					required: true,
					customemail: "customemail"
				},
				phone: {
					required: true,
					customphone: "customphone"
				},
				field: {
					required: true,
					extension: "txt|pdf|docx|doc|xlsx|gif|png|jpeg|jpe|jpg",
					filesize: 10000
				}
			},
			messages: {
				name: {
					required: "Заполните поле"
				},
				textarea: {
					required: "Заполните поле"
				},
				email: {
					required: "Введите свой email"
				},
				phone: {
					required: "Введите свой телефон"
				},
				field: {
					required: "Выберите файл"
				}
			},
			submitHandler: function (form) {
			}
		});
	});
	$("form:not('#form-file')").submit(function () {
		if ($(this).valid()) {
			console.log($(this));
			let self = $(this);
			let data = self.serialize();
			$.ajax({
				type: "POST",
				url: "./mail.php",
				data: data,
				dataType: "json",
				beforeSend: function () { // событие до отправки
					console.log("beforeSend");
					self.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
				},
				success: function (data) {
					if (data['form_type'] == 'modal') {
						$('.dm-modal form').hide();
						$('.dm-modal .close').hide();
						self.trigger('reset');
						$('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
						setTimeout(function () {
							self.parents('.popup').hide("fade", 500);
							$('.dm-modal .close').trigger("click");
							$('.dm-modal .success_mail').removeClass('active');
							$('.dm-modal .input_wrap i').hide();
							$('.dm-modal .close').show("fade", 2000);
							self.find('input[type="submit"]').attr('disabled', false);
							//$("body").css({ "overflow": "inherit", "padding-right": "0" });
						}, 3000);
					}
					if (data['form_type'] == 'normal') { //надо писать в обычных формах <input type="hidden" name="form_type" value="normal">
						self.trigger('reset');
						$('.dm-modal .success_mail').addClass('active');
						$('.popup[data-modal=modal-res]').toggle("fade", 500);
						//$("body").css({ "overflow": "hidden", "padding-right": "17px" });
						setTimeout(function () {
							$('.popup[data-modal=modal-res]').hide("fade", 500);
							$('.dm-modal .success_mail').removeClass('active', 500);
							$('form').find('i').hide();
							self.find('input[type="submit"]').attr('disabled', false);
							//$("body").css({ "overflow": "inherit", "padding-right": "0" });
						}, 3000);
					}
				}
			});
		}
		return false;
	});

//  Отправка форм с файлом вносим input[type=file]
	let files;
	$('input[type=file]').change(function () {
		files = this.files;
		//alert(files);
	});

//  Отправка форм с файлом submit
	$("#form-file").on('submit', function (e) { // перехватываем все при событии отправки
		if ($(this).valid()) {
			var $data = new FormData(),
				form = $(this),
				error = [],
				$inputs = $("#form-file").find('input[type=hidden]'),
				$phone = $("#form-file").find('input[name=phone]'),
				$email = $("#form-file").find('input[name=email]'),
				$name = $("#form-file").find('input[name=name]'),
				$textarea = $("#form-file").find('textarea');

			$.each(files, function (key, value) {
				$data.append(key, value);
			});

			$.each($inputs, function (key, value) {
				$data.append($(this).attr('name'), $(this).val());
			});

			//добавление основных тестовых полей вместо serialize
			$data.append($textarea.attr('name'), $textarea.val());
			$data.append($phone.attr('name'), $phone.val());
			$data.append($email.attr('name'), $email.val());
			$data.append($name.attr('name'), $name.val());

			$.ajax({
				url: './mail.php',
				type: 'POST',
				contentType: false,
				processData: false,
				dataType: 'json',
				data: $data,
				beforeSend: function (loading) {
					$('input[type=file]').tooltipster('content', "Файл загружается");
					$('input[type=file]').tooltipster('show');
				},
				success: function (data) {
					$('.dm-modal .success_mail').addClass('active');
					$('.popup2 .close').hide();
					$('input[type=file]').tooltipster('content', "Файл загружен!");
					$('input[type=file]').tooltipster('show');
					$('.file-load-block input[type=text]').css('color', '#b2d04e');
					$('.popup[data-modal=modal-res]').show().delay(2000).fadeOut(
						function () {
							$('.popup[data-modal=modal-res]').hide("fade", 500);
							form.trigger('reset');
							$('.dm-modal .sucess_mail').addClass('active');
							$("#win2 .close").trigger('click');
							$('.popup2 .close').show();
							$('input[type=file]').tooltipster('hide');
							files = undefined;
						}
					);
				}
			});
		}
		return false;
	});
});

$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");
