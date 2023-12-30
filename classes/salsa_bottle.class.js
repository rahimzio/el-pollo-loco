/**
 * Represents a collectible bottle in the game, extending the Drawdown class.
 */
class Bootle_to_collect extends Drawdown{
   /**
     * The width of the collectible bottle.
     * @type {number}
     */
   width = 100;

   /**
    * The height of the collectible bottle.
    * @type {number}
    */
   height = 80;

   /**
    * The unique identifier for the collectible bottle.
    * @type {number}
    */
   id;

   /**
    * The file path to the image representing the collectible bottle.
    * @type {string}
    */
   path = 'img/6_salsa_bottle/salsa_bottle.png';


      /**
     * Creates an instance of the Bootle_to_collect class.
     * @param {number} x - The x-coordinate of the collectible bottle.
     * @param {number} y - The y-coordinate of the collectible bottle.
     * @param {number} id - The unique identifier for the collectible bottle.
     */
    constructor(x,y,id){
        super()
        this.x = x;
        this.y = y;
        this.id = id;
        this.loadimg('img/6_salsa_bottle/salsa_bottle.png');
    }


     /**
     * Simulates the action of collecting the bottle, moving it upward.
     */
    collected(){
        this.y -= 500; 
    }

    
}