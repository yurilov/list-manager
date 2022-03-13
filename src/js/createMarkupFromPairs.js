export function createMarkupFromPairs(pairs) {
  return pairs.map(createMarkup).join('');
}

export function createMarkup(pair) {
  return `<li class="pair-list__item">
    <span class="js-name">${pair.name}</span>=<span class="js-value">${pair.value}</span>
    </li>`;
}
