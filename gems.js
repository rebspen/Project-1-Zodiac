class Gem {
    constructor(game){
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    const a = Math.floor(Math.random() * 800) - 200;
    const b = Math.floor(Math.random() * 800) - 200;
    const c = Math.floor(Math.random() * 11);
    this.x = a
    this.y = b
    this.vx = 0
    this.vy = 1
    this.radius = 15
    const types = ["diamond", "emerald", "ruby", "carnelian", "peridot", "sapphire", "opal", "topaz", "lapiz", "amethyst", "moonstone"]
    this.type = types[c]
    this.imageToDraw = new Image();
    this.image = ""

    }

    draw(){
        if( this.x > -20 && this.x < 510 && this.y > -20 && this.y < 510){
            if(this.type === "diamond"){
                this.image = "Game Images/diamond.png";
            } else if(this.type === "emerald") {
                this.image = "Game Images/emerald.png";
            } else if(this.type === "ruby") {
                this.image = "Game Images/ruby.png";
            } else if(this.type === "carnelian") {
                this.image = "Game Images/carnelian.png";
            } else if(this.type === "peridot") {
                this.image = "Game Images/peridot.png";
            } else if(this.type === "sapphire") {
                this.image = "Game Images/sapphire.png";
            } else if(this.type === "opal") {
                this.image = "Game Images/opal.png";
            } else if(this.type === "topaz") {
                this.image = "Game Images/topaz.png";
            } else if(this.type === "lapiz") {
                this.image = "Game Images/lapiz.png";
            } else if(this.type === "amethyst") {
                this.image = "Game Images/amethyst.png";
            } else if(this.type === "moonstone") {
                this.image = "/Game Images/moonstone.png";
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