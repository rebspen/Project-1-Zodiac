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
            break;
          case 37:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveRight();         
                }
              break;
          case 39:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveLeft();         
                }
              break;
          case 40:
                for(let i = 0; i < game.elements.length; i++){
                    game.elements[i].moveUp();         
                }
            break;
        }
      });
    }

  }