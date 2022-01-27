export function getRandomSpeed() {
    // min speed = 100, max speed = 500
    return 100 + Math.floor(Math.random() * 400);
}

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function togglePause(paused) {
    return !paused ? true : false;
}