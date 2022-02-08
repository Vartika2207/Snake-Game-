const grid_size = 21;//size of grid is 21 x 21

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * grid_size) + 1,//b/w 0+1 to 20+1
        y: Math.floor(Math.random() * grid_size) + 1//b/w 0+1 to 20+1
    }
}

export function outsideGrid(position){
    return (position.x < 1 || position.x > grid_size || position.y < 1 || position.y > grid_size)
}