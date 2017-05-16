import './blog.sass';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
import createMenu2 from '../../components/menu/menu2';
import libs from '../../libs/libs.js';

var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js')