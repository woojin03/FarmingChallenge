const display = document.getElementById('display');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

function updateDisplay() {
  const { hours, minutes, seconds } = time;
  display.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}

function startCountdown() {
  timerInterval = setInterval(() => {
    if (time.seconds > 0) {
      time.seconds--;
    } else {
      if (time.minutes > 0) {
        time.minutes--;
        time.seconds = 59;
      } else {
        if (time.hours > 0) {
          time.hours--;
          time.minutes = 59;
          time.seconds = 59;
        } else {
          stopCountdown();
        }
      }
    }
    updateDisplay();
  }, 1000);

  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;
}

function stopCountdown() {
  clearInterval(timerInterval);
}

function resetCountdown() {
  stopCountdown();
  time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  time.hours = parseInt(hoursInput.value) || 0;
  time.minutes = parseInt(minutesInput.value) || 0;
  time.seconds = parseInt(secondsInput.value) || 0;
  startCountdown();
});

stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);