class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable object should always fall
            return true;
        } else {
            return this.y < 90;
        }

    }


    // Wir geben hier der Hitbox eine Größe, diese gilt nur für den Character
    isColliding(mo) {
        return this.x + 30 + this.width - 70 > mo.x &&
            this.y + 150 + this.height - 160 > mo.y &&
            this.x - 50 < mo.x &&
            this.y + 150 < mo.y + this.height - 160

    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Zeit in Zahlenform
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in msec
        timepassed = timepassed / 1000; // difference in sec
        return timepassed < 0.5; // make true
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }
}