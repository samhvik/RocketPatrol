let config = {
    type: Phaser.CANVAS,
    width: 648,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

//UI Settings
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 4;

//reserve keyboard bindings
let KeyF, keyR, keyLEFT, keyRIGHT;