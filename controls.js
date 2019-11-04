class Controls {
    constructor(game){
      this.game = game
    }
    
    setControls(){
        window.addEventListener('keydown', (event) => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
        event.preventDefault();
        // React based on the key pressed
        switch (event.keyCode) {
          case 38:
            for(let i = 0; i < game.elements.length; i++){
                game.elements[i].moveDown();         
            }
            for(let i = 0; i < game.gems.length; i++){
                game.gems[i].moveDown();         
            }
            break;
          case 37:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveRight();         
                }
                for(let i = 0; i < game.gems.length; i++){
                    game.gems[i].moveRight();         
                }
              break;
          case 39:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveLeft();         
                }
                for(let i = 0; i < game.gems.length; i++){
                    game.gems[i].moveLeft();         
                }
              break;
          case 40:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveUp();         
                }
                for(let i = 0; i < game.gems.length; i++){
                    game.gems[i].moveUp();         
                }
            break;
        }
      });
    }

  }