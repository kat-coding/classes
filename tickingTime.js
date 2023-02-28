/*
Katherine Watkins
02/28/2023
JS 8

Ticking Time-
html file has div with id="clock"
using JS display current hours, minutes, and seconds
 */

//clock function gets time string from date then displays it in the clockDiv at 1 second intervals
function clock(){
    const clockDiv = document.getElementById("clock");
    return setInterval(()=>{
        let date = new Date();
        let time = date.toLocaleTimeString()
        clockDiv.textContent = time;
    }, 1000);
}
clock();