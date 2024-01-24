let thisYear = new Date().getFullYear();

document.querySelector(".year").textContent = thisYear;

let countdownDate = new Date(`Dec 31, ${thisYear} 23:59:59`).getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime(),
    dateDiff = countdownDate - dateNow,
    toDays = 1000 * 60 * 60 * 24,
    days = Math.floor(dateDiff / toDays),
    toHours = 1000 * 60 * 60,
    hours = Math.floor((dateDiff % toDays) / toHours),
    toMinutes = 1000 * 60,
    minutes = Math.floor((dateDiff % toHours) / toMinutes),
    toSeconds = 1000,
    seconds = Math.floor((dateDiff % toMinutes) / toSeconds);

  document.querySelector(".days").textContent = belowTenAddZeroTo(days);
  document.querySelector(".hours").textContent = belowTenAddZeroTo(hours);
  document.querySelector(".minutes").textContent = belowTenAddZeroTo(minutes);
  document.querySelector(".seconds").textContent = belowTenAddZeroTo(seconds);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

function belowTenAddZeroTo(val) {
  return val < 10 ? `0${val}` : val;
}
