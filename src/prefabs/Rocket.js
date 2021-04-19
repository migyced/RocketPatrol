//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.isFiring = false; //track rocket's firing status
        this.moveSpeed = 1; // pexels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    } 

    preload(){
        this.load.image('particle', './assets/particle.png');
    }

    particleAnimation(){
        var particles = this.add.particles('particle');
        var emitter = particles.createEmitter();

        emitter.setPosition(this.x, this.y);
        emitter.setSpeed(400);
        emitter.setBlendMode(Phaser.BlendModes.ADD);
    }

    update(){
        //left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            }else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
            this.sfxRocket.play(); //play sfx
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
        this.particleAnimation();
        this.y = game.config.height - borderUISize - borderPadding;
    }
}