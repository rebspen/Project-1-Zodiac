class Asteroid {
    constructor(game){
        this.game = game
        const a = Math.floor(Math.random() * 800) - 400;
        const b = Math.floor(Math.random() * 800) - 400;
        this.x= 25
        this.y = 25
        this.vx= 5
        this.vy= 2
        this.imageToDraw = new Image();
        this.image = "Game Images/meteor.png"
    }

    draw(){
        this.imageToDraw.src = this.image
        const imageHeight = this.imageToDraw.height;
        const imageWidth = this.imageToDraw.width;
        game.context.drawImage(this.imageToDraw, this.x , this.y, imageWidth , imageHeight);
        
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > 800 || this.y + this.vy < -800) {
        this.vy *= -1;
      }
      if (this.x + this.vx > 800 || this.x + this.vx < -800) {
        this.vx *= -1;
      }
      }
      
      
        
    
    
    
}