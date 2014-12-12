/*FileName: enemyBullet.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the bullet object for the enemy ships
*/
module objects {
    export class EnemyBullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("enemylaser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  