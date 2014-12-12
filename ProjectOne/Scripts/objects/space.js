/// <reference path="../managers/asset.ts" />
/*FileName: space.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the space background object that sets the background images
*/
var objects;
(function (objects) {
    // Space Class
    var Space = (function () {
        function Space(stage, game) {
            this.stage = stage;
            this.game = game;
            this.setImage("space");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
        }
        //set the image using the image name
        Space.prototype.setImage = function (spriteName) {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(spriteName));
            game.addChild(this.image);
        };

        //remove the background
        Space.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Space;
    })();
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map
