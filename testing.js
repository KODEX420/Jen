const button = document.getElementById("clickmeButton");

const message = document.getElementById("message");

function changeMessage() {
    message.textContent = "You clicked the button!";
}

button.addEventListener("click", changeMessage);