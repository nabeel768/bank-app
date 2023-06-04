let withdrawBtn = document.querySelector('#withdraw-btn');
let depositBtn = document.querySelector('#deposit-btn');
let withdrawAmount = document.querySelector('#withdraw-amount');
let depositAmount = document.querySelector('#deposit-amount');
let currentBalance = document.querySelector('#current-balance');
let currentDeposit = document.querySelector('#current-deposit');
let currentWithdraw = document.querySelector('#current-withdraw');

depositBtn.addEventListener('click', function () {
  let value = depositAmount.value;
  let valueAsNumber = parseFloat(depositAmount.value);
  currentBalance.innerHTML = valueAsNumber;
  depositAmount.value = '';
});

depositBtn.addEventListener('click', function () {
  let value = depositAmount.value;
  let valueAsNumber = parseFloat(depositAmount.value);
  currentDeposit.innerHTML = valueAsNumber;
});

withdrawBtn.addEventListener('click', function () {
  let value = depositAmount.value;
  let valueAsNumber = parseFloat(withdrawAmount.value);
  currentWithdraw.innerHTML = -valueAsNumber;
});
