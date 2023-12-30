/**
 * Represents a chicken enemy object, extending the movable object class.
 * @extends movableobject
 */
class Chicken extends movableobject {
    /**
     * Creates an instance of Chicken.
     * A chicken is a specific type of movable object in the game, with fixed height and width, a fixed y-coordinate, and a random initial x-coordinate.
     * It has walking animation images, a speed value, and methods for playing a scream sound, getting hit, and resetting its position.
     * @param {World} world - The game world to which the chicken belongs.
     */
    constructor(world) {
        super(); // Call the constructor of the parent class (movableobject)
        this.height = 80;
        this.width = 80;
        this.y = 330;
        this.min = 600;
        this.max = 2700;
        this.world = world;
        this.screamSound = new Audio("audio/chicken-single-alarm-call-6056.mp3");
        this.path = ['img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png', 'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'];
        this.currentimg = 0;
        this.speed = 0.10 + Math.random() + 0.30;
        this.loadimgcache(this.path);
        this.animate(this.path);
        this.moveleft(this.speed);
    }

    /**
     * Plays the scream sound of the chicken.
     */
    scream() {
        this.screamSound.play();
    }

    /**
     * Changes the image of the chicken to indicate that it got hit and moves its y-coordinate to simulate falling.
     */
    got_hit() {
        this.loadimg('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
        setTimeout(() => {
            this.y += 400;
        }, 1000 / 8);
    }

    /**
     * Resets the position of the chicken to its initial state.
     */
    reset() {
        this.y = 355;
        let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.x = randomNumber;
    }
}