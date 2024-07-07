document.addEventListener('DOMContentLoaded', () => {
    const som2 = new Audio('../sound/sound.mp3');

        document.getElementById('body').addEventListener('mouseover', () => {
            som2.play();
            som1.onload = 'auto';
    });
});

const xp= new Audio('../sound/xp.mp3')



const som1 = new Audio('../sound/fire.mp3');

document.getElementById('armor').addEventListener('click', () => {
    som1.play();
    som1.preload = 'auto';
});
let contador1 = 0;
armor.addEventListener('click', () => {
    contador1++;
    xp.play();
    
    if (contador1 === 1) {
        window.alert(`Você recebeu ${contador1} espada.`);
    } else {
        window.alert(`Você recebeu ${contador1} espada.`);
    }
});

let contador2 = 0;
potion.addEventListener('click', () => {
    contador2++;
    xp.play();
    
    if (contador2 === 1) {
        window.alert(`Você recebeu ${contador2} poção.`);
    } else {
        window.alert(`Você recebeu ${contador2} poção.`);
    }
});


const audio0 = new Audio('../sound/audio1.mp3');
const audio1 = new Audio('../sound/sound2.mp3');
const audio2 = new Audio('../sound/sound4.mp3');

document.getElementById('bartender').addEventListener('click', () => {
    audio0.play();
    audio0.preload = 'auto';
});
let contadorbaternder = 0;

bartender.addEventListener('click', () => {
    contadorbaternder++;
    if (contadorbaternder % 1 === 0) {
        audio1.play();
      } else if (contadorbaternder % 2 === 0) {
        audio2.play();
      } else if (contadorbaternder % 3 === 0) {
        audio0.play();
    }
    });



const som3 = new Audio('../sound/potion.mp3');

document.getElementById('potion').addEventListener('click', () => {
    som3.play();
    som3.preload = 'auto';
});
