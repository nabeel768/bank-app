let withdrawBtn = document.querySelector('#withdraw-btn');
let depositBtn = document.querySelector('#deposit-btn');
let withdrawAmount = document.querySelector('#withdraw-amount');
let depositAmount = document.querySelector('#deposit-amount');
let currentBalance = document.querySelector('#current-balance');
let currentDeposit = document.querySelector('#current-deposit');

// depositBtn.addEventListener('click', function(){
// let totalBalance= depositAmount+currentBalanceValue
// console.log(totalBalance);})

// currentBalance.innerHTML=`${currentBalanceValue}`

// const updateBalance = depositAmount.addEventListener('input', function () {
// 	let value=depositAmount.value
//   let valueAsNumber=parseFloat(depositAmount.value)
//   currentBalance.innerHTML=valueAsNumber
// });

const totalBalance = depositBtn.addEventListener('click', function () {
  let value = depositAmount.value;
  let valueAsNumber = parseFloat(depositAmount.value);
  currentBalance.innerHTML = valueAsNumber;
});



depositBtn.addEventListener('click', function () {
  let value = depositAmount.value;
  let valueAsNumber = parseFloat(depositAmount.value);
  currentDeposit.innerHTML = valueAsNumber;
});
