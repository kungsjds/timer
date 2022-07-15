let timer;

function start() {

    timer = setInterval(showTimer, 1000);

};

function stop() {

    clearInterval(timer);

};

function showTimer() {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let full = h +':'+ m +':'+ s;

    document.querySelector('#timer').innerHTML = full;

};