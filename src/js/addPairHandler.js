import refs from './getRefs';
import { validateInput } from './inputValidation';
import { createMarkup } from './createMarkupFromPairs';

export function addPairHandler(e) {
  if (e.target.dataset.action !== 'add') {
    return;
  }

  const value = refs.inputRef.value;
  const pair = validateInput(value);
  refs.inputRef.value = '';

  if (!pair) return;

  const pairToAdd = createMarkup(pair);
  refs.pairListRef.insertAdjacentHTML('beforeend', pairToAdd);
}
