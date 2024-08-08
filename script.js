const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstNumber = "";

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const value = event.target.innerText;

  if (value >= "0" && value <= "9") {
    currentInput += value;
    display.innerText = currentInput;
  } else if (value === ".") {
    if (!currentInput.includes(".")) {
      currentInput += value;
      display.innerText = currentInput;
    }
  } else if (value === "C") {
    currentInput = "";
    operator = "";
    firstNumber = "";
    display.innerText = "0";
  } else if (value === "%") {
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.innerText = currentInput;
  } else if (["+", "-", "*", "/"].includes(value)) {
    operator = value;
    firstNumber = currentInput;
    currentInput = "";
  } else if (value === "=") {
    if (firstNumber && operator && currentInput) {
      const result = eval(`${firstNumber} ${operator} ${currentInput}`);
      display.innerText = result;
      currentInput = result.toString();
      firstNumber = "";
      operator = "";
    }
  }
}
