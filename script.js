let result = '0';

function clearResult() {
  result = '0';
  document.getElementById('result').innerText = result;
}

function appendToResult(value) {
  if (result === '0') {
    result = value;
  } else {
    result += value;
  }
  document.getElementById('result').innerText = result;
}

function calculateResult() {
  result = eval(result);
  document.getElementById('result').innerText = result;
}
