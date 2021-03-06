﻿/// <reference path="../objects/playerbullet.ts" />
/// <reference path="../objects/player.ts" />

/*FileName: playerBulletManager.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the bullet manager that handles the player firing
*/
module managers {
    export class BulletManager {
        game: createjs.Container;
        player: objects.Player;
        bullet: objects.PlayerBullet;
        bulletOnScreen: boolean = false;
        firing: boolean = false;
        constructor(player: objects.Player, game: createjs.Container) {
            this.game = game;
            this.player = player;
        }

        fire() {
            // create a bullet
            this.bullet = new objects.PlayerBullet(this.game);

            this.game.addChild(this.bullet);
            this.bullet.x = this.player.x;
            this.bullet.y = 570;

            this.bulletOnScreen = true;
            
            if (bossCollision != null) {
                bossCollision.setPlayerBullet(this.bullet);
            } else {
                collision.setPlayerBullet(this.bullet);
            }

            // Play Bullet Sound
            createjs.Sound.play("shoot");
        } // end fire

        update() {

            this.firing = controls.LASER;

            if (this.bulletOnScreen == true) {
                // move the bullet up stage
                this.bullet.y -= 7;

                // check to see if the bullet has left the stage
                if (this.bullet.y < 0) {
                    this.destroyBullet();
                }
            }

            // fire bullet if space bar is clicked
            if ((this.firing == true) && (this.bulletOnScreen == false)) {
                if (this.player.onStage == true) {
                    this.fire();
                }
            }

        } // end update

        destroyBullet() {
            this.game.removeChild(this.bullet);
            this.bulletOnScreen = false;
        } // end destroyBullet
    }
} 