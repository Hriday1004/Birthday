const birthdayText = document.getElementById('birthdayText');
const celebrateBtn = document.getElementById('celebrateBtn');
const confettiContainer = document.getElementById('confetti');

celebrateBtn.addEventListener('click', () => {
    birthdayText.innerText = 'Happy Birthday to You Krishna ! 🎂🎉';
    startConfetti();
});

function startConfetti() {
    confettiContainer.style.display = 'block';
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

function randomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffd700', '#00ff7f', '#87cefa'];
    return colors[Math.floor(Math.random() * colors.length)];
}
