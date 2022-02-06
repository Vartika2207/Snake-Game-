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

export function onSnake(position){
    //checks if this position on the snake
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return (pos1.x == pos2.x && pos1.y == pos2.y) 
}