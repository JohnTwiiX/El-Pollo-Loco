class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
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
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "transparent";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }
}