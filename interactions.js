const clockInButton = document.getElementById("clockIn");

function clockIn() {
    clockInButton.textContent = "Clocked In!";
}

clockInButton.addEventListener("click", clockIn);