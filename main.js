var clicked = document.querySelector("#countUp");
var count = 0;

console.log(clicked);
clicked.onclick = function() {
    count++;
    clicked.innerText = "Count: " + count;
}