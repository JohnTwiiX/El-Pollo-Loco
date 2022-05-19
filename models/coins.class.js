class Coin extends DrawableObject {
    height = 30;
    width = 30;
    y = 350;

    constructor(x) {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.x = x;


    }
}