/**
 * Represents the game start screen.
 * @class
 * @extends {Drawdown}
 */
class gamestart extends Drawdown {
    /**
     * The path to the image for the game start screen.
     * @type {string}
     */
    path = "img/9_intro_outro_screens/start/startscreen_1.png";

    /**
     * Creates an instance of the game start screen.
     * @constructor
     */
    constructor() {
        super();

        /**
         * Loads the image for the game start screen.
         */
        this.loadimg(this.path);

        /**
         * The x-coordinate of the game start screen.
         * @type {number}
         */
        this.x = 0;

        /**
         * The y-coordinate of the game start screen.
         * @type {number}
         */
        this.y = 0;

        /**
         * The height of the game start screen.
         * @type {number}
         */
        this.height = 720;

        /**
         * The width of the game start screen.
         * @type {number}
         */
        this.width = 480;
    }

    /**
     * Checks and updates the position of the game start screen.
     */
    check() {
        this.x = -1000;
    }
}