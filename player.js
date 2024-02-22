const player = {
    x: 250,
    y: 250,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 100,
};

const keys = {
    ArrowLeft: 'left',
    a: 'left',
    ArrowRight: 'right',
    d: 'right',
    ArrowUp: 'up',
    w: 'up',
    ArrowDown: 'down',
    s: 'down'
};

let held_keys = [];

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    var dir = keys[e.code] || keys[e.key];
    if (dir && held_keys.indexOf(dir) === -1) {
        held_keys.push(dir);
    }
});

document.addEventListener('keyup', (e) => {
    var dir = keys[e.code] || keys[e.key];
    if (dir && held_keys.indexOf(dir) > -1) {
        held_keys.splice(held_keys.indexOf(dir), 1);
    }
});


function characterMovement(delta) {
    if (held_keys.length > 0) {
        let direction = held_keys[held_keys.length - 1]; 
        let movement = delta / gameSpeedMultiplier;

        switch (direction) {
            case 'left':
                player.x -= movement * player.speed;
                break;
            case 'right':
                player.x += movement * player.speed;
                break;
            case 'up':
                player.y -= movement * player.speed;
                break;
            case 'down':
                player.y += movement * player.speed;
                break;
        }
    }
}


/*
import { gameSpeedMultiplier } from "./script.js";
// Character Movement 

const player = {
    x: 250,
    y: 250,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 100,
};


const keys = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down'
};

let held_keys = [];

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    var dir = keys[e.code];
    if (dir && held_keys.indexOf(dir) === -1) {
        held_keys.push(dir);
    }
});

document.addEventListener('keyup', (e) => {
    var dir = keys[e.code];
    if (dir && held_keys.indexOf(dir) > -1) {
        held_keys.splice(held_keys.indexOf(dir), 1);
    }
});

function characterMovement(delta) {
    if (held_keys.length > 0) {
        let direction = held_keys[held_keys.length - 1]; 
        let movement = delta / gameSpeedMultiplier;

        switch (direction) {
            case 'left':
                player.x -= movement * player.speed;
                break;
            case 'right':
                player.x += movement * player.speed;
                break;
            case 'up':
                player.y -= movement * player.speed;
                break;
            case 'down':
                player.y += movement * player.speed;
                break;
        }
    }
}

export { player, characterMovement };


// End characterMovement

*/

/*

const player = {
    x: 235,   // Set initial x sprite x starting position
    y: 1100,  // Set initial y sprite y starting position
    width: 48,
    height: 68,
    dx: 0,
    dy: 0,
    speed: 3,
    color: 'blue',
    direction: 'down',
    frame: 0,
    loaded: 0,
    sprites: {}
};


function drawPlayer() {
    ctx.drawImage(
        player.sprites[player.direction],
        player.frame * player.width,
        0,
        player.width,
        player.height,
        canvas.width / 2 - player.width / 2, // Centering the player horizontally
        canvas.height / 2 - player.height / 2, // Centering the player vertically
        player.width,
        player.height
    );
}


preloadSprites();



function preloadSprites() {
    const directions = ['Down', 'Up', 'Left', 'Right'];

    directions.forEach(direction => {
        player.sprites[direction.toLowerCase()] = new Image();
        player.sprites[direction.toLowerCase()].src = `assets/img/player${direction}.png`;
        player.sprites[direction.toLowerCase()].onload = () => {
            player.loaded++;
            if (player.loaded === directions.length) {
                loadBackgroundImage(); // Load the background image after player sprites
            }
        };
    });
}



document.addEventListener('keydown', (e) => {
    
    player.dx = 0; //Reset both dx and dy first
    player.dy = 0; //Reset both dx and dy first

        switch (e.key) {
            case 'ArrowLeft':
            case 'a':
                player.dx = -player.speed;
                player.lastLeft = -player.speed;                             
                player.direction = 'left';
                break;
            case 'ArrowRight':
            case 'd':
                player.dx = player.speed;
                player.lastRight = player.speed;
                player.direction = 'right';
                break;
            case 'ArrowUp':
            case 'w':
                player.dy = -player.speed;
                player.lastUp = -player.speed;
                player.direction = 'up';
                break;
            case 'ArrowDown':
            case 's':
                player.dy = player.speed;
                player.lastDown = player.speed;
                player.direction = 'down';
                break;
        }
    });
    

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        case 'a':
            player.dx = 0;
            player.lastLeft = 0;
            break;
        case 'ArrowRight':
        case 'd':
            player.dx = 0;
            player.lastRight = 0;           
            break;
        case 'ArrowUp':
        case 'w':
            player.dy = 0;
            player.lastUp = 0;
            break;
        case 'ArrowDown':
        case 's':
            player.dy = 0;
            player.lastDown = 0;
            break;
    }

    
}) 



;

*/