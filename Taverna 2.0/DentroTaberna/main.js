const som1 = new Audio('../sound/fire.mp3');

document.getElementById('armor').addEventListener('click', () => {
    som1.play();
    som1.preload = 'auto';
});

const som2 = new Audio('../sound/hello.mp3');

document.getElementById('bartender').addEventListener('click', () => {
    som2.play();
    som2.preload = 'auto';
});

const som3 = new Audio('../sound/potion.mp3');

document.getElementById('potion').addEventListener('click', () => {
    som3.play();
    som3.preload = 'auto';
});
