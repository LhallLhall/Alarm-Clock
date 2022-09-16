function getTime () {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let sec = date.getSeconds()
    
    // find a way to make the clock only show up to 12. reset if it gets passed
    if (hours === 0) {
        hours = 12;  
    } else {
        if (hours > 12) {
            hours = hours - 12;  
        }
    }

document.getElementById('theClock').innerText = hours + ':' + minutes + ':' + sec
setTimeout(getTime,1000);
}
getTime()
