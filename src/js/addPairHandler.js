import refs from "./getRefs";

export function addPairHandler(e) {
  if (e.target.dataset.action !== "add") {
    return;
  }

  const pairToAdd = `<li class="pair-list__item">${refs.inputRef.value}</li>`;
  refs.pairListRef.insertAdjacentHTML("beforeend", pairToAdd);
}
