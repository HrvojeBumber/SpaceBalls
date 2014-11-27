/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            this.dy = 5;

            game.addChild(this.image);
        }
        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
