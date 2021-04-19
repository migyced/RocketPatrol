//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture,  player){
        super(scene, x, y, texture,  player);

        //add object to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.isFiring = false; //track rocket's firing status
        this.moveSpeed = 1; // pexels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    } 
    update(){
        //left/right movement
        if(this.player == 1){
            if(!this.isFiring){
                if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                    this.x -= this.moveSpeed;
                }else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                    this.x += this.moveSpeed;
                }
            }
            //fire button
            if(Phaser.Input.Keyboard.JustDown(keyUP)){
                this.isFiring = true;
                this.sfxRocket.play(); //play sfx
        }
        }else if(this.player == 2){
            if(!this.isFiring){
                if(keyA.isDown && this.x >= borderUISize + this.width){
                    this.x -= this.moveSpeed;
                }else if(keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
                    this.x += this.moveSpeed;
                }
            }//fire button
            if(Phaser.Input.Keyboard.JustDown(keyW)){
                this.isFiring = true;
                this.sfxRocket.play(); //play sfx
            }
        }
        
        
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize*3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        //reset on miss
        if(this.y <= borderUISize*3 + borderPadding){
            this.reset();
        }
    }

    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}