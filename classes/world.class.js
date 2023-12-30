/**
 * Represents the game world, managing game elements, interactions, and rendering.
 */
class World {
    charackter = new Charackter();
    keyboard;
    keyboard_throw;
    camera_x = -0;
    mov = new movableobject();
    endboss_icon = new endboss_icon();
    endboss_statusbar = new Bossbar();
    5;
    backgroundSound = new Audio("audio/europe-travel-119948.mp3");
    statusbar = new Statusbar();
    coinsbar = new Coinsbar();
    game_win;
    game_over;
    coins = [
      new Coins(500, 180, 0),
      new Coins(700, 170, 1),
      new Coins(900, 160, 2),
      new Coins(1800, 170, 3),
      new Coins(2400, 150, 4),
    ];
    splashed_bottles = [];
    bottles = [];
    bottlebar = new Bottlebar();
    bootles_to_collect = [
      new Bootle_to_collect(500, 290, 2),
      new Bootle_to_collect(900, 300, 3),
      new Bootle_to_collect(1400, 150, 4),
      new Bootle_to_collect(1600, 180, 4),
      new Bootle_to_collect(1800, 180, 4),
    ];
    gameisover = new Gameover();
    prevX = this.charackter.x;
    gamestart = new gamestart();
    levelend = level1.levelendx;
    backgrounds = level1.backgrounds;
    clouds = level1.clouds;
    enemies = level1.enemies;
    direction;
    soundOn = false;
    canvas;
    ctx;

    /**
     * Creates an instance of the World class.
     * @param {HTMLCanvasElement} canvas - The HTML canvas element to render the game on.
     * @param {Keyboard} keyboard - The keyboard input handler for the game.
     */
    constructor(canvas, keyboard) {
      this.ctx = canvas.getContext("2d");
      this.canvas = canvas;
      this.keyboard = keyboard;
      this.move();
      this.draw();
      this.check_cases();
      this.throw();
    }


     /**
     * Plays or pauses the background sound based on the provided boolean value.
     * @param {boolean} boolean - A boolean value indicating whether to play (true) or pause (false) the background sound.
     */
    playbackgroundSound(){
      if (this.soundOn) {
        this.backgroundSound.play();
      } else {
        this.backgroundSound.pause();
      }
    }
  
    /**
     * Initializes the movement and drawing configurations for the character and enemies.
     */
    move() {
      this.charackter.world = this;
      this.enemies.world = this;
    }
  
    /**
     * Manages the throwing of objects based on keyboard input.
     */
    throw() {
      setInterval(() => {
        if (this.bottlebar.percentage > 0) {
          if (this.keyboard.throw ) {
            let bottle = new Throwobj(
              this.charackter.x + 100,
              this.charackter.y + 100,
              true,
              this.direction,
              this
            );
            this.bottles.push(bottle);
            //let splashed_bottle = new splash();
           // this.splashed_bottles.push(splashed_bottle)
          }
        }
  
        if ((this.keyboard.space) ||(this.keyboard_throw == true)) {
          this.bottlebar.decreasebottle();
        }
      }, 1000 / 3);
    }
  
     /**
     * Periodically sets the movement direction based on the character's state.
     */
    direction_setter() {
      setInterval(() => {
        if (this.charackter.otherDirection == true) {
          this.direction = "left";
        } else {
          this.direction = "right";
        }
      }, 1000 / 10);
    }
  
    /**
     * Resets certain game elements such as the character's status and collectibles.
     */
    reset() {
      this.charackter.saw_boss = false;
      this.bottlebar.reset();
      this.coinsbar.reset();
      this.charackter.reset();
    }
  
    /**
     * Sets up periodic checks for various game conditions.
     */
    check_cases() {
      this.direction_setter();
      this.activateboss();
      this.checkfordamage();
      this.collectsalsabottle();
      this.collectcoins();
      this.check_throw_colision();
      this.jumped_on_chicken();
      this.gameover();
    }
  
    /**
     * Activates the boss encounter based on character position.
     */
    activateboss() {
      setInterval(() => {
        if (this.charackter.x > 1700 && this.charackter.saw_boss == false) {
          this.charackter.saw_boss = true;
          this.enemies[15].display_walk_animation = true;
          this.enemies[15].world = this;
          this.enemies[15].appearance(this.charackter.x);
          this.endboss_icon.reveal();
          this.endboss_statusbar.reveal();
        }
      }, 1000);
    }
  
 /**
     * Sets up a periodic check for character X position changes.
     */
    startChecking = () => {
      interval = setInterval(() => {
        if (this.charackter.x !== prevX) {
          checkCharackterX();
        }
      }, 100);
  
      checkCharackterX();
    };
  
    /**
     * Stops the periodic check for character X position changes.
     */
    stopChecking = () => {
      clearInterval(interval);
    };
   /**
     * Manages the game over condition and triggers appropriate actions.
     */
    gameover() {
      setInterval(() => {
        if ((this.charackter.life == 0 ) || (this.charackter.life < 0)||(this.statusbar.percentage == 0) || (this.statusbar.percentage < 0) ) {
          this.addtomo(this.gameisover);
          this.game_over = true;
        }else{
          this.game_over = false;
        }
      }, 100);
    }
  
