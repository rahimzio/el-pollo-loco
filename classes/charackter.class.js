/**
 * Represents the game character, extending the movable object class.
 * @extends movableobject
 */
class Charackter extends movableobject {
  height = 210;
  width = 230;
  y = 210;
  jump = 50;
  speed = 13.5;
  speed_y = 0;
  coin = 0;
  accelaration = 2.25;
  sleepyTimer = 0;
  loongIdleTimer = false;
  isSleeping = false;
  reset_game = false;
  salsa = false;
  isJumpings = false;
  isAlive = true;
  isColliding = false;
  isWalking = false;
  saw_boss = false;

  offset = {
    top: 120,
    left: 30,
    right: 40,
    bottom: 30,
  };
  gameover = ["img/9_intro_outro_screens/game_over/game over!.png"];

  sleep = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  stand = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  path = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  jumpimg = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  deadimg = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  hurt = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  currentimg = 0;
  world;
  otherDirection = false;
  walkingsound = new Audio("audio/walkingsound.mp3");
  hurtSound = new Audio("audio/male-hurt-sound-95206.mp3");


   /**
   * Creates an instance of Charackter.
   * The character has various properties such as height, width, and position.
   * It also has characteristics related to movement, animation, and game state.
   */

  constructor() {
    super();
    this.loadimg("img/2_character_pepe/1_idle/idle/I-1.png");
    this.saw_boss = false;
    this.x = 200;
    this.loadimgcache(this.path);
    this.loadimgcache(this.jumpimg);
    this.loadimgcache(this.deadimg);
    this.loadimgcache(this.hurt);
    this.loadimgcache(this.stand);
    this.loadimgcache(this.sleep);
    this.loadimgcache(this.gameover);
    this.animate_charackter();
    this.apllygravity();
  }

   /**
   * Applies gravity to the character, simulating vertical movement.
   */

  apllygravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speed_y > 0) {
        this.last_y = this.y;
        this.y -= this.speed_y;
        this.speed_y -= this.accelaration;
      }
    }, 1000 / 25);
  }

  /**
   * Checks for various character actions based on keyboard input.
   */
  check() {
    this.jumpup();
  }

  /**
   * Resets the positions of the chicken enemies in the game world.
   */
  reset_chicken() {
    for (let i = 0; i < 15; i++) {
      this.world.enemies[i].reset();
    }
  }
/**
   * Plays the hurt sound of the character.
   */
  playHurtSound(){
    this.hurtSound.play()
  }
/**
   * Initiates the death animation of the character.
   */
  death_animation(){
    this.displayanimation(this.deadimg);
    this.world.gameisover.gameending(this.x);
    this.isAlive = false;
  }

   /**
   * Animates the character based on its state, such as walking, jumping, hurting, or idling.
   */

  animate_charackter() {
    setInterval(() => {
  
      if(this.dead()){
        this.animate_charackter_death();
              }else if(this.isJumpings ){
        this.animate_charackter_jumping();
      }
      else if((this.ishurt()) && (this.isAlive == true) ){
        this.animate_charackter_hurt();
      }else if(this.isWalking) {
        this.displayanimation(this.path);
        this.sleepyTimer = 0;
      }else if(this.sleepyTimer > 3000){
        this.animate_charackter_sleep();
      }else{
        this.animate_charackter_sleepreset();
              }

      if ( 
        !this.world.keyboard.space == true &&
        !this.world.keyboard.left == true &&
        !this.world.keyboard.right == true &&
        !this.world.keyboard.down == true
      ) {
        this.isWalking = false
    }
  
    }, 100);
    setInterval(() => { 
   

      this.walkingsound.pause();
      if (this.life > 0) {
        if (this.world.keyboard.right && this.x < level1.levelendx && this.x < this.world.enemies[15].x) {
          this.animate_charackter_iswalking();
        }
        if (this.world.keyboard.left && this.x > 0 && this.x < this.world.enemies[15].x) {
          this.animate_charackter_iswalking_left();
        }

        if (this.world.keyboard.space) {
          this.salsa = true;
        }
        if (!this.world.keyboard.space) {
          this.salsa = false;
        }

        if (this.world.keyboard.jump && !this.isAboveGround()) {
          this.speed_y = 25.5;
        }
        
        if(this.isAboveGround()){
          this.isJumpings = true;
        }
        if(!this.isAboveGround()){
          this.isJumpings = false;
        }

        this.world.camera_x = -this.x + 150;
      }
    }, 5000 / 60);
  }

animate_charackter_iswalking_left(){
    this.x -= this.speed;
    this.otherDirection = true;
    if(this.world.soundOn == true){
      this.walkingsound.play();
    }
    this.isWalking = true;
  }

  animate_charackter_iswalking(){
    this.x += this.speed;
    this.isWalking = true
    this.otherDirection = false;
    if(this.world.soundOn == true){
      this.walkingsound.play();
    }
  }

  animate_charackter_death(){
    this.death_animation();
    this.sleepyTimer = 0;
  }

  animate_charackter_jumping(){
    this.displayanimation(this.jumpimg)
        this.sleepyTimer = 0;
  }

  animate_charackter_hurt(){
  this.displayanimation(this.hurt)
  this.sleepyTimer = 0;
  }

  animate_charackter_walking(){
    this.displayanimation(this.path);
    this.sleepyTimer = 0;
  }

  animate_charackter_sleep(){
    this.displayanimation(this.sleep)
    this.isWalking == false
  }

  animate_charackter_sleepreset(){
    this.sleepyTimer += 150
    this.displayanimation(this.stand);
    this.isWalking == false;
  }
   /**
   * Checks if the character is dead based on its life points.
   * @returns {boolean} - A boolean indicating whether the character is dead.
   */

  dead(){
    if ((this.life == 0) || (this.life < 0)) {
      this.world.gameisover.gameending(this.x);
      return true;
    }
  }
}