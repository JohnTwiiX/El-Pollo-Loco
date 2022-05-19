let canvas;
let world;
let keyboard = new Keyboard();
let images = [];




function startGame() {
    let gamescreen = document.getElementById('canvas');
    let startScreen = document.getElementById('startScreen');
    let startBtn = document.getElementById('startBtn');
    gamescreen.style = 'display: unset;';
    startScreen.style = 'display: none;';
    startBtn.style = 'display: none;';
    initLevel();
    init();
    // preloadImages();
}

function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Preload all images. This function should be executed before starting the game.
 * imagePaths should contain all images that will be loaded: ['img/image1.png', 'img/image2.png', 'img/image3.png', ...]
 */
function preloadImages() {
    for (let i = 0; i < imagePaths.length; i++) {
        let image = new Image();
        image.src = imagePaths[i];
        images.push(image); // push image-path to images-array (which contains all image-paths)
    }
}

/**
 * Check if background-image is already loaded in cache; if not, create new image
 * @param {string} src_path - scr-path of background-image 
 */
function checkBackgroundImageCache(src_path) {
    // Check if image is found in images-array.
    base_image = images.find(function(img) {
            return img.src.endsWith(src_path.substring(src_path, src_path.length));
        })
        // Create new image if not found in cache
    if (!base_image) {
        base_image = new Image();
        base_image.src = src_path;
    }
    return base_image;
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }

})

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }

})