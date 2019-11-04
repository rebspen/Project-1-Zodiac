class Starsign {
    
    constructor(num, game){
        this.game = game
        this.num = num
        this.name = ""
        this.element = {}
        this.image = ""    
        this.imageToDraw = new Image();
        this.radius = 20
        this.x = 187
        this.y = 187
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
                water: -10,
                air: -5,
                diamond: 30,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

             }
            this.image = ""
            
            break;
            case 2:
            this.name = "Taurus"
            this.element = {
                fire: -5,
                earth: 5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 30, 
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

           }
            this.image = "https://www.horoscope.com/images-US/signs/profile-taurus.png"
            
            break;
            case 3:
            this.name = "Gemini"
            this.element = {
                fire: -5,
                earth: 5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 30,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-gemini.png"   

            break;
            case 4:
            this.name = "Cancer"
            this.element = {
                fire: -10,
                earth: -5,
                water: 5,
                air: -5,
                diamond: 0,
                emerald: 0,
                ruby: 30,
                carnelian: 0,
                peridot: 0,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-cancer.png"   

            break;
            case 5:
            this.name = "Leo"
            this.element = {
                fire: 5,
                earth: -5,
                water: -10,
                air: -5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 30,
                peridot: 0,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

     
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-leo.png"   

            break;
            case 6:
            this.name = "Virgo"
            this.element = {
                fire: -5,
                earth: 5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 30,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-virgo.png"   

            break;
            case 7:
            this.name = "Libra"
            this.element = {
                fire: -5,
                earth: -10,
                water: -5,
                air: 5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 30,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-libra.png"   

            break;
            case 8:
            this.name = "Scorpio"
            this.element = {
                fire: -10,
                earth: -5,
                water: 5,
                air: -5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0,
                opal: 30,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-scorpio.png"   

            break;
            case 9:
            this.name = "Sagittarius"
            this.element = {
                fire: 5,
                earth: -5,
                water: -10,
                air: -5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0,
                opal: 0,
                topaz: 30,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-sagittarius.png"   
            break;
            case 10:
            this.name = "Capricorn"
            this.element = {
                fire: -5,
                earth: 5,
                water: -5,
                air: -10,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-capricorn.png"   
            break;
            case 11:
            this.name = "Aquarius"
            this.element = {
                fire: -5,
                earth: -10,
                water: -5,
                air: 5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 30,
                moonstone:0
    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-aquarius.png"   
            break;
            case 12:
            this.name = "Pisces"
            this.element = {
                fire: -10,
                earth: -5,
                water: 5,
                air: -5,
                diamond: 0,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:30
    
            }
            this.image = "https://www.horoscope.com/images-US/signs/profile-pisces.png"   
            break;
            
            default:
            this.name = "Aries"
            this.element = {
                fire: 5,
                earth: -5,
                water: -10,
                air: -5,
                diamond: 30,
                emerald: 0,
                ruby: 0,
                carnelian: 0,
                peridot: 0,
                sapphire: 0, 
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0

            }
            this.image = "https://image.flaticon.com/icons/svg/47/47156.svg"         
        }
        this.imageToDraw.src = this.image;
    }
    
    draw(){ 
        const imageHeight = this.imageToDraw.height;
        const imageWidth = this.imageToDraw.width;
        game.context.drawImage(this.imageToDraw, this.x , this.y, imageWidth *0.06, imageHeight * 0.06);
        
    }
    
    checkCollision(a, b){
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.radius + b.radius;
    }
}


