import { getInputDirection } from "./input.js";

export const snake_speed = 5//move per scond
const snakeBody = [
    {x: 10, y: 11}
    // {x: 11, y: 11},
    // {x: 12, y: 11},
    // {x: 13, y: 11}
]
let newSegments = 0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i=snakeBody.length-2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
     // segment is each piece of snake(block)
       const snakeElement = document.createElement('div')
       snakeElement.style.gridRowStart = segment.y;
       snakeElement.style.gridColumnStart = segment.x;
       snakeElement.classList.add('snake')
       gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    //checks if this position on the snake
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index == 0) return false; //ignore snakeHead[0]
        return equalPositions(segment, position)
  })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true}) //to ignore snakeBody[0] checking snamkeBody[0]
}

function equalPositions(pos1, pos2){
    return (pos1.x == pos2.x && pos1.y == pos2.y) 
}

function addSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })  //adding duplicaate block as it expand
    }

    newSegments = 0
}