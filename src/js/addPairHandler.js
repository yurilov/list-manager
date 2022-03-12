import refs from './getRefs';

export function addPairHandler(e) {
  if (e.target.dataset.action !== 'add') {
    return;
  }
  const value = refs.inputRef.value;
  const splittedValue = value.split('=');
  const pair = {
    name: splittedValue[0].trim(),
    value: splittedValue[1].trim(),
  };

  const pairToAdd = `<li class="pair-list__item">
  <span class="js-name">${pair.name}</span>
  =
  <span class="js-value">${pair.value}</span>
  </li>`;
  refs.pairListRef.insertAdjacentHTML('beforeend', pairToAdd);
  refs.inputRef.value = '';
}
