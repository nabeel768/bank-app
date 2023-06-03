let password = document.querySelector('.password').value;
const submitButton = document.querySelector('.submit-button');
const container = document.querySelector('.container');
const timeOfDay = document.querySelector('.time-of-day');

let today = new Date();
let currentHour = today.getHours();

if (currentHour < 12) {
  timeOfDay.innerHTML = 'Good Morning, Nabeel';
} else if (currentHour < 18) {
  timeOfDay.innerHTML = 'Good Afternoon, Nabeel';
} else {
  timeOfDay.innerHTML = 'Good Evening, Nabeel';
}

password.addEventListener('onKeyDown', passwordLimit());

function passwordLimit() {
  if (this.value.length == 5) return false;
}

function validate() {
  let password = document.querySelector('.password').value;
  submitButton.addEventListener('click', function () {
    if (password === '12345') {
      (window.location.href = 'bank.html'), false;
    } else {
      document.querySelector('.enter-pin').innerHTML =
        "<span style='color:red'>Incorrect credentials, please try again!";
    }
  });
}
