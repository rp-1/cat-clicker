var clicker = document.getElementById("clickCount");
var mainCatImage = document.getElementById("mainCatImage");

var clickCount = 0;


mainCatImage.addEventListener("click", handleClick, false);

function handleClick(evt) {
    clicker.innerHTML = ++clickCount;
}