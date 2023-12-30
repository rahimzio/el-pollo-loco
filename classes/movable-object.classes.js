/**
 * Represents a movable object in the game, extending the Drawdown class.
 */
class movableobject extends Drawdown{
   /**
     * The life points of the movable object.
     * @type {number}
     */
   life = 100;

   /**
    * The new y-coordinate of the movable object.
    * @type {number}
    */
   new_y;

   /**
    * Reference to the world in which the movable object exists.
    * @type {World}
    */
   world;

   /**
    * The last y-coordinate of the movable object.
    * @type {number}
    */
   last_y;

   /**
    * The timestamp of the last hit on the movable object.
    * @type {number}
    */
   last_hit = 0;

   /**
    * The offset values for collision detection.
    * @type {{top: number, left: number, right: number, bottom: number}}
    */
   offset = {
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
   };

/**
     * Moves the object to the left with a given speed.
     * @param {number} speed - The speed at which the object moves to the left.
     */
    moveleft(speed){
    setInterval(()=>{
    this.x -= speed;
    },1000/60)}

   
/**
     * Animates the movable object by cycling through images.
     */
    animate(){
        setInterval(()=>{
            let i = this.currentimg % this.path.length;
            let path = this.path[i];
            this.img = this.imgcache[path];
            this.currentimg ++;
        },10000/60);
    }
/**
     * Reduces the life points of the movable object and sets the last hit timestamp.
     */
    hit(){
        this.life -= 20;
        if(this.life < 0){
            this.life == 0;
        }
        else{
            this.last_hit = new Date().getTime();
        }
       
    }
 /**
     * Checks if the movable object is hurt based on the time passed since the last hit.
     * @returns {boolean} - True if the object is hurt, false otherwise.
     */
    ishurt(){
        let timepassed = new Date().getTime() - this.last_hit;
         timepassed = timepassed / 1000;
         return timepassed < 2 ;
    }
/**
     * Increases the coin count of the movable object (if applicable).
     * @param {Charackter} charackter - The character associated with the movable object.
     */
    gotcoin(charackter){
        if(this.coin > 0){
        this.coin += 20;}
        //charackter.ishurt()
    }
/**
     * Checks if the movable object is dead (has zero or negative life points).
     * @returns {boolean} - True if the object is dead, false otherwise.
     */
    isdead(){
       return (this.life == 0) || (this.life < 0) ;
    }

 /**
     * Checks if the object is above the ground (for gravity calculations).
     * @returns {boolean} - True if the object is above the ground, false otherwise.
     */
    isAboveGround(){
        if( this instanceof Throwobj){
            return true ;
        }
        else{
        return  this.y < 202;
        }
      }
 /**
     * Checks if the object is falling.
     * @returns {boolean} - True if the object is falling, false otherwise.
     */
    isFalling(){
        this.stop = 0;
        this.new_y = this.y ;
        setInterval(() => {
            if(this.y > this.new_y){
                //console.log(this.new_y, this.y)
                if(this.stop > 6){
                    this.new_y += 100000;
                }
          this.stop ++;
          return true;
          }else
          {
            return false
          }
        }, 1000);
    }
      
/**
     * Applies gravity to the object's vertical position.
     */
    apllygravity(){
        setInterval(() => {
          if( this.isAboveGround() || this.speed_y > 0 ){
          this.y -= this.speed_y;
          this.speed_y -= this.accelaration;}
        }, 1000/25);
      }
  /**
     * Simulates the action of throwing an object (e.g., a bottle).
     */
      throw(){
          setInterval(() => {
              if(this.keyboard.down ){
                  let bottle = new Throwobj(this.charackter.x + 100, this.charackter.y + 100);
                  this.bottles.push(bottle);
                  
              }
          }, 1000);
        }
    

       
 /**
     * Checks if the object is colliding with another game object.
     * @param {movableobject} mo - The game object to check for collision.
     * @returns {boolean} - True if a collision occurs, false otherwise.
     */
    iscolliding(mo){
       if(mo instanceof Charackter){
        return  - this.x + this.width > mo.x - 100 &&
        this.y + this.height > mo.y  &&
        this.x   < mo.x - 100 &&
        this.y   < mo.y + mo.height ; 
       }
       if(mo instanceof Bootle_to_collect){
        return this.x + 20 + this.width - 80 > mo.x + 30 &&
        this.y + 72 + this.height - 60 > mo.y   &&
        this.x + 20 < mo.x + 30  &&
        this.y + 72 < mo.y + mo.height  ; 
       }
       if(mo instanceof Coins){
        return this.x + 20 + this.width - 80 > mo.x + 90 &&
        this.y + 72 + this.height - 60 > mo.y - 70  &&
        this.x + 20 < mo.x + 90 &&
        this.y + 72 < mo.y - 70 + mo.height - 170  ; 
       }
       if(mo instanceof Chicken){
        return this.x + this.width - 30 > mo.x + 30&&
        this.y + this.height > mo.y &&
        this.x + 30 < mo.x &&
        this.y < mo.y + mo.height; 
       }
       if(mo instanceof Endboss){
        return this.x + this.width - 100 > mo.x &&
        this.y + this.height > mo.y &&
        this.x -  150 < mo.x  &&
        this.y < mo.y + mo.height; 
       }
       else{
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height 
    }
}

displayanimation(images) {
    let i = this.currentimg % images.length;
    let path = images[i];
    this.img = this.imgcache[path];
    this.currentimg++;
  }

 /**
     * Checks if the object is on top of another game object.
     * @param {movableobject} mo - The game object to check.
     * @returns {boolean} - True if the object is on top of the specified game object, false otherwise.
     */
    on_top(mo) {
        return (
            this.y + this.height +20 >= mo.y &&
            this.y + this.height + 20 <= mo.y + mo.height &&
            this.x +30 + this.width -100 > mo.x &&
            this.x < mo.x +30 + mo.width -100
        );
    }
    }
