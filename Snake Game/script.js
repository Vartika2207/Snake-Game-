import {update as updateSnake, draw as drawSnake, snake_speed} from './snake.js'
import {update as updateFoood, draw as drawFood} from './food.js'

let lastRenderTime = 0;
const gameBoard =document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondSinceLastReder = (currentTime - lastRenderTime)/1000;
    if(secondSinceLastReder < 1/snake_speed)  return

    lastRenderTime = currentTime

    update() //update all logic fir game
    draw() //draw everythung based on update loop 
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFoood()
}

function draw(){
    gameBoard.innerHTML = '' //make out snake to move
    drawSnake(gameBoard)
    drawFood(gameBoard)
}