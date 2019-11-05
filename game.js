class Game {
    constructor($canvas , num){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.num = num;
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.starsign = new Starsign(num, this);
        this.asteroid = []
        this.starsign.getStarSignAttributes(this.num);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.elements = [];
        this.gems = [];
        this.elementTimer = 0
        this.speed = 300
        this.gemTimer = 0
        this.gemspeed = 1000
        this.asteroidTimer = 0
        this.asteroidSpeed = 500
        this.interval;
        this.score = 0
        this.highScore = 0
        this.scoreboard = new Scoreboard(this)
        this.finish = false
    }
    
    start(){
        this.animation();
        //this.interval = setInterval(this.updateElements.bind(this), 500);
        
        // setTimeout(clearInterval(this.interval), 2000)
        
    }
    
    animation (timestamp) {
        this.drawEverything();
        this.updateElements(timestamp);
        const animation = window.requestAnimationFrame((timestamp) => this.animation(timestamp));
        if (this.finish){
            window.cancelAnimationFrame(animation);
            this.end()

        }
    }
    
    drawEverything(){
        this.context.clearRect(0, 0, 500, 500);
        this.drawGrid()
        this.starsign.draw()
        this.scoreboard.draw()
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].draw();
        }   
        for (let i = 0; i < this.gems.length; i++) {
            this.gems[i].draw();
        } 
        for (let i = 0; i < this.asteroid.length; i++) {
            this.asteroid[i].draw();  
        } 
        
    }
    
    updateElements(timestamp){

        if (this.elements !== []){
            for (let i = 0; i < this.elements.length; i++) {
                this.elements[i].update()
            }
        }

        if (this.elements !== []){
            for (let i = 0; i < this.gems.length; i++) {
                this.gems[i].update()
            }
        }

        if (this.asteroid !== []){
            for (let i = 0; i < this.asteroid.length; i++) {
                this.asteroid[i].update()
            }
        }

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

            if (this.asteroid !== []){
                if (this.asteroid.length > 30){
                    this.asteroid.splice(0,1);
                }
            }

            if (this.asteroid.length < 32){
                if(this.asteroidTimer < timestamp - this.asteroidSpeed){
                    this.asteroid.push(new Asteroid(this));
                    this.asteroidTimer = timestamp;
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

            for (let i = 0; i < this.asteroid.length; i++) {
                if (this.starsign.checkCollision(this.starsign, this.asteroid[i])) {
                    this.stop();
                }
            }
        }
    }
        
    stop(){
        this.finish = true;
    }

    end(){
        this.context.clearRect(0, 0, 500, 500);
        this.drawGrid()
        this.scoreboard.horoscope();
        if (this.score> this.highScore){
         this.highScore = this.score
        }
        this.scoreboard.draw()
        $reset.style.display = "inline-block"
        $signbtn.innerText = "choose new date"
    }

    reset(){
        $signbtn.innerText = "your sign is..."
        $reset.style.display = "none"
        this.asteroid = [];
        this.elements = [];
        this.gems = [];
        this.elementTimer = 0
        this.speed = 300
        this.gemTimer = 0
        this.gemspeed = 1000
        this.asteroidTimer = 0
        this.asteroidSpeed = 500
        this.score = 0 
        this.finish = false
    }
    


    drawGrid() {
        this.context.strokeStyle = 'white';
        this.context.beginPath();
        this.context.arc(250, 250, 250, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.stroke();
    }   
    
}