let timer;
let date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

function start() {

    timer = setInterval(showTimer, 1000);

};

function stop() {

    clearInterval(timer);

};

function showTimer() {

    if (s <= 60) {
        date.setSeconds( date.getSeconds() +1 );   
    } 
    else if (m <= 60) {
        date.setSeconds(0);
        s = 0;

        date.setMinutes( date.getMinutes() +1 );
    } 
    else {
        date.setMinutes(0);
        m = 0;

        date.setHours( date.getHours() +1 );
    } 
    
    s = returnHours(date.getSeconds());
    m = returnHours(date.getMinutes());
    h = returnHours(date.getHours());

    let fullHours = h +':'+ m +':'+ s;

    document.querySelector('#timer').innerHTML = fullHours;

};

function returnHours(hours) {
    return (hours < 10)? '0' + hours : hours;
};