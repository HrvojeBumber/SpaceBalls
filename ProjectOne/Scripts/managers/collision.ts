﻿/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private player: objects.Player;
        private enemies = [];
        private scoreboard: objects.Scoreboard;

        constructor(player: objects.Player, /*island: enemies,*/ scoreboard: objects.Scoreboard) {
            this.player = player;
            //this.enemies = enemies;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private planeAndCloud(cloud: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //p1.x = this.player.image.x;
            //p1.y = this.player.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        }

        // check collision between plane and island
        private planeAndIsland() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //p1.x = this.player.image.x;
            //p1.y = this.player.image.y;
            //p2.x = this.island.image.x;
            //p2.y = this.island.image.y;
            //if (this.distance(p1, p2) < ((this.player.height / 2) + (this.island.height / 2))) {
            //    createjs.Sound.play("yay");
            //    this.scoreboard.score += 100;
            //    this.island.reset();
            //}
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.planeAndCloud(this.enemies[count]);
            }
            this.planeAndIsland();
        }
    }
} 