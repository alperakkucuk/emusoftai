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

document.getElementById('alper').addEventListener('click', () => audioFiles.alper.play());
document.getElementById('sude').addEventListener('click', () => audioFiles.sude.play());
document.getElementById('omer').addEventListener('click', () => audioFiles.omer.play());
