/// <reference path="../managers/asset.ts" />
/// <reference path="bossgun.ts" />
module objects {
    export class Boss extends objects.BossObject {
        stage: createjs.Stage;
        game: createjs.Container;
        boss: objects.Boss;
        guns = [];
        lives: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("boss");
            this.stage = stage;
            this.game = game;

            this.boss = bossShip;

            this.lives = 3;

            this.dx = 10;
            this.x = stage.canvas.width * 0.5;
            this.y = 100;

            this.placeGuns();

            game.addChild(this);
        }

        placeGuns() {

            var x = this.boss.x - this.boss.width * 0.5;

            for (var count = 0; count < 6; count++) {
                this.guns[count] = new objects.BossGun(game);
                this.guns[count].x = x;
                this.guns[count].y = 100;
                x += this.boss.width / 6;
            }

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