﻿/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/bossbullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="bossbulletmanager.ts" />
/// <reference path="playerbulletmanager.ts" />

/*FileName: bossCollision.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the collision manager for the boss level to check collisions between 
the boss and player bullets and between the boss and player
*/
module managers {
    // Collision Manager Class
    export class BossCollision {
        // class variables
        private player: objects.Player;
        private boss: objects.Boss;
        private bullets = [];
        private playerBullet;
        private bossBulletManager: managers.BossBulletManager;
        private scoreboard: objects.Scoreboard;
        private game: createjs.Container;

        constructor(player: objects.Player, scoreboard: objects.Scoreboard, game: createjs.Container, playerBullet: objects.PlayerBullet, bullets, boss: objects.Boss, bossbulletManager: managers.BossBulletManager) {
            this.player = player;
            this.bullets = bullets;
            this.playerBullet = playerBullet;
            this.scoreboard = scoreboard;
            this.boss = boss;
            this.bossBulletManager = bossbulletManager;

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

        // check collision between enemy bullet and player
        private bulletAndPlayer(bullet: objects.BossBullet, player: objects.Player) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = player.x;
            p2.y = player.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (player.height * 0.5))) {
                createjs.Sound.play("explode");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = player.x;
                explosion.y = player.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                //flicker player
                this.player.gotoAndPlay("flickerPlayer");
                this.player.onStage = false;
                setTimeout(function (e) {
                    this.player.gotoAndPlay("player");
                    this.player.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;

                bossBulletManager.destroyBullet(bullet);
                this.bullets = bossBulletManager.bullets;

                if (this.scoreboard.lives <= 0) {
                    stage.removeChild(game);
                    game.removeAllChildren();
                    game.removeAllEventListeners();
                    currentState = constants.GAME_OVER_STATE;
                    changeState(currentState);
                }
            }
        }

        public setPlayerBullet(bullet: objects.PlayerBullet) {
            this.playerBullet = bullet;
        }

        // check collision between bullet and boss
        private bulletAndBoss(bullet: objects.PlayerBullet, boss: objects.Boss) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = boss.x;
            p2.y = boss.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (boss.height * 0.5) - 60)) {

                createjs.Sound.play("explode");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = bullet.x;
                explosion.y = bullet.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                this.scoreboard.score += 100;
                boss.lives -= 1;

                //check if boss goes into berserk mode
                if (boss.lives <= 10) {
                    bossBulletManager.fireRate = 12;
                    boss.gotoAndPlay("weakboss");
                }

                bulletManager.destroyBullet();
                this.playerBullet = null;
            }
        }

        // Utility Function to Check Collisions
        update() {
            if (this.playerBullet != null) {
                this.bulletAndBoss(this.playerBullet, this.boss);
            }
            if (player.onStage == true) {
                if (bossBulletManager.firing == true) {
                    this.bullets = bossBulletManager.bullets;
                    var len: number = this.bullets.length;
                    for (var count = 0; count < len; count++) {
                        if (this.bullets[count] != null) {
                            this.bulletAndPlayer(this.bullets[count], this.player);
                        }
                    }
                }
            }
        }
    }
}  