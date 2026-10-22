let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let work_minutes = document.getElementById('work_min');
let work_seconds = document.getElementById('work_sec');

let break_minutes = document.getElementById('break_min');
let break_seconds = document.getElementById('break_sec');

let counter = document.getElementById('counter');

//reference timer
let startTimer;
let timeLeft = 25*60; // initial time in seconds

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer(), 1000);
    } else {
        alert('Timer is already running');
    }
});

reset.addEventListener('click', function(){
    clearInterval()
    counter.innerText = 0;
    stopInterval();
    startTimer = undefined;
})

pause.addEventListener('click',function(){
   
});

function timer(){
    //work timer
    if(work_seconds.innerText !== 0){
        work_seconds.innerText--;
        console.log(work_seconds.innerText);
    } else if(work_minutes.innerText !== 0 && work_seconds.innerText === 0){
        work_seconds.innerText = 59;
        work_minutes.innerText--;
        console.log(work_seconds.innerText);
    }

     //Break timer
    if(work_minutes.innerText === 0 && work_seconds === 0){
        if(break_seconds.innerText !== 0){
            break_seconds.innerText--;
        } else if(break_minutes.innerText !== 0 && break_seconds.innerText === 0){
            break_seconds.innerText = 59;
            break_minutes.innerText--;
        }
    }

    //increment counter by 1 when cycle completed
    if(work_minutes.innerText === 0 && work_seconds.innerText === 0 &&
       break_minutes.innerText === 0 && break_seconds.innerText === 0) {
        work_minutes.innerText = 25;
        work_seconds.innerText = Number('00');

        break_minutes.innerText = 5;
        break_seconds.innerText = Number('00');

        counter.innerText++;
       }
} 

function updateDisplay(){
    const work_min = Math.floor(timeLeft/60);
    const work_min = timeLeft % 60;

    work_minutes.innerText = 25;
    work_seconds.innerText = '00';

    break_minutes.innerText = 5;
    break_seconds.innerText = Number('00');


}