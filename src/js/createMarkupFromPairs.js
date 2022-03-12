export function createMarkupFromPairs(pairs) {
  return pairs
    .map(item => {
      return `<li class="pair-list__item">
    <span class="js-name">${item.name}</span>
    =
    <span class="js-value">${item.value}</span>
    </li>`;
    })
    .join('');
}
