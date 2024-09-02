document.addEventListener('mousemove', (e) => {
    createBalloon(e.clientX, e.clientY);
});

function createBalloon(x, y) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.width = `${Math.random() * 30 + 10}px`;
    balloon.style.height = balloon.style.width;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.left = `${x}px`;
    balloon.style.top = `${y}px`;
    document.querySelector('.balloons').appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 2000);
}

const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2024-09-08T11:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        countdownElement.textContent = 'Süre Doldu!';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Audio control for buttons
const audioFiles = {
    alper: new Audio('alper.mp3'),
    sude: new Audio('sude.mp3'),
    omer: new Audio('omer.mp3')
};

function stopAllAudio() {
    for (let audio in audioFiles) {
        audioFiles[audio].pause();
        audioFiles[audio].currentTime = 0; // Reset audio to the start
    }
}

// Set initial volume for all audio
const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value;
    for (let audio in audioFiles) {
        audioFiles[audio].volume = volume;
    }
});

// Set volume and event listeners for buttons
document.getElementById('alper').addEventListener('click', () => {
    stopAllAudio();
    audioFiles.alper.play();
});

document.getElementById('sude').addEventListener('click', () => {
    stopAllAudio();
    audioFiles.sude.play();
});

document.getElementById('omer').addEventListener('click', () => {
    stopAllAudio();
    audioFiles.omer.play();
});

// İkinci sayaç için eklenen yeni hedef tarih
const smallCountdownElement = document.getElementById('small-countdown');
const smallTargetDate = new Date('2024-09-10T11:00:00');

function updateSmallCountdown() {
    const now = new Date();
    const timeDiff = smallTargetDate - now;

    if (timeDiff <= 0) {
        smallCountdownElement.textContent = 'Süre Doldu!';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    smallCountdownElement.textContent = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
}

setInterval(updateSmallCountdown, 1000);
updateSmallCountdown();

// Otkar butonu için yeni audio kontrolü
audioFiles.otkar = new Audio('otkar.mp3');

document.getElementById('otkar').addEventListener('click', () => {
    stopAllAudio();
    audioFiles.otkar.play();
});
