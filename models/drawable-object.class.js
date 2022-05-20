class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 10;
    width = 100;




    loadImage(path) {
        this.img = new Image(); // this.img = document.getelementbyid('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    drawFrame(ctx) {
        // Red rectangle (now transparent)
        if (this instanceof Character) {

            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + 30, this.y + 150, this.width - 70, this.height - 160);
            ctx.stroke();
        }
        if (this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "transparent";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "transparent";
            ctx.rect(this.x, this.y + 100, this.width, this.height - 120);
            ctx.stroke();
        }
        if (this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + 30, this.y + 30, this.width - 60, this.height - 60);
            ctx.stroke();
        }
    }

    // rectForInstanceof() {
    //     if (this instanceof Character) {
    //         return;
    //     }
    //     if (this instanceof Chicken) {
    //         return;
    //     }
    //     if (this instanceof Coin) {
    //         return;
    //     }
    // }
}