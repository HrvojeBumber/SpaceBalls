/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy class
    export class Enemy extends GameObject{
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(this.getRandomImage())
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.dx = -5;

            game.addChild(this);
        }

        private getRandomImage(): string {
            var randomNum: number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

            return "enemy" + randomNum;

        }

        private setX(x: number) {
            this.x = x;
        }

        private setY(y: number) {
            this.y = y;
        }

        update() {
            this.checkBounds();
            if (frameCount % 60 == 0) {
                this.x += this.dx;
            }
        }

        private checkBounds() {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
                for (var count = 0; count < constants.ENEMY_NUM; count++) {
                    ships[count].dx = -5;
                    ships[count].x -= 5;
                    ships[count].y += 10;
                }
            }
            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;
                for (var count = 0; count < constants.ENEMY_NUM; count++) {
                    ships[count].dx = 5;
                    ships[count].x += 5;
                    ships[count].y += 20;
                }
            }
        }

        destroy() {
            game.removeChild(this);
        }
    }

}