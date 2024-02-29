const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

let intervalId;
let timeLeft = 60 * 60 * 24; // 1 day in seconds

function updateCountdown() {
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours < 10 ? '0' + hours : hours;
  minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(intervalId);
    alert('Time is up!');
  }
}

startBtn.addEventListener('click', () => {
  intervalId = setInterval(updateCountdown, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  timeLeft = 60 * 60 * 24;
  updateCountdown();
});

updateCountdown();