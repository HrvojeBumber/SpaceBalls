/// <reference path="../objects/bossbullet.ts" />
/// <reference path="../objects/boss.ts" />

module managers {
    export class BossBulletManager {
        game: createjs.Container;
        bullets = [];
        boss: objects.Boss;
        bulletCount: number = 0;
        firing: boolean = false;
        constructor(game: createjs.Container, boss:objects.Boss) {
            this.game = game;
            this.boss = boss;
        }

        fire(gun: objects.BossGun) {
            // create a bullet
            var Bullet: objects.BossBullet = new objects.BossBullet(this.game);

            gun.fire(gun);

            this.game.addChild(Bullet);
            Bullet.x = gun.x;
            Bullet.y = gun.y + 20;
            this.bullets.push(Bullet);

            this.firing = true;

            // Play Bullet Sound
            createjs.Sound.play("shoot");
        } // end fire

        update() {
            var len: number = this.bullets.length;
            var bullet: objects.BossBullet;

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
                var randomNumber: number = Math.floor(Math.random() * this.boss.guns.length);
                this.fire(this.boss.guns[randomNumber]);
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        } // end update

        destroyBullet(bullet: objects.BossBullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        } // end destroyBullet

        removeAllBullets() {
            var len: number = this.bullets.length;

            // remove all bullets from game and from bullet array
            for (var count = 0; count < len; count++) {
                this.bullets.splice(count, 1);
                this.game.removeChild(this.bullets[count]);
            }
        }
    }
} 