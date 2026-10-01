

const cdContainer = document.getElementById('cd-container');
const cd = document.getElementById('cd-clickable');

const heaven = new Audio('audios/heaven.mp3');
heaven.volume = 0.75;
heaven.loop = true;

let cdActivated = false;


cd.addEventListener('click', async () => {
    if (cdActivated) {
        heaven.pause();
        cdActivated = false;
    } else {
        try {
            await heaven.play();
            cdActivated = true;
        } catch (error) {
            console.error('Audio playback failed:', error);
        }
    }
    
    cdContainer.style.animationPlayState = cdActivated ? 'running' : 'paused';
});

const sparkleLayer = document.querySelector('.sparkle-layer');

function createSparkle() {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    const choice = Math.floor(Math.random() * 4)
    sparkle.textContent = choice != 0 ? '✦' : '❤';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.fontSize = `${8 + Math.random() * 10}px`;
    sparkle.style.setProperty('--delay', `${Math.random() * 4}s`);
    sparkle.style.setProperty('--duration', `${2 + Math.random() * 3}s`);

    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
        createSparkle();
    }, { once: true });

    sparkleLayer.append(sparkle);
}

for (let index = 0; index < 50; index++) {
    createSparkle();
}