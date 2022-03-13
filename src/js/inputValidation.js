export function validateInput(value) {
  try {
    const splittedValue = value.split('=');
    if (splittedValue.length !== 2) {
      throw new Error();
    }
    const pair = {
      name: splittedValue[0].trim(),
      value: splittedValue[1].trim(),
    };

    return pair;
  } catch (error) {
    alert('Please enter in <name> = <value> format');
  }
}
