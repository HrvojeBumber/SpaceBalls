/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/enemybullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="playerbulletmanager.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private player: objects.Player;
        private enemy: objects.Enemy;
        private enemies = [];
        private playerBullet;
        private scoreboard: objects.Scoreboard;
        private game: createjs.Container;

        constructor(player: objects.Player, scoreboard: objects.Scoreboard, game: createjs.Container, playerBullet: objects.PlayerBullet, enemies?) {
            this.player = player;
            this.enemies = enemies;
            this.playerBullet = playerBullet;
            this.scoreboard = scoreboard;

            this.game = game;

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
        /*private planeAndCloud(cloud: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = cloud.x;
            p2.y = cloud.y;
            if (this.distance(p1, p2) < ((this.player.height * 0.5) + (cloud.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.player.x;
                explosion.y = this.player.y;
                explosion.on("animationend", function (e) { explosion.remove(); });
                this.player.gotoAndPlay("flickerPlane");
                this.player.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane");
                    this.plane.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;
                //cloud.reset();
            }
        }

        // check collision between plane and coin
        private planeAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            //p2.x = this.coin.x;
            //p2.y = this.coin.y;
            //if (this.distance(p1, p2) < ((this.player.height * 0.5) + (this.coin.height * 0.5))) {
                //createjs.Sound.play("coin");
                this.scoreboard.score += 100;
                // increase player's lives every 1500 points
                if (this.scoreboard.score % 1500 == 0) {
                    createjs.Sound.play("lives");
                    this.scoreboard.lives++;
                //}
                //this.coin.onStage = false;
            }
        }

        // check collision between plane and enemy objects
        private planeAndEnemy(enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((this.player.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                //var explosion = new objects.Explosion(game);
                //explosion.x = this.player.x;
                //explosion.y = this.player.y;
                //explosion.on("animationend", function (e) { explosion.remove(); });
                this.player.gotoAndPlay("flickerPlane");
                this.player.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane");
                    this.plane.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;

                //enemy.reset();
            }
        }*/

        // check collision between bullet and any enemy object
        private bulletAndEnemy(bullet: objects.PlayerBullet, enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
                //createjs.Sound.play("explosion");
                // show explosion animation
                //var explosion = new objects.Explosion(game);
                //explosion.x = enemy.x;
                //explosion.y = enemy.y;
                //explosion.on("animationend", function (e) { explosion.remove(); });

                this.scoreboard.score += 100;
                enemy.destroy();
            }
        }

        // Utility Function to Check Collisions
        update() {
            if (player.onStage == true) {
                if (this.playerBullet.bulletOnScreen) {
                    for (var count = 0; count < constants.ENEMY_NUM; count++) {
                        this.bulletAndEnemy(this.playerBullet, this.enemies[count]);
                    }
                }
                //this.planeAndCoin();

                /*if (typeof this.enemies != "undefined") {
                    this.planeAndEnemy(this.enemies[0]);

                    /*if (bulletManager.firing == true) {
                        var len: number = this.bullets.length;
                        for (var count = 0; count < len; count++) {
                            this.bulletAndEnemy(this.bullets[count], this.enemies[0]);
                        }
                    }
                }*/
            }
        }


    }
} 