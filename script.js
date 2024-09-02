// Countdown Timer
const countdown = () => {
    const targetDate = new Date("2024-09-08T11:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Time's Up!";
    }
};

setInterval(countdown, 1000);

// Floating Bubbles Background
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

class Bubble {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.x - this.radius > canvas.width || this.x + this.radius < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.y - this.radius > canvas.height || this.y + this.radius < 0) {
            this.speed.y = -this.speed.y;
        }
    }
}

const generateBubbles = (x, y) => {
    const colors = ['#61dafb', '#f05454', '#c6f1d6', '#f3c583'];
    const radius = Math.random() * 10 + 5;
    const speed = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
    };
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubbles.push(new Bubble(x, y, radius, color, speed));
};

canvas.addEventListener('mousemove', (e) => {
    generateBubbles(e.clientX, e.clientY);
});

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble, index) => {
        bubble.update();
        bubble.draw();

        // Remove bubbles that are off-screen
        if (
            bubble.x - bubble.radius > canvas.width ||
            bubble.x + bubble.radius < 0 ||
            bubble.y - bubble.radius > canvas.height ||
            bubble.y + bubble.radius < 0
        ) {
            bubbles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
};

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
