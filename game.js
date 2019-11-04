class Game {
    constructor($canvas , num){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.num = num;
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.starsign = new Starsign(num, this);
        this.starsign.getStarSignAttributes(this.num);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.elements = [];
        this.gems = [];
        this.elementTimer = 0
        this.speed = 300
        this.gemTimer = 0
        this.gemspeed = 1000
        this.interval;
        this.score = 0
        this.highScore = 0
        this.scoreboard = new Scoreboard(this)
    }
    
    start(){
        this.animation();
        //this.interval = setInterval(this.updateElements.bind(this), 500);
        
        // setTimeout(clearInterval(this.interval), 2000)
        
    }
    
    animation (timestamp) {
        this.drawEverything();
        this.updateElements(timestamp)
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }
    
    drawEverything(){
        this.context.clearRect(0, 0, 400, 400);
        this.drawGrid()
        this.starsign.draw()
        this.scoreboard.draw()
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].draw();
        }   
        for (let i = 0; i < this.gems.length; i++) {
            this.gems[i].draw();
        }   
    }
    
    updateElements(timestamp){
        if (this.elements !== []){
            if (this.elements.length > 25){
                this.elements.splice(0,1);
            }
        }
        
        if (this.elements.length < 40){
            if(this.elementTimer < timestamp - this.speed){
                this.elements.push(new Element(this));
                this.elementTimer = timestamp;
            }
            
            if (this.gems !== []){
                if (this.gems.length > 6){
                    this.gems.splice(0,1);
                }
            }
            
            if (this.gems.length < 8){
                if(this.gemTimer < timestamp - this.gemspeed){
                    this.gems.push(new Gem(this));
                    this.gemTimer = timestamp;
                }
            }
            
            for (let i = 0; i < this.elements.length; i++) {
                if (this.starsign.checkCollision(this.starsign, this.elements[i])) {
                    const ele = this.elements[i].type;
                    const value = this.starsign.element[ele];
                    this.score += value ;
                    this.elements.splice(i, 1);
                }
            }
            
            for (let i = 0; i < this.gems.length; i++) {
                if (this.starsign.checkCollision(this.starsign, this.gems[i])) {
                    const ele = this.gems[i].type;
                    const value = this.starsign.element[ele];
                    this.score += value;
                    this.gems.splice(i, 1);
                }
            }
        }
    }
        
    
    drawGrid() {
        this.context.strokeStyle = 'red';
        this.context.beginPath();
        this.context.arc(200, 200, 200, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.stroke();
    }   
    
}