var countUp = document.querySelector("#countUp");
var countDown = document.querySelector("#countDown");
var counter = document.querySelector("#counter");

var count = 0;

countUp.onclick = function() {
    count++;
    counter.innerText = count;
}

countDown.onclick = function() {
    count--;
    counter.innerText = count;
}