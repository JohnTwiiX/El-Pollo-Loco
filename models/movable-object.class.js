class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

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
        return this.isIntersectingX(mo) && this.isIntersectingY(mo);
        // return this.getRightPos() > mo.x &&
        //     this.getBottomPos() > mo.y &&
        //     this.getLeftPos() < mo.x &&
        //     this.getTopPos() < mo.y + this.height
    }

    isIntersectingX(mo) {
        return !(this.isLeftSide(mo) || this.isRightSide(mo));
    }

    isIntersectingY(mo) {
        return !(this.isAbove(mo) || this.isBelow(mo));
    }

    isLeftSide(mo) {
        return !(this.getRightPos() > mo.getLeftPos());
    }

    isRightSide(mo) {
        return !(this.getLeftPos() < mo.getRightPos());
    }

    isAbove(mo) {
        return !(this.getBottomPos() > mo.getTopPos());
    }

    isBelow(mo) {
        return !(this.getTopPos() < mo.getBottomPos());
    }

    getTopPos() {
        return this.y + this.offset.top;
    }

    getRightPos() {
        return this.x + this.width - this.offset.right;
    }

    getBottomPos() {
        return this.y + this.height - this.offset.bottom;
    }

    getLeftPos() {
        return this.x + this.offset.left;
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