    /**
     * Checks for collisions between thrown objects and enemies.
     */
    check_throw_colision() {
      setInterval(() => {
        this.enemies.forEach((mo) => {
          this.bottles.forEach((bottle) => {
            if (mo.iscolliding(bottle) && bottle.damage == true) {
             if (mo instanceof Endboss){
                mo.got_hit();
               
                this.endboss_lifepoints();
                bottle.go_away();
              }
              if (mo instanceof Chicken){
                bottle.hit_chicken();
                mo.got_hit();
                bottle.go_away();
                if(soundOn == true){
                  mo.scream();
                }
              }
            }
            
          });
        });
      }, 1000 / 60);
    }
  
    /**
     * Handles the collection of salsabottles by the character.
     */
    collectsalsabottle() {
      setInterval(() => {
        this.bootles_to_collect.forEach((bottle) => {
          if (this.charackter.iscolliding(bottle)) {
            bottle.collected();
            this.bottlebar.increasebottle();
          }
        });
      }, 1000 / 60);
    }
  
     /**
     * Handles the collection of coins by the character.
     */
    collectcoins() {
      setInterval(() => {
        this.coins.forEach((coin) => {
          if (this.charackter.iscolliding(coin)) {
            coin.collected();
            this.coinsbar.increasecoins();
            this.addobjects(this.coins);
          }
        });
      }, 1000 / 60);
    }
  
      /**
     * Checks for damage collisions between the character and enemies.
     */
    checkfordamage() {
      setInterval(() => {
        this.enemies.forEach((mo) => {
          if (this.charackter.iscolliding(mo) && !this.charackter.ishurt()) {
            this.charackter.hit();
            this.statusbar.setpercentage(this.charackter.life);
            if(soundOn == true){
              this.charackter.playHurtSound();
            }
          }
         
        });
      }, 1000);
    }
  
    /**
     * Handles collisions when the character jumps on a chicken enemy.
     */
    jumped_on_chicken() {
      setInterval(() => {
        this.enemies.forEach((mo) => {
          if (mo instanceof Chicken) {
            if (this.charackter.on_top(mo) && this.charackter_falling() == true) {
              mo.got_hit();
              if(soundOn == true){
                mo.scream();
              }
            }
          }
        });
      }, 1000 / 60);
    }
   /**
     * Determines if the character is currently falling.
     * @returns {boolean} - A boolean indicating whether the character is falling.
     */
    charackter_falling() {
      if (this.charackter.last_y - this.charackter.y < 0) {
        return true;
      } else {
        return false;
      }
    }
   /**
     * Manages the lifepoints of the end boss, updating the statusbar and triggering a win condition.
     */
    endboss_lifepoints() {
        if (this.enemies[15].life_points == 4) {
          this.endboss_statusbar.changeimg(4);
        }
        if (this.enemies[15].life_points == 3) {
          this.endboss_statusbar.changeimg(3);
        }
        if (this.enemies[15].life_points == 2) {
          this.endboss_statusbar.changeimg(2);
        }
        if (this.enemies[15].life_points == 1) {
          this.endboss_statusbar.changeimg(1);
        }
        if (this.enemies[15].life_points == 0) {
          this.endboss_death();
        }
    }
    endboss_death(){
          this.enemies[15].death_animation();
          this.endboss_statusbar.changeimg(0);
          this.endboss_icon.dead();
          this.enemies[15].got_hit();
          this.game_win = true;
    }
  /**
     * Draws the game elements on the canvas, updating positions and images.
     */
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.camera_x, 0);
  
      this.addobjects(this.backgrounds);
      this.clouds.forEach((cloud) => {
        this.addtomo(cloud);
      });
  
      this.ctx.translate(-this.camera_x, 0);
      this.addtomo(this.statusbar);
      this.addtomo(this.coinsbar);
      this.addtomo(this.bottlebar);
      this.addtomo(this.endboss_statusbar);
      this.addtomo(this.endboss_icon);
      this.ctx.translate(this.camera_x, 0);
      this.addtomo(this.charackter);
  
      this.addobjects(this.bootles_to_collect);
      this.addobjects(this.bottles);
      this.addobjects(this.coins);
      this.addobjects(this.enemies);
  
      this.ctx.translate(-this.camera_x, 0);
  
      self = this;
      requestAnimationFrame(function () {
        self.draw();
      });
      this.addtomo(this.gameisover);
      this.addtomo(this.gamestart);
    }
  
    /**
     * Adds multiple game objects to the canvas.
     * @param {Array<MovableObject>} value - An array of movable objects to add to the canvas.
     */
    addobjects(value) {
      value.forEach((objects) => this.addtomo(objects));
    }
  
    /**
     * Renders game objects to the canvas, handling object direction.
     * @param {MovableObject} mo - The movable object to render on the canvas.
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
  