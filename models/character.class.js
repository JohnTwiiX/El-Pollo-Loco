class Character extends MovableObject {
    height = 350;
    width = 170;
    y = 10;
    speed = 10;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ]
    world;
    walking_sound = new Audio('audio/walking.mp3')



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            this.pressRight();
            this.pressLeft();
            this.pressSpace();
            this.world.camera_x = -this.x + 100;
        }, 5000 / 60)
    }

    pressRight() {
        if (this.pressRightBtn()) {
            this.moveRight();
            this.otherDirection = false;
            this.walkWithSound();
        }
    }

    pressRightBtn() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    pressLeft() {
        if (this.pressLeftBtn()) {
            this.moveLeft();
            this.otherDirection = true;
            this.walkWithSound();
        }
    }

    pressLeftBtn() {
        return this.world.keyboard.LEFT && this.x > -500;
    }

    walkWithSound() {
        this.walkAnimation();
        this.walking_sound.play();
    }

    walkAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
    }

    pressSpace() {
        if (this.isAboveGround()) {
            this.jumpAnimation();
        }
        if (this.pressSpaceBtn()) {
            this.jump();
        }
    }

    pressSpaceBtn() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }

    jumpAnimation() {
        this.playAnimation(this.IMAGES_JUMPING);
    }







}