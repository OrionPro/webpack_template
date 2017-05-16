import './index.sass';
import 'normalize.css';


import createMenu from '../../components/menu/menu';
import createMenu from '../../components/menu/menu';
import animate from '../../pages/index/animate';
import libs from '../../libs/libs.js';

const menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");