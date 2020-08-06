import './simple.css'
import './index.scss'
import echo from './utils/echo'

let str = echo('侬好，上海');
let text = document.createTextNode(str);

let el = document.createElement('div');
el.id = 'app';
el.appendChild(text);

document.body.appendChild(el);
