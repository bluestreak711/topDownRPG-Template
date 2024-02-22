const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gameSpeed = 1; // Game speed multiplier (1 = normal speed, 2 = double speed, etc.)
const timeElapsed = 1000; // Time elapsed in milliseconds
const gameSpeedMultiplier = timeElapsed / gameSpeed;

let fps = 60; // Frames per second



const aspectRatio = {
    width: 16,
    height: 9
}

const areaMap = {
    width: 35,
    height: 18
}

const tileBlock = {
    width: 64,  //64px or 2 tiles
    height: 64  //64px or 2 tiles
}

/*
*/
const camera = {
    x: 0,
    y: 0,
    width: aspectRatio.width * tileBlock.width, // This is 1024px
    height: aspectRatio.height * tileBlock.height // This is 576px
}

// Variable to force tiles down to 8px and use the zoom at 8 to make the tile size 64px.
// width = 35 (25 walkable) tileBlocks wide. Must convert hight to tileBlocks
// height = Map can be 18 (12 walkable) tileBlcoks high

canvas.width = areaMap.width * tileBlock.width;   // Measured in tileBlocks
canvas.height = areaMap.height * tileBlock.height;   // Measured in tileBlocks

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

let lastTimestamp = 0;
let fpsInterval = gameSpeedMultiplier / fps;

let framesThisSecond = 0; // Tracks frames per second
let lastFpsUpdate = 0;

function gameLoop(timestamp) {
    framesThisSecond++;
    let elapsed = timestamp - lastTimestamp;

    if (elapsed > fpsInterval) {
        lastTimestamp = timestamp - (elapsed % fpsInterval);

        update(elapsed);
        draw();
    }

    if (timestamp > lastFpsUpdate + timeElapsed) { // Update FPS every second
        fps = 0.25 * framesThisSecond + 0.75 * fps; // Weighted average for smoothing
        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
        fpsDisplay.innerHTML = `FPS: ${fps.toFixed(5)}`;
    }

    requestAnimationFrame(gameLoop);
}

function update(delta) {
    
    characterMovement(delta);
}

requestAnimationFrame(gameLoop);
