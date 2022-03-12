export function getPairs() {
  const namesRef = document.querySelectorAll('.js-name');
  const valuesRef = document.querySelectorAll('.js-value');

  const names = [];
  namesRef.forEach(name => names.push(name.textContent));
  const values = [];
  valuesRef.forEach(value => values.push(value.textContent));
  const pairs = [];

  for (let i = 0; i < names.length; i += 1) {
    pairs[i] = {
      name: names[i],
      value: values[i],
    };
  }

  return pairs;
}
