var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Boss = (function (_super) {
        __extends(Boss, _super);
        function Boss(stage, game) {
            _super.call(this, managers.Assets.boss, "boss");
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.lives = 3;

            this.dx = 10;
            this.x = stage.canvas.width * 0.5;
            this.y = 100;

            game.addChild(this);
        }
        Boss.prototype.update = function () {
            this.checkBounds();
            if (frameCount % 30 == 0) {
                this.x += this.dx;
            }
        };

        Boss.prototype.checkBounds = function () {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;

                this.dx = -10;
                this.x -= 10;
                this.y += 10;
            }

            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;

                this.dx = 10;
                this.x += 10;
                this.y += 10;
            }
        };

        Boss.prototype.destroy = function () {
            this.game.removeChild(this);
        };
        return Boss;
    })(createjs.Sprite);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
