class Coin extends DrawableObject {
    height = 100;
    width = 100;
    y = 350;
    offset = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
    }

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.x = x;
        this.y = y;

    }
}