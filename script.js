const inputElement = document.getElementById('number');
const outputDiv = document.getElementById('output');
const convertButton = document.getElementById('converter-btn');

const romanNumerals = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];
const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function onConvertButtonClick() {
  const enteredNumber = parseInt(inputElement.value);
  if (!enteredNumber && enteredNumber != 0) {
    outputDiv.textContent = 'Please enter a valid number';
    return;
  } else if (enteredNumber <= 0) {
    outputDiv.textContent = 'Please enter a number greater than or equal to 1.';
    return;
  } else if (enteredNumber >= 4000) {
    outputDiv.textContent = 'Please enter a number less than or equal to 3999';
  } else {
    outputDiv.textContent = convert(enteredNumber);
  }

  console.log(enteredNumber);
}

function convert(number) {
  let convertedNumber = '';
  for (let i = 0; i < arabicNumerals.length; i++) {
    if (number === arabicNumerals[i]) {
      convertedNumber += romanNumerals[i];
      return convertedNumber;
    }
    while (number >= arabicNumerals[i]) {
      convertedNumber += romanNumerals[i];
      number -= arabicNumerals[i];
    }
  }
  return convertedNumber;
}

convertButton.addEventListener('click', onConvertButtonClick);
