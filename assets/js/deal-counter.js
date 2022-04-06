/*---------- Deal Countdown ----------*/

let futureCountdown = new Date("dec 31, 2022 00:00:00").getTime();

function countDown(){
    let now = new Date().getTime();
    gap = futureCountdown - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hours);
    let m = Math.floor((gap % hours) / minutes);
    let s = Math.floor((gap % minutes) / seconds);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

setInterval(countDown, 1000);