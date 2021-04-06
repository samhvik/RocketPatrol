let config = {
    type: Phaser.CANVAS,
    width: 648,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);