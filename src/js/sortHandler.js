import refs from './getRefs';
import { getPairs } from './getPairs';
import { createMarkupFromPairs } from './createMarkupFromPairs';

const sortByName = (a, b) => a.name.localeCompare(b.name);
const sortByValue = (a, b) => a.value.localeCompare(b.value);

export function sortByNameHandler(e) {
  if (e.target.dataset.sort !== 'name') return;

  const pairs = getPairs();

  const sortedPairs = pairs.sort(sortByName);

  const markup = createMarkupFromPairs(sortedPairs);

  refs.pairListRef.innerHTML = '';
  refs.pairListRef.insertAdjacentHTML('beforeend', markup);
}

export function sortByValueHandler(e) {
  if (e.target.dataset.sort !== 'value') return;

  const pairs = getPairs();

  const sortedPairs = pairs.sort(sortByValue);

  const markup = createMarkupFromPairs(sortedPairs);

  refs.pairListRef.innerHTML = '';
  refs.pairListRef.insertAdjacentHTML('beforeend', markup);
}
