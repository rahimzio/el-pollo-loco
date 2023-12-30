let canvas;
let ctx;
let world; 
let keyboard = new Keyboard();
let visible = false;
let leftButton;
let rightButton;
let jumpButton;
let turnphone;
let throwButton;
let soundOn = false;
let backgroundSound = new Audio("audio/europe-travel-119948.mp3");

/**
 * Initializes the game by setting up the canvas, creating a world, and adding buttons.
 */
function init(){
canvas = document.getElementById('canvas');   
    
world = new first_world(canvas);
add_bnt();
world.draw(canvas);
}

/**
 * Toggles the game sound on and off, updating the UI accordingly.
 */
function TurnSoundOn(){
if(soundOn == false){
  world.soundOn = true;
  soundOn = true;
  //world.playbackgroundSound();
  let ear = document.getElementById("ear");
  ear.src = "img/img/ear.svg";
  playbackgroundSound();
}else{
  let ear = document.getElementById("ear");
  ear.src = "img/img/ear (1).svg";
  world.soundOn = false;
  soundOn = false;
  playbackgroundSound();
  //world.playbackgroundSound();
}
}

/**
     * Plays or pauses the background sound based on the provided boolean value.
     * @param {boolean} boolean - A boolean value indicating whether to play (true) or pause (false) the background sound.
     */
function playbackgroundSound(){
  if (soundOn) {
    backgroundSound.play();
  } else {
    backgroundSound.pause();
  }
}

/**
 * Monitors the game state and displays the end screen or game over button accordingly.
 */
function endscreen(){
  setInterval(() => {
   if(level1.enemies[15].life_points == 0){
      let png = document.getElementById('end_screen');
      png.classList.remove('d-none');
      png.classList.add('display_ff');
     }
   if(world.game_over == true ){
    let png = document.getElementById('game_over_bnt');
      png.classList.remove('d-none');
     // png.classList.add('display_ff');
   }else{
    let png = document.getElementById('game_over_bnt');
      png.classList.add('d-none');
   }
  }, 100);
  }

/**
 * Adds event listeners for touch controls and updates the button state accordingly.
 */

function add_bnt(){
 leftButton = document.getElementById('game_image_2');
 rightButton = document.getElementById('game_image_1');
 jumpButton = document.getElementById('game_image_3');
 throwButton = document.getElementById('game_image_4'); 


/**
 * Updates the state of buttons based on touch events.
 * @param {string} button - The name of the button being pressed.
 */
 
function updateButtonState() {
  keyboard.left = buttonState.left;
  keyboard.right = buttonState.right;
  keyboard.jump = buttonState.jump;
  keyboard.throw = buttonState.throw;
}

let buttonState = {
  left: false,
  right: false,
  jump: false,
  throw: false
};



function handleButtonDown(button) {
  buttonState[button] = true;
  updateButtonState();
}

/**
 * Updates the state of buttons based on touch events.
 * @param {string} button - The name of the button being released.
 */
function handleButtonUp(button) {
  buttonState[button] = false;
  updateButtonState();
}

/**
 * Event handler for touchend on the left button, releasing the right direction.
 */
leftButton.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevent default behavior
  keyboard.left = true;
});

leftButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent default behavior
  keyboard.left = false;
});

/**
 * Event handler for touchend on the right button, releasing the right direction.
 */
rightButton.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevent default behavior
  keyboard.right = true;
});

rightButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent default behavior
  keyboard.right = false;
});

/**
 * Event handler for touchend on the jump button, ending the jump action.
 */
jumpButton.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevent default behavior
  buttonState.jump = true;
  updateButtonState();
});

jumpButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent default behavior
  buttonState.jump = false;
  updateButtonState();
});

throwButton.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevent default behavior
  buttonState.throw = true;
  world.keyboard_throw = true;
  updateButtonState();
});

/**
 * Event handler for touchend on the throw button, ending the throw action.
 */
throwButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent default behavior
  buttonState.throw = false;
  world.keyboard_throw = false;
  updateButtonState();
});

/**
 * Initializes the game and sets up event listeners on document load.
 */

document.addEventListener('DOMContentLoaded', function () {
  init();
  checkMaxWidth();
  window.addEventListener('resize', checkMaxWidth);
});
/**
 * Initializes the game by displaying the end screen, resetting enemies, and creating a new world.
 */
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
/**
 * Hides the end screen, resets enemies, and creates a new world for continuing the game.
 */
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
/**
 * Checks if the character is dead and displays the appropriate UI elements.
 */
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

