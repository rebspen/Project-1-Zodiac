class Asteroid {
    constructor(game){
        this.game = game
        const a = Math.floor(Math.random() * 600)-590;
        const b = Math.floor(Math.random() * 600)-590;
        const c = Math.floor(Math.random() * 10)-15;
        const d = Math.floor(Math.random() * 10)-15;
        const e = Math.floor(Math.random() * 3);
        const f = Math.floor(Math.random() * 3);
        const arr1 =[a,c]
        const arr2 =[b,d]
        this.x= arr1[f]
        this.y = arr2[e]
        this.vx= 3
        this.vy= 2
        const widths = [0.5, 1, 0.7]
        const g = Math.floor(Math.random() * 4);
        this.width = widths[g]
        this.radius = 70 * this.width 
        this.imageToDraw = new Image();
        this.image = "Game Images/meteor.png"
    }

    draw(){
        game.context.shadowBlur = 20;
        game.context.shadowColor = "black";
        this.imageToDraw.src = this.image
        const imageHeight = this.imageToDraw.height;
        const imageWidth = this.imageToDraw.width;
        game.context.drawImage(this.imageToDraw, this.x , this.y, imageWidth * this.width , imageHeight * this.width); 
        game.context.shadowColor = "transparent";   
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
      }

    moveDown(){
        this.vy = 15
    }

    moveUp(){
        this.vy = -15
    }

    moveLeft(){
        this.vx = -15
    }

    moveRight(){
        this.vx = 15
    }
      
      
        
    
    
    
}