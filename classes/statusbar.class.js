/**
 * Represents a status bar in the game, extending the Drawdown class.
 */
class Statusbar extends Drawdown{

     /**
     * Array containing images representing different percentage levels for the coin section of the status bar.
     * @type {string[]}
     */
    geld = ['img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'];
/**
     * Array containing images representing different percentage levels for the health section of the status bar.
     * @type {string[]}
     */
    leben = ['img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
             'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
             'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
             'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
             'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
             'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'];

             /**
     * Array containing images representing different percentage levels for the bottle section of the status bar.
     * @type {string[]}
     */
    bottle = ['img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'];

 /**
     * The current percentage value of the status bar.
     * @type {number}
     */

    percentage = 100;

 /**
     * Creates an instance of the Statusbar class.
     */
    constructor(){
        super();
        this.loadimgcache(this.leben)
        this.setpercentage(100);
        this.x = 10;
        this.y = -10;
        this.height = 200;
        this.width = 80;
    }

/**
     * Sets the percentage value for the status bar and updates the displayed image.
     * @param {number} percentage - The new percentage value for the status bar.
     */
    setpercentage(percentage){
        this.percentage = percentage;
        let path = this.leben[this.resolvestatus()];
        this.img = this.imgcache[path]
    }
    
     /**
     * Resolves the corresponding index for the status arrays based on the current percentage value.
     * @returns {number} - The index representing the current percentage level.
     */
    resolvestatus(){
        if(this.percentage == 100){
            return 5
        }
        if(this.percentage == 80){
            return 4
        }
        if(this.percentage == 60){
            return 3
        }
        if(this.percentage == 40){
            return 2
        }
        if(this.percentage == 20){
            return 1
        }
        if((this.percentage == 0) || (this.percentage < 0) ){
            return 0
        }
    }

}