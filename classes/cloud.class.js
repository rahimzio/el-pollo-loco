/**
 * Represents a cloud object, extending the movable object class.
 * @extends movableobject
 */
class Cloud extends movableobject {
  /**
   * Creates an instance of Cloud.
   * A cloud is a specific type of movable object in the game, with a random initial x-coordinate, a fixed y-coordinate,
   * and specific width and height.
   */
  constructor() {
      super(); // Call the constructor of the parent class (movableobject)
      this.x = Math.random() * 500;
      this.y = -10;
      this.width = 400;
      this.height = 400;
      this.loadimg("img/5_background/layers/4_clouds/1.png");
      this.increase();
  }

  /**
   * Increases the x-coordinate of the cloud, creating a movement effect.
   * The x-coordinate is periodically decreased to simulate the cloud moving from right to left.
   */
  increase() {
      setInterval(() => {
          this.x -= 0.5;
          if (this.x < -0) {
              this.x = 100;
          }
      }, 1000 / 60);
  }
}