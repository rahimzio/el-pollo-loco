/**
 * Represents the end boss in the game.
 * @class
 * @extends {movableobject}
 */
class Endboss extends movableobject{
  /**
     * The height of the end boss.
     * @type {number}
     */
  height = 370;

  /**
   * The width of the end boss.
   * @type {number}
   */
  width = 370;

  /**
   * The current image index for animation.
   * @type {number}
   */
  currentimg = 0;

  /**
   * The y-coordinate of the end boss.
   * @type {number}
   */
  y = 100;

  /**
   * The animation index.
   * @type {number}
   */
  i = 0;

  /**
   * Indicates whether the close function is active.
   * @type {boolean}
   */
  close_function = true;

  /**
   * The speed of the end boss.
   * @type {number}
   */
  speed;

  /**
   * Array to store interval IDs.
   * @type {number[]}
   */
  intervalID = [];

  /**
   * The number of intervals.
   * @type {number}
   */
  interval_num;

  /**
   * Indicates whether the appearance animation has started.
   * @type {boolean}
   */
  appearanceStarted = false;

  /**
   * Indicates whether the code is running.
   * @type {boolean}
   */
  code_running = true;

  /**
   * Indicates whether to display the walk animation.
   * @type {boolean}
   */
  display_walk_animation = false;

  /**
   * Indicates whether the first touch has occurred.
   * @type {boolean}
   */
  firsttouch = false;

  /**
   * Indicates whether the end boss is alive.
   * @type {boolean}
   */
  is_alive;

  /**
   * The life points of the end boss.
   * @type {number}
   */
  life_points = 5;

  /**
   * The path for the walking animation.
   * @type {string[]}
   */
  path = ["img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png"
  ];

