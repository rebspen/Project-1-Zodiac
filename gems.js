class Gem {
    constructor(game){
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    const a = Math.floor(Math.random() * 800) - 200;
    const b = Math.floor(Math.random() * 800) - 200;
    const c = Math.floor(Math.random() * 2);
    this.x = a
    this.y = b
    this.vx = 0
    this.vy = 1
    this.radius = 15
    const types = ["diamond", "emerald"]
    this.type = types[c]
    this.imageToDraw = new Image();
    this.image = ""

    }

    draw(){
        if( this.x > -20 && this.x < 410 && this.y > -20 && this.y < 410){
            if(this.type === "diamond"){
                this.image = "Game Images/diamond.png";
            } else {
                this.image = "Game Images/emerald.png";
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