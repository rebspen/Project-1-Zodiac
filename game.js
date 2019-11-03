class Game {
    constructor($canvas , num){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.num = num
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.starsign = new Starsign(num)
    this.starsign.getStarSignAttributes(this.num)
    this.elements = []
    this.gems = []
    }

   start(){
    this.starsign.draw()    
    console.log(this.starsign);    
   }


    
}