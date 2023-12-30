/**
 * Represents the first world in the game.
 * @class
 */
class first_world {
    /**
     * The gamestart object for initializing the world.
     * @type {gamestart}
     */
    gamestart = new gamestart();

    /**
     * Creates an instance of the first world.
     * @constructor
     * @param {HTMLCanvasElement} canvas - The canvas element for rendering the world.
     */
    constructor(canvas) {
        /**
         * The rendering context of the canvas.
         * @type {CanvasRenderingContext2D}
         */
        this.ctx = canvas.getContext('2d');

        /**
         * The canvas element for rendering the world.
         * @type {HTMLCanvasElement}
         */
        this.canvas = canvas;

        // Draw the world
        this.draw();
    }

    /**
     * Draws the first world on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        // Add your drawing logic here

        this.ctx.translate(-this.camera_x, 0);

        this.ctx.translate(this.camera_x, 0);

        this.addtomo(this.gamestart);

        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds a movable object to the canvas.
     * @param {movableobject} mo - The movable object to be added.
     */
    addtomo(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}