
document.addEventListener('DOMContentLoaded', () => {
    const som2 = new Audio('./sound/sound.mp3');

        document.getElementById('body').addEventListener('mouseover', () => {
            som2.play();
            som1.onload = 'auto';
    });
});

// função da porta

const som1 = new Audio('./sound/door.mp3');

document.getElementById('porta').addEventListener('click', () => {
    som1.play();
    som1.preload = 'auto';
});

document.getElementById('porta').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = './DentroTaberna/index.html';
    }, 2000);
});