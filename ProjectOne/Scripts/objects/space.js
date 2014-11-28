/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Space = (function () {
        function Space(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("space"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            game.addChild(this.image);
        }
        Space.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Space;
    })();
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map
