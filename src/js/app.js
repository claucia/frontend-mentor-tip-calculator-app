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
  let billAmount = getBillAmount();
  let numberOfPeople = getNumberOfPeople();
  let tipPercentage = getSelectedTip();

  console.log("Bill: " + billAmount, "Number of people: " + numberOfPeople, "Tip percentage: " + tipPercentage);

  if (numberOfPeople === 0) {
    console.log("won't do anything");
    displayResults(0, 0);
    return;
  }

  let tipAmountPerPerson = calculateTipAmountPerPerson(billAmount, tipPercentage, numberOfPeople);
  let totalAmountPerPerson = calculateTotalPerPerson(billAmount, tipAmountPerPerson, numberOfPeople);
  displayResults(tipAmountPerPerson, totalAmountPerPerson);
}

function calculateTipAmountPerPerson(billAmount, tipPercentageValue, numberOfPeople) {
  return (billAmount * tipPercentageValue) / numberOfPeople;
}

function calculateTotalPerPerson(billAmount, tipAmountPerPerson, numberOfPeople) {
  return billAmount / numberOfPeople + tipAmountPerPerson;
}

function displayResults(tipAmountPerPerson, totalAmountPerPerson) {
  amountOutputElement.innerHTML = tipAmountPerPerson;
  amountPerPersonOutputElement.innerHTML = totalAmountPerPerson;
}

function getSelectedTip() {
  let selectedRadio = document.querySelector('input[name="tip-amount"]:checked');
  if (selectedRadio != null) {
    return selectedRadio.value / 100;
  } else if (customPercentInput.value) {
    return customPercentInput.value / 100;
  } else {
    return 0;
  }
}

function getNumberOfPeople() {
  if (numberOfPeopleInput.value) {
    return numberOfPeopleInput.value;
  } else {
    return 0;
  }
}

function getBillAmount() {
  if (billAmountInput.value) {
    return billAmountInput.value;
  } else {
    return 0;
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
