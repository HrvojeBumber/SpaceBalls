/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/enemybullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="enemybulletmanager.ts" />
/// <reference path="playerbulletmanager.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private player: objects.Player;
        private enemies = [];
        private bullets = [];
        private playerBullet;
        private scoreboard: objects.Scoreboard;
        private game: createjs.Container;

        constructor(player: objects.Player, scoreboard: objects.Scoreboard, game: createjs.Container, playerBullet: objects.PlayerBullet, enemies, bullets) {
            this.player = player;
            this.enemies = enemies;
            this.bullets = bullets;
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

        // check collision between enemy bullet and player
        private bulletAndPlayer(bullet: objects.EnemyBullet, player: objects.Player) {
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

                this.player.gotoAndPlay("flickerPlayer");
                this.player.onStage = false;
                setTimeout(function (e) {
                    this.player.gotoAndPlay("player");
                    this.player.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;

                enemyBulletManager.destroyBullet(bullet);
                this.bullets = enemyBulletManager.bullets;

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

        // check collision between bullet and any enemy object
        private bulletAndEnemy(bullet: objects.PlayerBullet, enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explode");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = enemy.x;
                explosion.y = enemy.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                this.scoreboard.score += 100;
                enemy.destroy();
                bulletManager.destroyBullet();
                this.playerBullet = null;
            }
        }

        // Utility Function to Check Collisions
        update() {
            
                var len: number = ships.length;
            for (var count = 0; count < len; count++) {
                if (this.playerBullet != null) {
                    this.bulletAndEnemy(this.playerBullet, this.enemies[count]);
                }
            }
            if (player.onStage == true) {
                
                    var len: number = this.bullets.length;
                for (var count = 0; count < len; count++) { 
                    if (enemyBulletManager.firing == true) {
                        this.bulletAndPlayer(this.bullets[count], this.player);
                    }
                }
            }
        }
    }
} 