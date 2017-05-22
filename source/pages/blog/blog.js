import '../../pages/index/main.sass';
import './blog.sass';

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").Animate_css();

import animate from '../../js/animate';
import functions from '../../js/_functions.js';

console.log('in blog.js');

$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");