const som1 = new Audio('./sound/door.mp3');

document.getElementById('porta').addEventListener('click', () => {
    som1.play();
    som1.preload = 'auto';
});

const som2 = new Audio('./sound/sounddark.mp3');

document.getElementById('letreiro').addEventListener('click', () => {
    som2.play();
    som2.preload = 'auto';
});

document.getElementById('porta').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = './DentroTaberna/index.html';
    }, 2000);
});