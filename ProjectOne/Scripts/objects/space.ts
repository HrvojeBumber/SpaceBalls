/// <reference path="../managers/asset.ts" />

/*FileName: space.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the space background object that sets the background images
*/
module objects {
    // Space Class
    export class Space {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.setImage("space");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
        }

        //set the image using the image name
        setImage(spriteName: string) {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(spriteName));
            game.addChild(this.image);
        }

        //remove the background
        destroy() {
            game.removeChild(this.image);
        }
    }

}