const clockInButton = document.getElementById("clockInButton");
const timer = document.getElementById("timer");
const status = document.getElementById("status");
const session = document.getElementById("session");

let seconds = 0;
let timerRunning = false;
let timerInterval;

// AI-assisted code
function updateTimer() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    remainingSeconds = String(remainingSeconds).padStart(2, "0");

    timer.textContent = hours + ":" + minutes + ":" + remainingSeconds;
}

// AI-assisted code
function clockIn() {
    if (timerRunning === false) {

        timerRunning = true;
        seconds = 0;
        updateTimer();

        clockInButton.textContent = "[ CLOCK OUT ]";
        status.textContent = "[SYSTEM] Clocked in. Timer is running...";
        session.textContent =
            "SESSION > Started at " + new Date().toLocaleTimeString();

        timerInterval = setInterval(function () {
            seconds++;
            updateTimer();
        }, 1000);

    } else {

        timerRunning = false;
        clearInterval(timerInterval);

        clockInButton.textContent = "[ CLOCK IN ]";
        status.textContent = "[SYSTEM] Clocked out. Session complete.";
        session.textContent =
            "SESSION > Ended at " + new Date().toLocaleTimeString();
    }
}

clockInButton.addEventListener("click", clockIn);