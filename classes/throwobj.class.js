/**
 * Represents a throwable object in the game, extending the MovableObject class.
 */
class Throwobj extends movableobject {
    acceleration = 1.5;
    speed_y = 0;
    ground = 210;
    throw_right;
    currentimg = 0;
    splashed = false;
    touched = false;
    close_while = true;
    damage = true;
    direction;

    rotation_img = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];
    path = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    

     /**
     * Creates an instance of the Throwobj class.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     * @param {boolean} tdr - A boolean indicating the direction of the throw (true for right, false for left).
     * @param {string} direction - The direction of the throw ('right' or 'left').
     * @param {World} world - The game world to which the throwable object belongs.
     */
    constructor(x, y, tdr,direction,world) {
        super();
        this.loadimg('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        
        this.throw_right = tdr;
        this.direction = direction;
        this.width = 100;
        this.height = 70;
        this.loadimgcache(this.path);
        this.loadimgcache(this.rotation_img);
        this.displayanimation(this.rotation_img);
        this.throw(this.x, this.y, this.throw_right);
        
    }
/**
     * Returns the current location of the throwable object.
     */
    return_location(){
        this.tdr = false
        this.x = this.x;
        this.y = this.y;
    }
/**
     * Initiates the splash animation for the throwable object.
     */
    splash() {
        setInterval(() => {
        this.displayanimation(this.path);
    }, 80);
    }

    /**
     * Initiates the rotation animation for the throwable object.
     */
    rotation() {
        setInterval(() => {
            this.displayanimation(this.rotation_img);
        }, 80);
    }
/**
     * Moves the throwable object away from the game area.
     */
    go_away() {
       
        this.touched = false;
        this.x =- 200;
    }

    /**
     * Handles the throwable object hitting a chicken enemy, triggering a splash.
     */
    hit_chicken(){
        this.splashed = true;
        this.x = this.x;
        this.y = this.y;
    }
/**
     * Throws the object to the right or left based on the provided parameters.
     * @param {number} x - The x-coordinate from which the object is thrown.
     * @param {number} y - The y-coordinate from which the object is thrown.
     * @param {boolean} tdr - A boolean indicating the direction of the throw (true for right, false for left).
     */
    throw(x, y, tdr) {
        if (tdr === true && !this.touched && this.direction == 'right') {
            this.rotation();
            this.throw_to_the_right(x, y);
            setInterval(() => {
                if(this.splashed == true){
                    this.splash();
                }
            }, 85);
        }
        if (tdr === true && !this.touched && this.direction == 'left'){
            this.rotation();
            this.throw_to_the_left(x, y);
            setInterval(() => {
                if(this.splashed == true){
                    this.splash();
                }
            }, 85);
    }
    }
/**
     * Throws the object to the right from the provided coordinates.
     * @param {number} x - The x-coordinate from which the object is thrown.
     * @param {number} y - The y-coordinate from which the object is thrown.
     */
    throw_to_the_right(x, y) {
        this.x = x;
        this.y = y;
        this.speed_y = 17;
        this.apply_gravity_bonus();
        let interval = setInterval(() => {
            if (!this.touched) {
                this.x += 6;
            } else {
                clearInterval(interval); // Stop moving when touched
            }
        }, 25);
    }

/**
     * Throws the object to the left from the provided coordinates.
     * @param {number} x - The x-coordinate from which the object is thrown.
     * @param {number} y - The y-coordinate from which the object is thrown.
     */
    throw_to_the_left(x, y) {
        this.x = x;
        this.y = y;
        this.speed_y = 17;
        this.apply_gravity_bonus();
        let interval = setInterval(() => {
            if (!this.touched) {
                this.x -= 6;
            } else {
                clearInterval(interval); // Stop moving when touched
            }
        }, 25);
    }
/**
     * Applies a gravity bonus to the throwable object, simulating a downward acceleration.
     */
    apply_gravity_bonus() {
        if (this.speed_y > 0 && !this.touched) {
            let gravityInterval = setInterval(() => {
                if (!this.touched) {
                    this.y -= this.speed_y;
                    this.speed_y -= this.acceleration;
                } else {
                    clearInterval(gravityInterval); // Stop gravity when touched
                }
            }, 1000 / 20);
        }
    }
}