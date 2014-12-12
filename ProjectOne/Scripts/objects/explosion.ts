/*FileName: explosion.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the explosion object for the small ships 
*/
module objects {
    export class Explosion extends createjs.Sprite {
        game: createjs.Container;
        width: number;
        height: number;
        constructor(game: createjs.Container) {
            super(managers.Assets.explosion, "explosion");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.game.addChild(this);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  