/**
 * Displays the game elements directly without showing the start button.
 */

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

  endscreen();
}
/**
 * Toggles the visibility of game direction elements.
 */
function display_c(){
  if(visible == false){
   show();
}
else{
  vanish();
}
}
/**
 * Shows the game direction elements.
 */
function show(){
  let directions = document.getElementById('direction');
  directions.style.background = "white";
  directions.style.zIndex = "3" ;
  directions.classList.remove('d-none');
  visible = true;
}

/**
 * Hides the game direction elements.
 */
function vanish(){
  let directions = document.getElementById('direction');
  directions.classList.add('d-none');
  directions.style.zIndex = "-2" ;
  visible = false;
}

/**
 * Exits full screen mode using the appropriate API based on browser support.
 */

function exitFullScreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
  }
}

/**
 * Event handler for window resize, checking and updating the game elements based on the window size.
 */
window.addEventListener('resize', function () {
  checkMaxWidth();
});

/**
 * Event handler for window load, checking and updating the game elements based on the window size.
 */

window.onload = function () {
  checkMaxWidth();
};


/**
 * Shows the game control buttons.
 */
function show_crt(){
  for(let i = 1; i < 5; i ++){
   document.getElementById('game_image_'+`${i}`).classList.remove('d-none');
 
  }
}

/**
 * Hides the game control buttons.
 */

function dont_show_crt(){
  for(let i = 1; i < 5; i ++){
   document.getElementById('game_image_'+`${i}`).classList.add('d-none');
  }
}

/**
 * Checks the maximum width of the window and adjusts game elements accordingly.
 */
function checkMaxWidth() {
  setInterval(() => {
  if (window.innerWidth <= 990 && window.innerHeight <=440) {
    //openFullScreen();
    show_crt();
    let turnPhoneImg = document.getElementById("turnPhoneImg");
    turnPhoneImg.classList.add("d-none");
    turnphone = true;
    let canvas =  document.getElementById("canvas");
    canvas.classList.remove("d-none")
    }
    if(window.innerWidth <= 661 && window.innerWidth < window.innerHeight){
      let canvas =  document.getElementById("canvas");
      dont_show_crt();
      let turnPhoneImg = document.getElementById("turnPhoneImg");
      turnPhoneImg.classList.remove("d-none");
      turnphone = false;
      canvas.classList.add("d-none")
    }
   
}, 100);
}
 
  /**
 * Opens the game in full-screen mode using the appropriate API based on browser support.
 */
  function openFullScreen() {
    let content = document.getElementById('gamefield');  
    if (content.requestFullscreen) {
      content.requestFullscreen();
    } else if (content.mozRequestFullScreen) {
      content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) {
      content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) {
      content.msRequestFullscreen();
  }
}

/**
 * Event handler for window load, initializing the game and setting up event listeners.
 */
window.addEventListener('DOMContentLoaded', function () {
  init();
  checkMaxWidth();

  window.addEventListener('resize', checkMaxWidth);
});

/**
 * Event handler for keydown, updating the keyboard state based on key codes.
 * @param {KeyboardEvent} e - The keydown event object.
 */

window.addEventListener("keydown",(e) =>{
  if(e.keyCode == 65){
    keyboard.left = true;
  }

  if(e.keyCode == 68){
    keyboard.right = true;
  }

  if(e.keyCode == 87){
    keyboard.jump = true;
  }

  if(e.keyCode == 83){
    keyboard.down = true;
  }

  if(e.keyCode == 32){
    keyboard.space = true;
  }

  if(e.keyCode == 32){
    keyboard.throw = true;
  }
})

/**
 * Event handler for keyup, updating the keyboard state based on key codes.
 * @param {KeyboardEvent} e - The keyup event object.
 */

window.addEventListener("keyup",(e) =>{
  
  if(e.keyCode == 65){
    keyboard.left = false;
  }

  if(e.keyCode == 68){
    keyboard.right = false;
  }

  if(e.keyCode == 87){
    keyboard.jump = false;
  }

  if(e.keyCode == 83){
    keyboard.down = false;
  }

  if(e.keyCode == 32){
    keyboard.space = false;
  }

  if(e.keyCode == 32){
    keyboard.throw = false;
  }
})
