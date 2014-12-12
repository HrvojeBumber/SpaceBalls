/*FileName: bossgun.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the boss gun object that handles gun animation 
*/
module objects {
    export class BossGun extends objects.BossObject {
        game: createjs.Container;
        gun: objects.BossGun;
        firing: boolean;
        constructor(game: createjs.Container) {
            super("gun");
            this.game = game;
            this.game.addChild(this);
        }

        fire(gun:objects.BossGun) {
            this.gotoAndPlay("cannon");
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  