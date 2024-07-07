document.addEventListener('DOMContentLoaded', () => {
    const som2 = new Audio('../sound/sound.mp3');

        document.getElementById('body').addEventListener('mouseover', () => {
            som2.play();
            som1.onload = 'auto';
    });
});




const som1 = new Audio('../sound/fire.mp3');

document.getElementById('armor').addEventListener('click', () => {
    som1.play();
    som1.preload = 'auto';
});
let contador1 = 0;
armor.addEventListener('click', () => {
    contador1++;
    
    if (contador1 === 1) {
        window.alert(`Você recebeu ${contador1} espada.`);
    } else {
        window.alert(`Você recebeu ${contador1} espada.`);
    }
});

let contador2 = 0;
potion.addEventListener('click', () => {
    contador2++;
    
    if (contador2 === 1) {
        window.alert(`Você recebeu ${contador2} poção.`);
    } else {
        window.alert(`Você recebeu ${contador2} poção.`);
    }
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
