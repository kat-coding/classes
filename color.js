/*
Katherine Watkins
SDEV 328
JS 10
Dynamic Colors
 */

function changeColor(color){
    return function()
    {
        document.body.style.backgroundColor = color;
    };
}
const bgColorBlue = changeColor('#4dd2ff');
const bgColorRed = changeColor('#ff4d4d');
const bgColorYellow = changeColor('#ffffb3');
document.querySelector("#btnBlue").addEventListener("click", bgColorBlue);
document.querySelector("#btnRed").addEventListener("click", bgColorRed);
document.querySelector("#btnYellow").addEventListener("click", bgColorYellow);