import {onSnake, expandSnake} from './snake.js'

let food = {x: 10, y: 1}
const expansion_rate = 1;//how much snake grow as it eat

export function update(){
   if(onSnake(food)){
       expandSnake(expansion_rate)
       food = {x: 20, y: 10}
   }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}