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
    alarmTime = new Date(date.getTime() + alarmMultiplier*60000); //takes an integer and multiplies it by 60 thousand milliseconds to get a time in  the future
    toggleAlarmStatus() //this function sets it from false to true so it can
});
// use an event listener to reset all of the "set alarm" actions
resetAlarmBtn.addEventListener('click', () => { 
    alarmTime = null; //puts the alarm time back to it's original state
    hideAlarm(); //runs a function that adds a different class to theClock
    toggleAlarmStatus(); //runs this function again to switch it back to false
});

// define updateClock to run each second
function updateClock () {
    // declare local variables
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    // take a div then apply the month day year to it so it shows the date
    document.getElementById('theDate').innerText = month + "." + day + "." + year
    
    // every second check the alarmStatus
    // if the alarmStatus is on, check the time for the alarm
    // if the alarmTime is less than now, show the alarm
    if(alarmStatus) {
        if(checkAlarm(now)){ 
            showAlarm();
        }
    }

    // when the hour, minute, and second is less than ten make sure it looks like 00 instead of 0
    // if the minutes are less than 10 concatonate a string with itself
    if (hours < 10){ 
        hours = "0" + hours
    }
    if (minutes < 10){ 
        minutes = "0" + minutes
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }

    // if the hours are less than 11 take hours, minutes, and seconds and add either PM for true and AM for false
    let theTime = hours + ':' + minutes + ':' + seconds + " "
    if(hours > 11){
        theTime += "PM"
    } else {
        theTime += "AM"
    }
    // apply the hours, minutes, seconds to a div where they will be put on the page
    document.getElementById('theClock').innerText = theTime
}


// create a funciton to turn the alarm on or off
function toggleAlarmStatus () {
    alarmStatus = !alarmStatus; // this sets the alarmStatus to it's opposite
    if(alarmStatus){
        setAlarmBtn.innerText = "Alarm Set"; //changes the button text whenever the alarm status turns true because of the event
    } else {
        setAlarmBtn.innerText = "Set Alarm"; //if the alarm status is still false is keeps the button text the same.
    }
}
// create a function to check the alarm and return true if the alarmTime is <= now
function checkAlarm (now) {
    return alarmTime.getTime() <= now.getTime(); // returns true or false
}
// when checkAlarm is now true it will run showAlarm
// when showAlarm runs it takes the div where the time is posted and puts a class on it that makes the text turn red
function showAlarm (){
    var text = document.getElementById('theClock'); //gets the div and the text inside
    text.classList.add('alarmOn'); //adds a styling class to the div to make it turn red
    text.classList.remove("alarmOff"); //takes off the original class so it doesn't conflict with the other
}

// when a reset button is hit it takes away all previous changes to the alarm/clock
function hideAlarm (){
    var text = document.getElementById('theClock'); //grabs the div with the clock inside of it
    text.classList.remove('alarmOn'); //takes away the class that makes the text red
    text.classList.add("alarmOff"); //adds the original class that displays black text
}

setInterval(updateClock,1000);  // update every second


// END