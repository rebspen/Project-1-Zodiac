class Element {
    constructor(game){
        this.height = game.height;
        this.width = game.width;
        this.game = game;
        const a = Math.floor(Math.random() * 800) - 200;
        const b = Math.floor(Math.random() * 800) - 200;
        const c = Math.floor(Math.random() * 4);
        this.x = a
        this.vx = 1
        this.vy = 0
        this.y = b
        this.radius = 10
        const types = ["fire", "earth", "water", "air"]
        this.type = types[c]
        this.imageToDraw = new Image();
        this.image = "" 
    }
    
    draw(){
        if( this.x > -20 && this.x < 410 && this.y > -20 && this.y < 410){
            if(this.type === "fire"){
                this.image = "Game Images/fire.png";
            } else if (this.type === "earth"){
                this.image = "Game Images/leaf (1).png";
            } else if (this.type === "water"){
                this.image = "Game Images/raindrop.png";
            } else {
                this.image = "/Game Images/cloud.png"    
            }
            this.imageToDraw.src = this.image
            const imageHeight = this.imageToDraw.height;
            const imageWidth = this.imageToDraw.width;
            game.context.drawImage(this.imageToDraw, this.x , this.y, imageWidth *0.2, imageHeight * 0.2);
            
        }
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
    }
    
    moveDown(){
        this.vy = 5
    }

    moveUp(){
        this.vy = -5
    }

    moveLeft(){
        this.vx = -5
    }

    moveRight(){
        this.vx = 5
    }
}