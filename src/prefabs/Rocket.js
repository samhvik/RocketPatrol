// Rocket Player Prefab
class Rocket extends Phaser.GameObjects.Sprite {
    cosntructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);

        //rocket firing status
        this.isFiring = false;

        //pixels per frame
        this.moveSpeed = 2;
    }

    update(){
        //left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width)
                this.x -= this.moveSpeed;
            else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width)
                this.x += this.moveSpeed;
        }
    }
}