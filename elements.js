class Element {
    constructor(game){
        this.height = game.height;
        this.width = game.width;
        this.game = game;
        const a = Math.floor(Math.random() * 800) - 200;
        const b = Math.floor(Math.random() * 800) - 200;
        const c = Math.floor(Math.random() * 4);
        this.x = a
        this.y = b
        this.radius = 10
        const types = ["fire", "earth", "water", "air"]
        this.type = types[c]
    }
    
    draw(){
        if( this.x > -20 && this.x < 410 && this.y > -20 && this.y < 410){
            if(this.type === "fire"){
                game.context.fillStyle = "red";
            } else if (this.type === "earth"){
                game.context.fillStyle = "green";
            } else if (this.type === "water"){
                game.context.fillStyle = "blue";
            } else {
                game.context.fillStyle = "yellow"    
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