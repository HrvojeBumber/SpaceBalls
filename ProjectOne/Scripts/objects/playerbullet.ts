/*FileName: playerBullet.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the player bullet object that gets created when the player fires 
*/
// Bullet Class
module objects {
    export class PlayerBullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("playerlaser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  