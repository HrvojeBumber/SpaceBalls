/// <reference path="../managers/asset.ts" />
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

        setImage(spriteName: string) {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(spriteName));
            game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}