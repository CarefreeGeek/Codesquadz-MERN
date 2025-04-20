
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
let ampm;
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const day = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[day];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = monthNames[month - 1];
  const formattedDate = `${dayName}, ${monthName} ${date}, ${year}`;
  if (now.getHours <= 12) {
    ampm = 'AM'
  }
  else{
    ampm = 'PM'
  };
  document.getElementById('date').textContent = formattedDate;
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
  ampmElement.textContent = ampm;
}


setInterval(updateClock, 1000);




btn = document.querySelectorAll('button');



