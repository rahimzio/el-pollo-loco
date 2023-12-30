/**
 * Represents a status bar for bottles, extending the Drawdown class.
 * @extends Drawdown
 */
class Bottlebar extends Drawdown {
    /**
     * Array containing paths to bottle images at different fill levels.
     * @type {string[]}
     */
    bottle = [
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];
  
    /**
     * Percentage indicating the fill level of the bottle.
     * @type {number}
     */
    percentage = 0;
  
    /**
     * Creates an instance of Bottlebar.
     * Initializes the status bar with bottle images, position, and default fill level.
     */
    constructor() {
      super();
      this.loadimgcache(this.bottle);
      this.x = 10;
      this.y = 110;
      this.height = 200;
      this.width = 80;
      this.loadimg('img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png');
      this.collectbottle(this.percentage);
    }
  
    /**
     * Resets the fill level of the bottle to zero.
     */
    reset() {
      this.percentage = 0;
    }
  
    /**
     * Updates the bottle image based on the current fill level.
     * @param {number} percentage - The current fill level of the bottle.
     */
    collectbottle(percentage) {
      this.percentage = percentage;
      let path = this.bottle[this.resolvestatus()];
      this.img = this.imgcache[path];
    }
  
    /**
     * Increases the fill level of the bottle by 20%.
     */
    increasebottle() {
      if (this.percentage < 100) {
        this.percentage += 20;
        this.collectbottle(this.percentage);
      }
    }
  
    /**
     * Decreases the fill level of the bottle by 20% if it's not already empty.
     */
    decreasebottle() {
      if (!this.percentage == 0) {
        this.percentage -= 20;
        this.collectbottle(this.percentage);
      }
    }
  
    /**
     * Resolves the current status of the bottle based on its fill percentage.
     * @returns {number} - The index corresponding to the current status in the bottle array.
     */
    resolvestatus() {
      if (this.percentage == 100) {
        return 5;
      }
      if (this.percentage == 80) {
        return 4;
      }
      if (this.percentage == 60) {
        return 3;
      }
      if (this.percentage == 40) {
        return 2;
      }
      if (this.percentage == 20) {
        return 1;
      }
      if (this.percentage == 0) {
        return 0;
      }
    }
  }