// BEGIN
// set the variables for the alarm and event listeners
// global variables
let alarmMultiplier = .25
let alarmStatus = false
let alarmTime = null
let setAlarmBtn = document.getElementById("setAlarm");
let resetAlarmBtn = document.getElementById("resetAlarm");

// create a funciton that will set the alarm time = now + 5 min in the future
setAlarmBtn.addEventListener('click', () => {
    alert("A 15 second alarm has started!")
    let date = new Date()
    alarmTime = new Date(date.getTime() + alarmMultiplier*60000);
    toggleAlarmStatus()
});

resetAlarmBtn.addEventListener('click', () => {
    alarmTime = null;
    hideAlarm();
    toggleAlarmStatus();
});

// define updateClock to run each second
function updateClock () {
    // declare variables
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    
    // every second check the alarmStatus
    // if the alarmStatus is on, check the time for the alarm
    // if the alarmTime is less than now, show the alarm
    if(alarmStatus) {
        if(checkAlarm(now)){
            showAlarm();
        }
    }

    // find a way to make the clock only show up to 12. reset if it gets passed and add am/pm

    // do I need to update the minutes and seconds??? Answer: yes I do!
    if (hours < 10){ 
        hours = "0" + hours
    }
    if (minutes < 10){ 
        minutes = "0" + minutes
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }

    let todaysDate = new Date();
    let day = todaysDate.getDay();
    let month = todaysDate.getMonth();
    let year = todaysDate.getFullYear();
    document.getElementById('theDate').innerText = month + "." + day + "." + year

    let theTime = hours + ':' + minutes + ':' + seconds + " "
    if(hours > 11){
        theTime += "PM"
    } else {
        theTime += "AM"
    }

    document.getElementById('theClock').innerText = theTime
}


// create a funciton to turn the alarm on or off
function toggleAlarmStatus () {
    alarmStatus = !alarmStatus; // this sets the alarmStatus to it's opposite
    if(alarmStatus){
        setAlarmBtn.innerText = "Alarm Set";
    } else {
        setAlarmBtn.innerText = "Set Alarm";
    }
}
// create a function to check the alarm and return true if the alarmTime is <= now
function checkAlarm (now) {
    return alarmTime.getTime() <= now.getTime(); // returns true or false
}

function showAlarm (){
    var text = document.getElementById('theClock');
    text.classList.add('alarmOn');
    text.classList.remove("alarmOff");
}

function hideAlarm (){
    var text = document.getElementById('theClock');
    text.classList.remove('alarmOn');
    text.classList.add("alarmOff");
}

setInterval(updateClock,1000);  // update every second


// END