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
        this.elementTimer = 0;
        this.elements = [];
        this.speed = 3000;
        this.gems = [];
        this.interval;
        this.instance = this;
    }
    
    start(){
        this.animation();
        this.interval = setInterval(this.updateEverything.bind(this), 500);
        
        // setTimeout(clearInterval(this.interval), 2000)
        
    }
    
    animation (timestamp) {
        this.drawEverything();
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }
    
    drawEverything(){
        this.context.clearRect(0, 0, 400, 400);
        this.starsign.draw()
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].draw();
        } 
        
    }
    
    updateEverything(){
        if (this.elements !== []){
            if (this.elements.length > 25){
                this.elements.splice(0,1);
            }
        }
        
        console.log(this.elements)
        let element = new Element(this);
        this.elements.push(element);
    }
    
    
    
    
    
}