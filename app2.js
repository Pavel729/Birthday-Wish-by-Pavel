const timeLeft = document.getElementById('time-left');
const birthday = new Date('10/23/2021');
const sec = 1000;
const min = sec*60;
const hour = min*60;
const day = hour*24;
let timerId


function countDown(){
    const today = new Date();
    const timeSpan = (birthday - today);
    console.log(timeSpan);

    if (timeSpan <= -day){
        timeLeft.innerHTML = "Hope You had a great time !";
        clearInterval(timerId);
        return;
    }

    else if (timeSpan <= 0){
        timeLeft.innerHTML = "<span>Happy</span> <span>Birthday</span> <span>Richi</span> <span>!!!</span> ";
        clearInterval(timerId);
        return;
    };

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day)/hour);
    const mins = Math.floor((timeSpan % hour)/min);
    const secs = Math.floor((timeSpan % min)/sec);

    timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + mins + ' minutes ' + secs + " seconds ";
};

timerId = setInterval(countDown,sec);

console.log(birthday);