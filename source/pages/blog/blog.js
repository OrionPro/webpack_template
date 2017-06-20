import '../../sass/main.sass';
import './blog.sass';

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();
require("../../libs/libs").animate_modal();
require("../../libs/libs").animate_modal_js();

import animate from '../../js/animate_blog';
import common from '../../js/common';

console.log('in blog.js');

$(document).ready( function() {


});

$(window).resize(function() {

});

$(window).scroll(function() {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");