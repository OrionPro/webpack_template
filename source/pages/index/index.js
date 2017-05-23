import '../../sass/main.sass';
import './index.sass';

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();



import animate from '../../js/animate';
import functions from '../../js/_functions.js';


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");