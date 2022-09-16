function getTime () {
    // declare variables
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    // find a way to make the clock only show up to 12. reset if it gets passed and add am/pm
    // if (hours === 0) { 
    //     hours = 12; 
    // } else {
    //     if (hours > 12) {
    //         hours = hours - 12;  
    //     }
    // }

    // do I need to update the minutes and seconds??? Answer: yes I do!
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
    setInterval(getTime,1000);
}
getTime()
