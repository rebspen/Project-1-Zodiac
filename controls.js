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
                        this.game.starsign.direction = "w"
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveRight()
                }
        
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveRight()
                    this.game.gems[i].direction = "e"
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveRight()
                }
                break;
                //RIGHT
                case 39:
                        this.game.starsign.direction = "e"
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveLeft()
                }
             
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveLeft()
                    this.game.gems[i].direction = "w"
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveLeft()
                }
                
                break;
                //UP
                case 38:
                        this.game.starsign.direction = "n"
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveDown()
                }
             
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveDown()
                    this.game.gems[i].direction = "s"
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].moveDown()
                }
                break;
                //DOWN
                case 40:
                        this.game.starsign.direction = "s"
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].moveUp()
                }
        
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].moveUp()
                    this.game.gems[i].direction = "n"
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
                    this.game.elements[i].vx = 3
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 0
                    this.game.gems[i].vx = 3
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = 3
                    this.game.asteroid[i].vx = 10
                }
                break;
                //RIGHT
                case 39:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = 0
                    this.game.elements[i].vx = -3
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 0
                    this.game.gems[i].vx = -3
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = -3
                    this.game.asteroid[i].vx = -10
                }
                break;
                //UP
                case 38:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = 3 
                    this.game.elements[i].vx = 0
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = 3
                    this.game.gems[i].vx = 0
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = 10
                    this.game.asteroid[i].vx = 3
                }
                break;
                //DOWN
                case 40:
                for(let i = 0; i < game.elements.length; i++){
                    this.game.elements[i].vy = -3
                    this.game.elements[i].vx = 0
                }
                for(let i = 0; i < game.gems.length; i++){
                    this.game.gems[i].vy = -3
                    this.game.gems[i].vx = 0
                }
                for(let i = 0; i < game.asteroid.length; i++){
                    this.game.asteroid[i].vy = -10
                    this.game.asteroid[i].vx = -3
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