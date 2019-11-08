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

    intro(){
        const context = this.game.context;
        context.font = '18px monospace';
        context.fillStyle = 'white';
        context.fillText(`Welcome ${game.starsign.name}!`, 100, 180);
        context.fillText(`Good luck on your adventure `, 100, 200);
        context.fillText(`have a look at the sidebar `,100, 220);
        context.fillText(`to see what element you`,100, 240);
        context.fillText(`need to collect --->`,100, 260);
        context.fillText(`Look out for your lucky `,100, 280);
        context.fillText(`gem and avoid asteroids!`,100, 300);
         
    }
}