class Scoreboard {
    constructor(game){
        this.game = game
    }
    
    draw(){
        const context = this.game.context;
        
        const score = this.game.score;
        const highScore = this.game.highScore;
        
        context.font = '10px monospace';
        context.fillStyle = 'white';
        
        context.fillText(`Score: ${score}`, 220, 450);
        context.fillText(`High Score: ${highScore}`, 220, 470);
    }

    horoscope(){
        const context = this.game.context;
        
        const score = this.game.score;
        
        context.font = '18px monospace';
        context.fillStyle = 'white';

        if (score <= 0){
            context.fillText(`Really you think you deserve`, 50, 200);
            context.fillText(`a horoscope with a score`, 50, 220);
            context.fillText(`like ${score}? Try again pal...`,50, 240);
        } else if (score > 0 && score < 100){
            context.fillText(`...Touch a goldfish, frolic in the`, 50, 200);
            context.fillText(`leaves and be relaxed enough to`, 50, 220);
            context.fillText(`double dip that Nacho Chip...`,50, 240);
        } else {
            context.fillText(`...You may not be winning`, 50, 200);
            context.fillText(`any races, but you’ve done`, 50, 220);
            context.fillText(`amazingly well for someone who`,50, 240);
            context.fillText(`has their shoelaces tied together.`, 50, 260);
            context.fillText(`Next year, try some Velcro sneakers`, 50, 280);
            context.fillText(`and see how far you can go...`,50, 300);
        }
        
    }
}