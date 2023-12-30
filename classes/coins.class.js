/**
 * Represents a coin object, extending the Drawdown class.
 * @extends Drawdown
 */
class Coins extends Drawdown {
    /**
     * Creates an instance of Coins.
     * A coin is a specific type of drawable object that can be collected in the game.
     * @param {number} x - The x-coordinate of the coin on the canvas.
     * @param {number} y - The y-coordinate of the coin on the canvas.
     * @param {number} id - The unique identifier for the coin.
     */
    constructor(x, y, id) {
        super(); // Call the constructor of the parent class (Drawdown)
        this.id = id;
        this.path = 'img/8_coin/coin_1.png';
        this.x = x;
        this.y = y;
        this.loadimg('img/8_coin/coin_1.png');
    }

    /**
     * Handles the collection of the coin by moving it vertically upwards.
     */
    collected() {
        this.y -= 1000;
    }
}