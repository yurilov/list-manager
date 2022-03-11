import './sass/main.scss';
import { addPairHandler } from '../src/js/addPairHandler.js';
import refs from './js/getRefs';
console.log(refs.inputRef);
window.addEventListener('click', e => {
  e.preventDefault();
  addPairHandler(e);
});
