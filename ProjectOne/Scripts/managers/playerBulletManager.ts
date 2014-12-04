/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/player.ts" />

module managers {
    export class BulletManager {
        game: createjs.Container;
        player: objects.Player;
        bullets = [];
        bulletCount: number = 0;
        firing: boolean = false;
        constructor(player: objects.Player, game: createjs.Container) {
            this.game = game;
            this.player = player;
        }

        fire() {
            // create a bullet
            var bullet: objects.PlayerBullet = new objects.PlayerBullet(this.game);

            this.game.addChild(bullet);
            bullet.x = this.player.x;
            bullet.y = 570;
            this.bullets.push(bullet);

            // Play Bullet Sound
            //createjs.Sound.play("bullet");
        } // end fire

        update() {
            var len:number = this.bullets.length;
            var bullet: objects.PlayerBullet;

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
        } // end update

        destroyBullet(bullet: objects.PlayerBullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        } // end destroyBullet
    }
} 