const billAmountInput = document.getElementById("bill");
const fivePercentButton = document.getElementById("5-percent");
const tenPercentButton = document.getElementById("10-percent");
const fifteenPercentButton = document.getElementById("15-percent");
const tweentyFivePercentButton = document.getElementById("25-percent");
const fiftyPercentButton = document.getElementById("50-percent");
const customPercentInput = document.getElementById("custom");
const numberOfPeopleInput = document.getElementById("number-of-people");
const amountOutputElement = document.getElementById("tip-amount");
const amountPerPersonOutputElement = document.getElementById("amount-per-person");
const resetButton = document.getElementById("reset");

// Event listeners
billAmountInput.addEventListener("change", handleBillAmountInputChange);
resetButton.addEventListener("click", handleResetButtonClick);
customPercentInput.addEventListener("change", handleCustomPercentageInputChange);
fivePercentButton.addEventListener("change", handlePercentButtonChange);
tenPercentButton.addEventListener("change", handlePercentButtonChange);
fifteenPercentButton.addEventListener("change", handlePercentButtonChange);
tweentyFivePercentButton.addEventListener("change", handlePercentButtonChange);
fiftyPercentButton.addEventListener("change", handlePercentButtonChange);
numberOfPeopleInput.addEventListener("change", handleNumberOfPeopleInputChange);

// Event handlers functions
function handleBillAmountInputChange() {
  calculate();
}

function handleResetButtonClick() {
  reset();
}

function handleCustomPercentageInputChange() {
  resetTipButtons();
  calculate();
}

function handlePercentButtonChange() {
  resetCustomPercentage();
  calculate();
}

function handleNumberOfPeopleInputChange() {
  calculate();
}

// Business logic functions
function calculate() {
  let billAmount = billAmountInput.value;
  let numberOfPeople = numberOfPeopleInput.value;
  let tipPercentage = getSelectedTip();

  console.log(billAmount, numberOfPeople, tipPercentage);
  let tipAmountPerPerson = calculateTipAmountPerPerson(billAmount, tipPercentage, numberOfPeople);

  amountOutputElement.innerHTML = tipAmountPerPerson;
}

function calculateTipAmountPerPerson(billAmount, tipPercentageValue, numberOfPeople) {
  return (billAmount * tipPercentageValue) / numberOfPeople;
}

function calculateTotalPerPerson() {}

function getSelectedTip() {
  let selectedRadio = document.querySelector('input[name="tip-amount"]:checked');
  if (selectedRadio != null) {
    return selectedRadio.value / 100;
  } else {
    return customPercentInput.value / 100;
  }
}

function reset() {
  billAmountInput.value = "";
  numberOfPeopleInput.value = "";
  amountOutputElement.innerHTML = "";
  amountPerPersonOutputElement.innerHTML = "";
  resetTipButtons();
  resetCustomPercentage();
}

function resetTipButtons() {
  fivePercentButton.checked = false;
  tenPercentButton.checked = false;
  fifteenPercentButton.checked = false;
  tweentyFivePercentButton.checked = false;
  fiftyPercentButton.checked = false;
}

function resetCustomPercentage() {
  customPercentInput.value = "";
}
