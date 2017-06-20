
import '../../sass/main.sass';
import './index.sass';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();
require("../../libs/libs").animate_modal();
require("../../libs/libs").animate_modal_js();

import animate from '../../js/animate';
import common from '../../js/common';
import App from '../../js/react';

$(document).ready( function() {


});

$(window).resize(function() {

});

$(window).scroll(function() {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");