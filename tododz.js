let seconds = 0;
let interval = null;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    timerElement.textContent = formatTime(seconds);
}

function start() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    if (!isRunning) return;
    clearInterval(interval);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
stopBtn.disabled = true;
updateDisplay();