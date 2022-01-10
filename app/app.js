const classicClock = document.querySelector(".classic-clock");
const digitalClock = document.querySelector('.digital-clock');
const secondHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const changeButton = document.querySelector('.change-button');

let classiClock = true;

function setSeconds() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = currentDate.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = currentDate.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    console.log(seconds)
}

let intervalClock = null;

changeButton.addEventListener('click', () => {

    if (
        classiClock
    )
    {
        classiClock = false;
        startDigitalClock();
        clearInterval(intervalClassicClock);
        clearInterval(intervalClock)
        intervalClock = setInterval(getDigitalClock, 1000);
    }
    else 
    {
        classiClock = true;
        startClassicClock();
        clearInterval(intervalClock);
        intervalClock = setInterval(setSeconds, 1000);
    }
})

function startClassicClock() {
    document.querySelector('.main').style.marginTop = '-1.5em';
    classicClock.style.display = 'block';
    digitalClock.style.display = 'none';
    changeButton.innerText = "change to digital clock";
}

function startDigitalClock() {
    document.querySelector('.main').style.marginTop = '5em';
    classicClock.style.display = 'none';
    digitalClock.style.display = 'block';
    changeButton.innerText = "change to classic clock";
}

function getDigitalClock() {
    digitalClock.innerText = new Date().toLocaleTimeString();
    console.log('hola');
}

let type = classiClock ? setSeconds :  getDigitalClock;

let intervalClassicClock = setInterval(setSeconds, 1000);