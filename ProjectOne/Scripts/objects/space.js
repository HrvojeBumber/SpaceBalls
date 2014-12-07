/// <reference path="../managers/asset.ts" />
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
        Space.prototype.setImage = function (spriteName) {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(spriteName));
            game.addChild(this.image);
        };

        Space.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Space;
    })();
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map
