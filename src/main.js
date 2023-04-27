/*
Luca Stubbe
*Rocket 2023*
10 hours, started 10:30am

100 pts
Randomize each spaceship's movement direction at the start of each play (5)
Display the time remaining (in seconds) on the screen (10)
Create a new title screen (e.g., new artwork, typography, layout) (10)
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15 pts)
Implement an alternating two-player mode (15 pts)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15 pts)
Implement mouse control for player movement and mouse click to fire (15 pts)
Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (15 pts)

*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;