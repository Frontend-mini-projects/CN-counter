let inputTime = document.getElementById("inputNumber");
let button = document.getElementById("startCounter");
let res = document.getElementById("result");

let continueTimer = false;
function start(event) {
    console.log("hello");
    if (continueTimer) {
        return;
    }

    continueTimer = true;
    res.innerText = inputTime.value;
    let output = parseInt(res.innerText);

    var interval = setInterval(() => {
        if (output <= 0) {
            clearInterval(interval);
            alert("Times Up!");
            continueTimer = false;
            return;
        }
        if (output > 9) {
            clearInterval(interval);
            alert("Time should be less than 10");
            continueTimer = false;
            return;
        }
        output--;
        res.innerText = output;
    }, 1000);
}

button.addEventListener("click", start);
document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        start();
    }
    console.log(event.keyCode);
});
