/*FileName: bossbullet.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the boss bullet class which handle bullet animation
*/
module objects {
    export class BossBullet extends objects.BossObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("laser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  