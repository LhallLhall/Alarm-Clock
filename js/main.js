function getTime () {
    // declare variables
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let sec = date.getSeconds()
    
    // find a way to make the clock only show up to 12. reset if it gets passed
    if (hours === 0) { // this checks to see if the hours equal 0
        hours = 12;  // if the hours are equal to 0 
    } else {
        if (hours > 12) {
            hours = hours - 12;  
        }
    }
    // do I need to update the minutes and seconds???
    
    let todaysDate = new Date();
    let day = todaysDate.getDay();
    let month = todaysDate.getMonth();
    let year = todaysDate.getFullYear();
    document.getElementById('theDate').innerText = month + "." + day + "." + year

    document.getElementById('theClock').innerText = hours + ':' + minutes + ':' + sec
    setInterval(getTime,1000);
}
getTime()
