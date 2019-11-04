class Scoreboard {
    constructor(game){
        this.game = game
    }
    
    draw(){
        const context = this.game.context;
        
        const score = this.game.score;
        const highScore = this.game.highScore;
        
        context.font = '10px monospace';
        context.fillStyle = 'black';
        
        context.fillText(`Score: ${score}`, 170, 350);
        context.fillText(`High Score: ${highScore}`, 170, 370);
    }
}