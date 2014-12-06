/// <reference path="../objects/enemybullet.ts" />
/// <reference path="../objects/enemy.ts" />

module managers {
    export class EnemyBulletManager {
        game: createjs.Container;
        bullets = [];
        bulletCount: number = 0;
        firing: boolean = false;
        constructor(game: createjs.Container) {
            this.game = game;
        }

        fire(enemy:objects.Enemy) {
            // create two bullets on either side of  plane
            var Bullet: objects.EnemyBullet = new objects.EnemyBullet(this.game);

            this.game.addChild(Bullet);
            Bullet.x = enemy.x;
            Bullet.y = enemy.y + 30;
            this.bullets.push(Bullet);

            this.firing = true;

            // Play Bullet Sound
            //createjs.Sound.play("bullet");
        } // end fire

        update() {
            var len: number = this.bullets.length;
            var bullet: objects.EnemyBullet;

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
            if (frameCount % 60 == 0) {
                var randomNumber: number = Math.floor(Math.random() * ships.length);
                this.fire(ships[randomNumber]);
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        } // end update

        destroyBullet(bullet: objects.EnemyBullet) {
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