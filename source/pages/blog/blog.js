import '../../sass/main.sass';
import './blog.sass';

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();

import animate from '../../js/animate_blog';
import functions from '../../js/_functions.js';
import common from '../../js/common';

console.log('in blog.js');

$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");