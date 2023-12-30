/**
 * Represents the game over screen.
 * @class
 * @extends {Drawdown}
 */
class Gameover extends Drawdown {
    /**
     * Creates an instance of the game over screen.
     * @constructor
     */
    constructor() {
        super();

        /**
         * The x-coordinate of the game over screen.
         * @type {number}
         */
        this.x = 0;

        /**
         * The y-coordinate of the game over screen.
         * @type {number}
         */
        this.y = 0;

        /**
         * The height of the game over screen.
         * @type {number}
         */
        this.height = 0;

        /**
         * The width of the game over screen.
         * @type {number}
         */
        this.width = 480;

        /**
         * Loads the image for the game over screen.
         */
        this.loadimg('img/9_intro_outro_screens/game_over/game over!.png');
    }

    /**
     * Sets the properties to indicate the end of the game.
     * @param {number} x - The x-coordinate for positioning.
     */
    gameending(x) {
        /*this.x = x - 630;*/
        this.height = 820;
    }
}