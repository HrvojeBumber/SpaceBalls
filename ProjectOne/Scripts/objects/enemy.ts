﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy class
    export class Enemy extends GameObject{
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        location: createjs.Point;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(this.getRandomImage())
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.location = new createjs.Point();
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
            if (frameCount % 30 == 0) {
                this.x += this.dx;
            }
        }

        private checkBounds() {
            var len: number = ships.length;

            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
                for (var count = 0; count < len; count++) {
                    ships[count].dx = -5;
                    ships[count].x -= 5;
                    ships[count].y += 10;
                }
            }
            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;
                for (var count = 0; count < len; count++) {
                    ships[count].dx = 5;
                    ships[count].x += 5;
                    ships[count].y += 20;
                }
            }
        }

        destroy() {
            var len: number = ships.length;

            // remove ship from game and from ship array
            for (var count = 0; count < len; count++) {
                if (ships[count] == this) {
                    ships.splice(count, 1);
                    this.game.removeChild(this);
                }
            }
        }
    }

}