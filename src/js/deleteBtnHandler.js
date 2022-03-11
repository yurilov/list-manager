import refs from './getRefs';

export function deleteBtnHandler(e) {
  if (e.target.dataset.action !== 'delete') {
    return;
  }

  refs.pairListRef.innerHTML = '';
}
