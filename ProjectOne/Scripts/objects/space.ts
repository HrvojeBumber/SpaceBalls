/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Space {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            this.dy = 5;

            game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}