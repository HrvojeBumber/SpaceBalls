var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
/// <reference path="bossgun.ts" />
var objects;
(function (objects) {
    var Boss = (function (_super) {
        __extends(Boss, _super);
        function Boss(stage, game) {
            _super.call(this, "boss");
            this.guns = [];
            this.stage = stage;
            this.game = game;

            this.lives = 3;

            this.dx = 10;
            this.x = stage.canvas.width * 0.5;
            this.y = 150;

            game.addChild(this);

            this.placeGuns();
        }
        Boss.prototype.placeGuns = function () {
            var x = this.x - this.width * 0.5;

            for (var count = 0; count < 6; count++) {
                this.guns[count] = new objects.BossGun(game);
                this.guns[count].x = x;
                this.guns[count].y = 100;
                x += this.width / 6;
            }
        };

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
    })(objects.BossObject);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
