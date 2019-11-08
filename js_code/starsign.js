class Starsign {
    
    constructor(num, game){
        this.game = game
        this.num = num
        this.name = ""
        this.element = {}
        this.image = ""    
        this.imageToDraw = new Image();
        this.radius = 20
        this.x = 237
        this.y = 237
        this.direction = ""
        this.glow = 0
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
                sapphire: 0,
                opal: 0,
                topaz: 0,
                lapiz: 0,
                amethyst: 0,
                moonstone:0, 
                pic: 'https://zodiaction.netlify.com/Game%20Images/diamond.png',
                name: "Diamond",
                traits: "Ambitious <br> Independent <br> Impatient"
                

             }
            this.image = "Game Images/aries-zodiac-symbol-of-frontal-goat-head.png"
            
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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/emerald.png", 
                name: "Emerald",
                traits: "Dependable <br> Musical <br> Practical"

           }
            this.image = "Game Images/taurus-zodiac-symbol-of-bull-head-front.png"
            
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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/emerald.png",
                name: "Emerald",
                traits: "Curious <br> Affectionate <br> Kind"

            }
            this.image = "Game Images/gemini-zodiac-symbol-of-two-twins-faces (1).png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/ruby.png",
                name: "Ruby",
                traits: "Intuitive <br> Emotional <br> Passionate"

            }
            this.image = "Game Images/crab-cancer-symbol.png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/carnelian.png",
                name: "Carnelian",
                traits: "Proud <br> Bold <br> Ambitious"

     
            }
            this.image = "Game Images/leo-astrological-sign.png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/peridot.png",
                name: "Peridot",
                traits: "Graceful <br> Organised <br> Kind" 

    
            }
            this.image = "/Game Images/virgo-zodiac-symbol.png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/sapphire.png",
                name: "Sapphire",
                traits: "Diplomatic <br> Artistic <br> Intelligent"

    
            }
            this.image = "/Game Images/libra-scale-balance-symbol.png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/opal.png",
                name: "Opal",
                traits: "Seductive <br> Passionate <br> Independent" 

    
            }
            this.image = "/Game Images/scorpio-vertical-animal-shape-of-zodiac-symbol.png"   

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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/topaz.png",
                name: "Topaz",
                traits: "Adventurous <br> Creative <br> Strong Willed" 

    
            }
            this.image = "/Game Images/sagittarius-arch-and-arrow-symbol.png"   
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
                lapiz: 30,
                amethyst: 0,
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/lapiz.png",
                name: "Lapiz",
                traits: "Detail-Orientated <br> Intelligent <br> Hard Working" 

    
            }
            this.image = "/Game Images/capricorn.png"   
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
                moonstone:0,
                pic: "https://zodiaction.netlify.com/Game%20Images/amethyst.png",
                name: "Amethyst", 
                traits: "Imaginative <br> Idealistic <br> Intuitive" 
    
            }
            this.image = "/Game Images/aquarius-zodiac-sign-symbol.png"   
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
                moonstone:30,
                pic: "https://zodiaction.netlify.com/Game%20Images/moonstone.png",
                name: "Moonstone",
                traits: "Creative <br> Sensitive <br> Idealistic" 
    
            }
            this.image = "/Game Images/pisces-astrological-sign-symbol.png"   
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
                moonstone: 0,
                pic: "https://zodiaction.netlify.com/Game%20Images/diamond.png",
                name: "Diamond",
                traits: "Creative <br> Sensitive <br> Artistic"
            
            

            }
            this.image = "/Game Images/aries-zodiac-symbol-of-frontal-goat-head.png"         
        }
        this.imageToDraw.src = this.image;
    }
    
    draw(){ 
        this.glowing();
        const imageHeight = this.imageToDraw.height;
        const imageWidth = this.imageToDraw.width;
        game.context.shadowBlur = this.glow;
        game.context.shadowColor = "silver";
        game.context.drawImage(this.imageToDraw, this.x , this.y, imageWidth *0.3, imageHeight * 0.3);
        game.context.shadowColor = "transparent";
    }

    glowing(){
         if (this.game.score > 0){
            this.glow = 20
        } else {
            this.glow = 0 
        }
    }
    
    checkCollision(a, b){
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.radius + b.radius;
    }

    gemBounce(){

    }

}


