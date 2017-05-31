import '../../sass/main.sass';
import './index.sass';
import '../../sass/_media.sass';
import '../../pages/index/index.pug';


require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();



import animate from '../../js/animate';
import functions from '../../js/_functions.js';
console.log("проверка dadasda");


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");