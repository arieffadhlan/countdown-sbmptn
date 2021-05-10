let cd = document.querySelector(".countdown");
let timeout = document.querySelector(".timeout");
let days = document.querySelector(".day");
let hours = document.querySelector(".hour"); 
let minutes = document.querySelector(".minute"); 
let seconds = document.querySelector(".second"); 

const countDate = new Date('June 14, 2021 15:00:00').getTime();

var countdown = setInterval(function() {
     const now = new Date().getTime();
     const gap = countDate - now;

     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day = hour * 24;

     const textDay = Math.floor(gap / day);
     const textHour = Math.floor((gap % day) / hour);
     const textMinute = Math.floor((gap % hour) / minute);
     const textSecond = Math.floor((gap % minute) / second);

     days.innerText = textDay;
     hours.innerText = textHour;
     minutes.innerText = textMinute;
     seconds.innerText = textSecond;

     if (gap < 0) {
          clearInterval(countdown);

          cd.style.display = "none";
          timeout.style.display = "flex";
     }
}, 1000);
