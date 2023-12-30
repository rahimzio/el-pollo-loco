class level {
  
    levelendx = 2500;

    backgrounds;

    clouds;

    enemies;

    /**
     * Creates a new level with the specified backgrounds, clouds, and enemies.
     * @param {Array<Background>} backgrounds - The background elements of the level.
     * @param {Array<Cloud>} clouds - The cloud elements of the level.
     * @param {Array<Enemy>} enemies - The enemy elements of the level.
     */
    constructor(backgrounds, clouds, enemies) {
        this.backgrounds = backgrounds;
        this.clouds = clouds;
        this.enemies = enemies;
    }
}