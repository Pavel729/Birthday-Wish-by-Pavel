const timeLeft = document.getElementById('time-left');
const code = document.getElementById('code');
const birthday = new Date('10/23/2021');
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
const month = day * 12;
const year = day * 365;
let timerId


function countDown() {
    const today = new Date();
    const timeSpan = (birthday - today);

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day)/hour);
    const mins = Math.floor((timeSpan % hour)/min);
    const secs = Math.floor((timeSpan % min)/sec);

    timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + mins + ' minutes ' + secs + " seconds ";

    // age calculate
    var dob = new Date("10/02/2002");
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    code.innerHTML = "You are " + age + " years old";

    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice Birthday !";
        clearInterval(timerId);
        clearInterval(timep);
        return;
    }

    else if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday <p >Himel</p>!!!";
        clearInterval(timerId);
        clearInterval(timep);
        return;
    };
};

timerId = setInterval(countDown, sec);

console.log(birthday);




