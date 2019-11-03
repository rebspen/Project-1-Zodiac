class Starsign {
    
    constructor(num, game){
        this.game = game
        this.num = num
        this.name = ""
        this.element = {}
        this.image = ""    
        this.imageToDraw = new Image();
    }

   
    
    getStarSignAttributes(){
        this.name = ""
        this.element = {}
        this.image = ""  
        switch(this.num) {
            case 1:
            this.name = "Aries"
            this.element = {
                fire: 5,
                earth: -5,
                wind: -5,
                water: -10,
                air: -5,
                diamond: 30,
                emerald: 0 
            }
            this.image = "https://image.flaticon.com/icons/svg/47/47156.svg"
            
            break;
            case 2:
            this.name = "Taurus"
            this.element = {
                fire: -5,
                earth: 5,
                wind: -5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 30 
            }
            this.image = "https://image.flaticon.com/icons/svg/47/47073.svg"
            
            break;
            case 3:
            this.name = "Gemini"
            this.element = {
                fire: -5,
                earth: 5,
                wind: -5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 30 
            }
            this.image = "https://image.flaticon.com/icons/svg/47/47140.svg"   
            break;
            default:
            this.name = "Aries"
            this.element = {
                fire: 5,
                earth: -5,
                wind: -5,
                water: -10,
                air: -5,
                diamond: 30,
                emerald: 0 
            }
            this.image = "https://image.flaticon.com/icons/svg/47/47156.svg"         
        }
        this.imageToDraw.src = this.image;
    }
    
    draw(){
        
        const imageHeight = this.imageToDraw.height;
        const imageWidth = this.imageToDraw.width;
        game.context.drawImage(this.imageToDraw, 187 , 187, imageWidth, imageHeight);
        
    }
}


