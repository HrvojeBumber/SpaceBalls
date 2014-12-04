/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/player.ts" />
var managers;
(function (managers) {
    var BulletManager = (function () {
        function BulletManager(player, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
            this.player = player;
        }
        BulletManager.prototype.fire = function () {
            // create a bullet
            var bullet = new objects.PlayerBullet(this.game);

            this.game.addChild(bullet);
            bullet.x = this.player.x;
            bullet.y = 570;
            this.bullets.push(bullet);
            // Play Bullet Sound
            //createjs.Sound.play("bullet");
        };

        BulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];

                // move current bullet up stage
                bullet.y -= 5;

                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCount % 10 == 0)) {
                if (this.player.onStage == true) {
                    this.fire();
                }
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        BulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=playerBulletManager.js.map
