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
}