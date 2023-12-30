let canvas;
let ctx;
let world; 
let keyboard = new Keyboard();
let visible = false;
let leftButton;
let rightButton;
let jumpButton;
let throwButton;


function init(){
  endscreen();
canvas = document.getElementById('canvas');   
    
world = new first_world(canvas);
add_bnt();
world.draw(canvas);

bnt_state(); 
}

function endscreen(){
  setInterval(() => {
    if(level1.enemies[15].life_points == 0){
      let png = document.getElementById('end_screen');
      png.classList.remove('d-none');
      png.classList.add('display_ff');
     }
  }, 1000);

}


function start(){

  let png = document.getElementById('end_screen');
  png.classList.remove('d-none');

  for(let i = 0; i < 15; i++){
  level1.enemies[i].reset()
  
  }
  canvas = document.getElementById('canvas');
      
  world = new World(canvas, keyboard);

  world.draw(canvas);

  world.endboss_statusbar.reset();
    world.endboss_icon.reset()

    world.reset();

  let start = world.gamestart
  start.check()
}

function display_c_bnt(){ 

  let png = document.getElementById('end_screen');
  png.classList.add('d-none');
  png.classList.remove('display_ff');
 
  let directions = document.getElementById('start_bnt');
  directions.classList.add('d-none');
  let canvas = document.getElementById('canvas');
  
  for(let i = 0; i < 16; i++){
    level1.enemies[i].reset()
    }

  world = new World(canvas, keyboard);

  world.draw(canvas);

  world.endboss_statusbar.reset();
    world.endboss_icon.reset()

  let start = world.gamestart
  start.check();

  world.endboss_statusbar.reset();
  world.endboss_icon.reset()


}

function display_c_dead(){
  if(world.charackter.isAlive == false){
  let directions = document.getElementById('start_bnt');
  directions.classList.add('d-none');
  directions.classList.remove('display_ff');
  

  let canvas = document.getElementById('canvas');
  
  for(let i = 0; i < 16; i++){
    level1.enemies[i].reset()
    }

  world = new World(canvas, keyboard);

  world.draw(canvas);

  world.endboss_statusbar.reset();
    world.endboss_icon.reset()

  let start = world.gamestart
  start.check();

  world.endboss_statusbar.reset();
  world.endboss_icon.reset()
  }
}


function display_c_bnt_direct(){
  let directions = document.getElementById('start_bnt');
  directions.classList.add('d-none');
  let canvas = document.getElementById('canvas');
  
  for(let i = 0; i < 16; i++){
    level1.enemies[i].reset()
    }

  world = new World(canvas, keyboard);

  world.draw(canvas);

  world.endboss_statusbar.reset();
    world.endboss_icon.reset()

  let start = world.gamestart
  start.check();

  world.endboss_statusbar.reset();
  world.endboss_icon.reset()
}
