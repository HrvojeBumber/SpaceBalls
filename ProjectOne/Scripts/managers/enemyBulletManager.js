/// <reference path="../objects/enemybullet.ts" />
/// <reference path="../objects/enemy.ts" />
/*FileName: enemyBulletManager.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the bullet manager for the enemy ships
*/
var managers;
(function (managers) {
    var EnemyBulletManager = (function () {
        function EnemyBulletManager(game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
        }
        EnemyBulletManager.prototype.fire = function (enemy) {
            // create a bullet
            var Bullet = new objects.EnemyBullet(this.game);

            this.game.addChild(Bullet);
            Bullet.x = enemy.x;
            Bullet.y = enemy.y + 30;
            this.bullets.push(Bullet);

            this.firing = true;

            // Play Bullet Sound
            createjs.Sound.play("shoot");
        };

        EnemyBulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];

                // move current bullet up stage
                bullet.y += 5;

                // check to see if the bullet has left the stage
                if (bullet.y > 640) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet from random ship every second
            if (frameCount % 60 == 0) {
                var randomNumber = Math.floor(Math.random() * ships.length);
                this.fire(ships[randomNumber]);
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        EnemyBulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };

        EnemyBulletManager.prototype.removeAllBullets = function () {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                this.bullets.splice(count, 1);
                this.game.removeChild(this.bullets[count]);
            }
        };
        return EnemyBulletManager;
    })();
    managers.EnemyBulletManager = EnemyBulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=enemybulletmanager.js.map
