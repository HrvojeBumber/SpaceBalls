/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/bossbullet.ts" />
/// <reference path="../objects/bossexplosion.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="bossbulletmanager.ts" />
/// <reference path="playerbulletmanager.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var BossCollision = (function () {
        function BossCollision(player, scoreboard, game, playerBullet, bullets, boss, bossbulletManager) {
            this.bullets = [];
            this.player = player;
            this.bullets = bullets;
            this.playerBullet = playerBullet;
            this.scoreboard = scoreboard;
            this.boss = boss;
            this.bossBulletManager = bossbulletManager;

            this.game = game;
        }
        // Utility method - Distance calculation between two points
        BossCollision.prototype.distance = function (p1, p2) {
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

        // check collision between enemy bullet and player
        BossCollision.prototype.bulletAndPlayer = function (bullet, player) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });

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
        };

        BossCollision.prototype.setPlayerBullet = function (bullet) {
            this.playerBullet = bullet;
        };

        // check collision between bullet and boss
        BossCollision.prototype.bulletAndBoss = function (bullet, boss) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });

                this.scoreboard.score += 100;
                boss.lives -= 1;

                if (boss.lives <= 10) {
                    bossBulletManager.fireRate = 12;
                    boss.gotoAndPlay("weakboss");
                }

                bulletManager.destroyBullet();
                this.playerBullet = null;
            }
        };

        // Utility Function to Check Collisions
        BossCollision.prototype.update = function () {
            if (this.playerBullet != null) {
                this.bulletAndBoss(this.playerBullet, this.boss);
            }
            if (player.onStage == true) {
                if (bossBulletManager.firing == true) {
                    this.bullets = bossBulletManager.bullets;
                    var len = this.bullets.length;
                    for (var count = 0; count < len; count++) {
                        if (this.bullets[count]) {
                            this.bulletAndPlayer(this.bullets[count], this.player);
                        }
                    }
                }
            }
        };
        return BossCollision;
    })();
    managers.BossCollision = BossCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bosscollision.js.map
