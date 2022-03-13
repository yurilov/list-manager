import refs from './getRefs';
import { getPairs } from './getPairs';

export function showAsXMLHandler(e) {
  toggleModal();

  const pairs = getPairs();
  const XMLMarkup = createXMLMarkup(pairs);
  refs.xmlOutputRef.innerHTML = XMLMarkup;
}

function createXMLMarkup(pairs) {
  return pairs
    .map(pair => {
      const xml = `
      &lt;pair&gt;
        &lt;name&gt;${pair.name}&lt;/name&gt;
        &lt;value&gt;${pair.value}&lt;/value&gt;
      &lt;/pair&gt;`;
      return `
            <p>
                <pre>${xml}</pre>
            </p>`;
    })
    .join('');
}

export function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
