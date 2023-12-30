/**
 * Represents a boss health bar, extending the Drawdown class.
 * @extends Drawdown
 */
class Bossbar extends Drawdown {
    /**
     * Array containing paths to boss health bar images for different percentages.
     * @type {string[]}
     */
    imgs = [
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png'
    ];
  
    /**
     * Current health percentage of the boss.
     * @type {number}
     */
    percentage = 0;
  
    /**
     * Creates an instance of Bossbar.
     * Initializes the boss health bar with default position and dimensions.
     */
    constructor() {
      super();
      this.x = 480;
      this.y = 0;
      this.height = 0;
      this.width = 0;
      this.loadimgcache(this.imgs);
      this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png');
    }
  
    /**
     * Reveals the boss health bar by setting its height and width.
     */
    reveal() {
      this.height = 240;
      this.width = 100;
    }
  
    /**
     * Resets the boss health bar by setting its y-coordinate and loading the full health image.
     */
    reset() {
      // this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png');
      this.y = 0;
    }
  
    /**
     * Changes the image of the boss health bar based on the provided ID.
     * @param {number} id - The ID representing the image to be loaded.
     */
    changeimg(id) {
      if (id == 0) {
        this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png');
        this.y = -300;
      }
      if (id == 1) {
        this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png');
      }
      if (id == 2) {
        this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png');
      }
      if (id == 3) {
        this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png');
      }
      if (id == 4) {
        this.loadimg('img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png');
      }
    }
  }