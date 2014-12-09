/// <reference path="../managers/asset.ts" />
module objects {
    export class Boss extends createjs.Sprite {
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        lives: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(managers.Assets.boss, "boss");
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.lives = 3;

            this.dx = 10;
            this.x = stage.canvas.width * 0.5;
            this.y = 100;

            game.addChild(this);
        }

        update() {
            this.checkBounds();
            if (frameCount % 30 == 0) {
                this.x += this.dx;
            }
        }

        private checkBounds() {

            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
       
                    this.dx = -10;
                    this.x -= 10;
                    this.y += 10;  
            }
            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;

                    this.dx = 10;
                    this.x += 10;
                    this.y += 10;
            }
        }

        destroy() {
            this.game.removeChild(this);
        }

    }
}  