/**
 * Represents a splash object, extending the movableobject class.
 * @extends movableobject
 */
class Splash extends movableobject {
    /**
     * Array containing paths to splash images for animation.
     * @type {string[]}
     */
    path = [
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
  
    /**
     * Creates an instance of Splash.
     * Initializes the splash with a default image, position, and dimensions.
     * @param {number} x - The x-coordinate of the splash object.
     * @param {number} y - The y-coordinate of the splash object.
     */
    constructor(x, y) {
      super();
      this.loadimg('img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png');
      this.x = x;
      this.y = y;
      this.width = 100;
      this.height = 70;
      this.loadimgcache(this.path);
      this.splash_animation_display();
    }
  
    /**
     * Displays the splash animation by cycling through the splash images.
     * The animation runs every 10 milliseconds.
     * After 500 milliseconds, the splash object moves down by 500 pixels.
     */
    splash_animation_display() {
      setInterval(() => {
        this.displayanimation(this.path);
      }, 10);
  
      setTimeout(() => {
        this.y += 500;
      }, 500);
    }
  }