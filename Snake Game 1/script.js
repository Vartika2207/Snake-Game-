import {update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFoood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0;
const gameBoard =document.getElementById('game-board')
let gameOver =false;


function main(currentTime){
    if(gameOver){
        if(confirm('You lost!! Press ok to restart')){
            window.location = '/' //equal current location we are on, will restart the page
        }
        return //on same state
    }
    
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
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = '' //make out snake to move
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}