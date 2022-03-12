import './sass/main.scss';
import { addPairHandler } from '../src/js/addPairHandler.js';
import { deleteBtnHandler } from '../src/js/deleteBtnHandler';
import { sortByNameHandler, sortByValueHandler } from './js/sortHandler';
import refs from './js/getRefs';

refs.sectionRef.addEventListener('click', e => {
  e.preventDefault();
  addPairHandler(e);
  deleteBtnHandler(e);
  sortByNameHandler(e);
  sortByValueHandler(e);
});
