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
    this.radius = 15
    const types = ["diamond", "emerald"]
    this.type = types[c]
    }

    draw(){
        if( this.x > -20 && this.x < 410 && this.y > -20 && this.y < 410){
            if(this.type === "diamond"){
                game.context.fillStyle = "black";
            } else {
                game.context.fillStyle = "purple";
            }
            game.context.beginPath();
            game.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            game.context.closePath();
            game.context.fill();
        }
    }

    moveDown(){
        this.y += 20
    }

    moveUp(){
        this.y -= 20
    }

    moveLeft(){
        this.x -= 20
    }

    moveRight(){
        this.x += 20
    }
}