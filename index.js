let input = document.querySelector("input");

function addValue(elemenyVal) {
  input.value += elemenyVal;
}

function clearVal() {
  input.value = "";
}

function deletetChar() {
  input.value = input.value.slice(0, input.value.length - 1);
}

function evaluateVal() {
  input.value = eval(input.value);
}
