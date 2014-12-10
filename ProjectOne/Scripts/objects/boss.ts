/// <reference path="../managers/asset.ts" />
/// <reference path="bossgun.ts" />
module objects {
    export class Boss extends objects.BossObject {
        stage: createjs.Stage;
        game: createjs.Container;
        guns = [];
        lives: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("boss");
            this.stage = stage;
            this.game = game;

            this.lives = 30;

            this.dx = 5;
            this.x = stage.canvas.width * 0.5;
            this.y = 150;

            game.addChild(this);

            this.placeGuns();
        }

        placeGuns() {

            this.guns[0] = new objects.BossGun(game);
            this.guns[0].x = 183;
            this.guns[0].y = 290;

            this.guns[1] = new objects.BossGun(game);
            this.guns[1].x = 277;
            this.guns[1].y = 270;

            this.guns[2] = new objects.BossGun(game);
            this.guns[2].x = 357;
            this.guns[2].y = 263;

            this.guns[3] = new objects.BossGun(game);
            this.guns[3].x = 430;
            this.guns[3].y = 245;

            this.guns[4] = new objects.BossGun(game);
            this.guns[4].x = 498;
            this.guns[4].y = 263;

            this.guns[5] = new objects.BossGun(game);
            this.guns[5].x = 580;
            this.guns[5].y = 270;

            this.guns[6] = new objects.BossGun(game);
            this.guns[6].x = 673;
            this.guns[6].y = 290;

        }

        update() {
            this.checkBounds();
            if (frameCount % 15 == 0) {
                this.x += this.dx;
                var len = this.guns.length;
                for (var count = 0; count < len ; count++) {
                    this.guns[count].x += this.dx;
                }
            }
        }

        private checkBounds() {

            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
       
                this.dx = -5;
                this.x -= 5;
                this.y += 5; 
       
                var len = this.guns.length;
                for (var count = 0; count < len; count++) {
                    this.guns[count].x -= 5;
                    this.guns[count].y += 5;
                }          
            }
            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;

                this.dx = 5;
                this.x += 5;
                this.y += 5;

                var len = this.guns.length;
                for (var count = 0; count < len; count++) {
                    this.guns[count].x += 5;
                    this.guns[count].y += 5;
                } 
            }
        }

        destroy() {
            this.game.removeChild(this);

            var len = this.guns.length;
            for (var count = 0; count < len; count++) {
                this.game.removeChild(this.guns[count]);
            } 
        }

    }
}  