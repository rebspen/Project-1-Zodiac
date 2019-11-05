class Controls {
    constructor(game){
        this.game = game
    }
    
    setControls(){
        window.addEventListener('keydown', event => {
            event.preventDefault();
            switch (event.keyCode) {
                //LEFT
                case 37:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveRight()
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveRight()
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveRight()
                }
                break;
                //RIGHT
                case 39:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveLeft()
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveLeft()
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveLeft()
                }
                
                break;
                //UP
                case 38:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveDown()
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveDown()
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveDown()
                }
                break;
                //DOWN
                case 40:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveUp()
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveUp()
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveUp()
                }
                break;
            }
        });
        
        window.addEventListener('keyup', event => {
            event.preventDefault();
            switch (event.keyCode) {
                //LEFT
                case 37:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = 0
                    this.game.elements[i].vx = 1
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 0
                    this.game.gems[i].vx = 1
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = 1
                    this.game.asteroid[i].vx = 4
                }
                break;
                //RIGHT
                case 39:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = 0
                    this.game.elements[i].vx = -1 
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 0
                    this.game.gems[i].vx = -1
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = -1
                    this.game.asteroid[i].vx = -4
                }
                break;
                //UP
                case 38:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = 1 
                    this.game.elements[i].vx = 0
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 1
                    this.game.gems[i].vx = 0
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = 4
                    this.game.asteroid[i].vx = 1
                }
                break;
                //DOWN
                case 40:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = -1 
                    this.game.elements[i].vx = 0
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = -1
                    this.game.gems[i].vx = 0
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = -4
                    this.game.asteroid[i].vx = -1
                }
                break;
            }
        })

    //     window.addEventListener('keydown', (event) => {
    //     // Stop the default behavior (moving the screen to the left/up/right/down)
    //     event.preventDefault();
    //     // React based on the key pressed
    //     switch (event.keyCode) {
    //       case 38:
    //         for(let i = 0; i < game.elements.length; i++){
    //             game.elements[i].moveDown();         
    //         }
    //         for(let i = 0; i < game.gems.length; i++){
    //             game.gems[i].moveDown();         
    //         }
    //         break;
    //       case 37:
    //             for(let i = 0; i < game.elements.length; i++){
    //                 game.elements[i].moveRight();         
    //             }
    //             for(let i = 0; i < game.gems.length; i++){
    //                 game.gems[i].moveRight();         
    //             }
    //           break;
    //       case 39:
    //             for(let i = 0; i < game.elements.length; i++){
    //                 game.elements[i].moveLeft();         
    //             }
    //             for(let i = 0; i < game.gems.length; i++){
    //                 game.gems[i].moveLeft();         
    //             }
    //           break;
    //       case 40:
    //             for(let i = 0; i < game.elements.length; i++){
    //                 game.elements[i].moveUp();         
    //             }
    //             for(let i = 0; i < game.gems.length; i++){
    //                 game.gems[i].moveUp();         
    //             }
    //         break;
    //     }
    //   });
    }

  }