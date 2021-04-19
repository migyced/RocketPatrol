//
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, PlayEasy]
}

let game = new Phaser.Game(config);
let keyUP, keyR, keyLEFT, keyRIGHT, keyW, keyA, keyD;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize /3;