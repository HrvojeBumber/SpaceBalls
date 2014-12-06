/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/player.ts" />
var managers;
(function (managers) {
    var BulletManager = (function () {
        function BulletManager(player, game) {
            this.bulletOnScreen = false;
            this.firing = false;
            this.game = game;
            this.player = player;
        }
        BulletManager.prototype.fire = function () {
            // create a bullet
            this.bullet = new objects.PlayerBullet(this.game);

            this.game.addChild(this.bullet);
            this.bullet.x = this.player.x;
            this.bullet.y = 570;

            this.bulletOnScreen = true;
            collision.setPlayerBullet(this.bullet);
            // Play Bullet Sound
            //createjs.Sound.play("bullet");
        };

        BulletManager.prototype.update = function () {
            if (this.bulletOnScreen == true) {
                // move the bullet up stage
                this.bullet.y -= 7;

                // check to see if the bullet has left the stage
                if (this.bullet.y < 0) {
                    this.destroyBullet(this.bullet);
                }
            }

            // fire bullet if space bar is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletOnScreen == false)) {
                if (this.player.onStage == true) {
                    this.fire();
                }
            }
        };

        BulletManager.prototype.destroyBullet = function (bullet) {
            this.game.removeChild(bullet);
            this.bulletOnScreen = false;
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=playerBulletManager.js.map
