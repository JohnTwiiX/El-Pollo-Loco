let world;
let canvas;
let playMusic1 = new Audio('audio/music1.mp3');
let playMusic2 = new Audio('audio/music2.mp3');
let musicOn = false;

init = () => {
    canvas = document.getElementById('canvas');

}

startGame = () => {
    world = new World(canvas, level1);
    world.resumeGame();

    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('startButton2').classList.add('d-none');
    document.getElementById('stopButton').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('control-description').classList.remove('show-description');
}

showControlDescription = () => {
    let description = document.getElementById('control-description');
    if (!description.classList.contains('show-description')) {
        description.classList.add('show-description');
    } else {
        description.classList.remove('show-description');
    }
}

addEventListener('keydown', (event) => {
    let stopButton = document.getElementById('stopButton');

    if (event.code == 'Enter') {
        if (!stopButton.classList.contains('d-none')) {
            world.stopGame();
        } else {
            world.resumeGame();
        }
    };
})

/**
 * This function is used to toggle the music 1.
 */
function music1() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction1();
}


/**
 * This function is used to toggle the music 2.
 */
function music2() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction2();
}


/**
 * This function is used to play the music 1.
 */
function playMusicFunction1() {
    if (musicOn == true) {
        playMusic1.play();
    }
    if (musicOn == false) {
        playMusic1.pause();
    }
}


/**
 * This function is used to play the music 2.
 */
function playMusicFunction2() {
    if (musicOn == true) {
        playMusic2.play();
    }
    if (musicOn == false) {
        playMusic2.pause();
    }
}