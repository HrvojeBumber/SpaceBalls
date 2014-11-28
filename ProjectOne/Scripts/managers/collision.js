﻿/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(player, /*island: enemies,*/ scoreboard) {
            this.enemies = [];
            this.player = player;

            //this.enemies = enemies;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.planeAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();

            //p1.x = this.player.image.x;
            //p1.y = this.player.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        };

        // check collision between plane and island
        Collision.prototype.planeAndIsland = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            //p1.x = this.player.image.x;
            //p1.y = this.player.image.y;
            //p2.x = this.island.image.x;
            //p2.y = this.island.image.y;
            //if (this.distance(p1, p2) < ((this.player.height / 2) + (this.island.height / 2))) {
            //    createjs.Sound.play("yay");
            //    this.scoreboard.score += 100;
            //    this.island.reset();
            //}
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.planeAndCloud(this.enemies[count]);
            }
            this.planeAndIsland();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
