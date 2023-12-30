const level1 = new level(
    /**
     * Creates an instance of Level.
     * @param {BackgroundObject[]} backgrounds - The background objects.
     * @param {Cloud[]} clouds - The clouds.
     * @param {Chicken[] | Endboss[]} enemies - The enemies.
     */
    [
      new Backgroundobject(
        "img/5_background/layers/air.png",
        -720,
        -80,
        1000,
        600,
      ),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/1.png",
        -500,
        104,
        1000,
        300,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/2.png",
        -720,
        260,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/1_first_layer/2.png",
        -540,
        -100,
        1000,
        600,
      ),
  
      new Backgroundobject("img/5_background/layers/air.png", 10, -90, 1000, 600),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/1.png",
        0,
        100,
        1000,
        300,
      ),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/2.png",
        0,
        -80,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/1.png",
        0,
        226,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/2.png",
        0,
        280,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/1_first_layer/2.png",
        -270,
        -114,
        1000,
        600,
      ),
  
      new Backgroundobject(
        "img/5_background/layers/air.png",
        740,
        -90,
        1000,
        600,
      ),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/1.png",
        720,
        100,
        950,
        320,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/1.png",
        720,
        203,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/1_first_layer/1.png",
        520,
        -130,
        1100,
        620,
      ),
  
      new Backgroundobject(
        "img/5_background/layers/air.png",
        720 * 2,
        -80,
        1000,
        600,
      ),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/1.png",
        720 * 2,
        100,
        1000,
        320,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/2.png",
        720 * 2,
        215,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/1_first_layer/2.png",
        686 * 2,
        -112,
        1100,
        600,
      ),
  
      new Backgroundobject(
        "img/5_background/layers/air.png",
        720 * 3,
        -80,
        1000,
        600,
      ),
      new Backgroundobject(
        "img/5_background/layers/2_second_layer/1.png",
        720 * 3,
        130,
        1000,
        300,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/2.png",
        720 * 3,
        255,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/3_third_layer/1.png",
        720 * 3,
        230,
        1000,
        200,
      ),
      new Backgroundobject(
        "img/5_background/layers/1_first_layer/1.png",
        670 * 3,
        -112,
        1100,
        600,
      ),
    ],
  
    [new Cloud(), new Cloud()],
  
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Endboss(),
    ],
  );
  