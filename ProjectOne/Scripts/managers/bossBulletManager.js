/// <reference path="../objects/bossbullet.ts" />
/// <reference path="../objects/boss.ts" />
var managers;
(function (managers) {
    var BossBulletManager = (function () {
        function BossBulletManager(game, boss) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
            this.boss = boss;
        }
        BossBulletManager.prototype.fire = function (gun) {
            // create a bullet
            var Bullet = new objects.BossBullet(this.game);

            gun.fire(gun);

            this.game.addChild(Bullet);
            Bullet.x = gun.x;
            Bullet.y = gun.y + 20;
            this.bullets.push(Bullet);

            this.firing = true;

            // Play Bullet Sound
            createjs.Sound.play("shoot");
        };

        BossBulletManager.prototype.update = function () {
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

            // fire bullet if mouse button is clicked or game container is tapped
            if (frameCount % 30 == 0) {
                var randomNumber = Math.floor(Math.random() * this.boss.guns.length);
                this.fire(this.boss.guns[randomNumber]);
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        BossBulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };

        BossBulletManager.prototype.removeAllBullets = function () {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                this.bullets.splice(count, 1);
                this.game.removeChild(this.bullets[count]);
            }
        };
        return BossBulletManager;
    })();
    managers.BossBulletManager = BossBulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bossBulletManager.js.map