  /**
   * The path for the alert animation.
   * @type {string[]}
   */
  alert_img = ["img/4_enemie_boss_chicken/2_alert/G5.png",
      "img/4_enemie_boss_chicken/2_alert/G6.png",
      "img/4_enemie_boss_chicken/2_alert/G7.png",
      "img/4_enemie_boss_chicken/2_alert/G8.png",
      "img/4_enemie_boss_chicken/2_alert/G9.png",
      "img/4_enemie_boss_chicken/2_alert/G10.png",
      "img/4_enemie_boss_chicken/2_alert/G11.png",
      "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  /**
   * The path for the attack animation.
   * @type {string[]}
   */
  attack_img = ["img/4_enemie_boss_chicken/3_attack/G13.png",
      "img/4_enemie_boss_chicken/3_attack/G14.png",
      "img/4_enemie_boss_chicken/3_attack/G15.png",
      "img/4_enemie_boss_chicken/3_attack/G16.png",
      "img/4_enemie_boss_chicken/3_attack/G17.png",
      "img/4_enemie_boss_chicken/3_attack/G18.png",
      "img/4_enemie_boss_chicken/3_attack/G19.png",
      "img/4_enemie_boss_chicken/3_attack/G20.png",
      "img/4_enemie_boss_chicken/3_attack/G16.png",
      "img/4_enemie_boss_chicken/3_attack/G17.png",
      "img/4_enemie_boss_chicken/3_attack/G18.png",
      "img/4_enemie_boss_chicken/3_attack/G19.png",
  ];

  /**
   * The path for the walking animation.
   * @type {string[]}
   */
  walking_img = ["img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png"
  ];

  /**
   * The path for the hurt animation.
   * @type {string[]}
   */
  hurt_img = ["img/4_enemie_boss_chicken/4_hurt/G21.png",
      "img/4_enemie_boss_chicken/4_hurt/G22.png",
      "img/4_enemie_boss_chicken/4_hurt/G23.png"
  ];

  /**
   * The path for the dead animation.
   * @type {string[]}
   */
  dead_img = ["img/4_enemie_boss_chicken/5_dead/G24.png",
      "img/4_enemie_boss_chicken/5_dead/G25.png",
      "img/4_enemie_boss_chicken/5_dead/G26.png"
  ];


    world;

    /**
     * Creates an instance of the end boss.
     * @constructor
     */
    constructor(){
       super().loadimg('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.x = 2400;
        this.is_alive = true;
        this.display_walk_animation = false;
        this.loadimgcache(this.alert_img);
        this.loadimgcache(this.path);
        this.loadimgcache(this.attack_img);
        this.loadimgcache(this.hurt_img);
        this.loadimgcache(this.walking_img);
        this.loadimgcache(this.dead_img);
    }
/**
     * Displays the hurt animation.
     */
    is_hurt(){
            this.displayanimation(this.hurt_img);
    }
   /**
     * Displays the death animation.
     */
    death_animation(){
        this.displayanimation(this.dead_img);
    }
/**
     * Handles the end boss getting hit.
     */
    got_hit(){
        if(this.life_points == 0){
            this.intervalID.forEach(clearInterval)
            this.is_alive = false;
            this.y += 550;
        }
        if(this.life_points > 0){
            this.life_points -= 1;
            this.is_hurt();
        }

        if(this.life_points <= 4){
            this.move_endboss()
        }

        
    }
/**
     * Resets the end boss properties.
     */
    reset(){
    this.y = 100 ;
    this.x = 2400;
    this.i = 0;
    this.life_points = 5;
    this.close_function = false;
    this.stop_intervall()
    //this.setmovement();
    this.close_function = true ;
    }
/**
     * Stops the intervals.
     * @private
     */
    stop_intervall(){
        //this.intervalID.forEach(clearInterval())
    }
/**
     * Handles the appearance animation of the end boss.
     * @param {number} x - The x-coordinate.
     */
    appearance(x) {
        if (!this.appearanceStarted) {
            this.appearanceStarted = true
    
        setInterval(() => {
            if(this.i < 5 && this.life_points > 4){
            this.displayanimation(this.alert_img);
            
         }
         if(this.i > 5 && this.life_points > 4){
            this.displayanimation(this.attack_img);
          }
          if(this.i > 15 && this.close_function == true && this.life_points > 4){
        
            
          }
         this.i++;
        
         if(x > 0 && !this.firsttouch){
            this.i = 0;
            this.firsttouch = true;
          } 
        }, 1000/2);
      }}
    
      
/**
     * Handles the alert state of the end boss.
     * @param {number} x - The x-coordinate.
     */
    alert(x){
        this.Boss_animate(this.path)
      
    }
 /**
     * Handles the movement of the end boss when life points are below or equal to 4.
     */
    move_endboss(){
        if( this.close_function == true && this.x < 2450 && this.life_points <= 4)
      
            this.walk_animation();
            this.chicken_walk_left();
      
    }
/**
     * Sets the movement of the end boss.
     */
setmovement(){
    
    if(this.display_walk_animation == false && this.i > 15 && this.close_function == true && this.i > 15){
     
            this.display_walk_animation = true;
     

    setInterval(() => {
        if(this.display_walk_animation == true && this.i > 15 && this.close_function == true && this.i > 15){
    if(this.x > 2380 ){
       this.chicken_walk_left()
    }
    else{
        this.chicken_walk_right()
    }
    if(this.x < 2400){
        this.y - 250;
    }
}
}, 1000);
    }
}

 /**
     * Handles the walk animation of the end boss.
     */
walk_animation(){
let Interval = setInterval(() => {
    if(this.life_points <= 4)
    this.displayanimation(this.walking_img);
    }
   , 1000/3);
   this.intervalID.push(Interval)
}

 /**
     * Handles the left movement of the end boss.
     */
chicken_walk_left(){

    this.speed =  0.015 + Math.random() + 0.025;
    this.moveleft1(this.speed);
}
 /**
     * Handles the right movement of the end boss.
     */
chicken_walk_right(){
    this.speed = -0.015 - Math.random() - 0.025;
    this.moveleft1(this.speed); 
}

 /**
     * Moves the end boss left based on the given speed.
     * @param {number} speed - The speed of the movement.
     */
moveleft1(speed){
   let Interval = setInterval(()=>{
        if(this.life_points <= 4    && this.x > this.world.charackter.x){
        this.x -= speed;
        }
    },1000/60)
    this.intervalID.push(Interval)
}
}
