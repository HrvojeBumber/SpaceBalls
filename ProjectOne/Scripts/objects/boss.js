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

            this.lives = 30;

            this.dx = 5;
            this.x = stage.canvas.width * 0.5;
            this.y = 150;

            game.addChild(this);

            this.placeGuns();
        }
        Boss.prototype.placeGuns = function () {
            this.guns[0] = new objects.BossGun(game);
            this.guns[0].x = 183;
            this.guns[0].y = 290;

            this.guns[1] = new objects.BossGun(game);
            this.guns[1].x = 277;
            this.guns[1].y = 270;

            this.guns[2] = new objects.BossGun(game);
            this.guns[2].x = 357;
            this.guns[2].y = 263;

            this.guns[3] = new objects.BossGun(game);
            this.guns[3].x = 430;
            this.guns[3].y = 245;

            this.guns[4] = new objects.BossGun(game);
            this.guns[4].x = 498;
            this.guns[4].y = 263;

            this.guns[5] = new objects.BossGun(game);
            this.guns[5].x = 580;
            this.guns[5].y = 270;

            this.guns[6] = new objects.BossGun(game);
            this.guns[6].x = 673;
            this.guns[6].y = 290;
        };

        Boss.prototype.update = function () {
            this.checkBounds();
            if (frameCount % 15 == 0) {
                this.x += this.dx;
                var len = this.guns.length;
                for (var count = 0; count < len; count++) {
                    this.guns[count].x += this.dx;
                }
            }
        };

        Boss.prototype.checkBounds = function () {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;

                this.dx = -5;
                this.x -= 5;
                this.y += 5;

                var len = this.guns.length;
                for (var count = 0; count < len; count++) {
                    this.guns[count].x -= 5;
                    this.guns[count].y += 5;
                }
            }

            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;

                this.dx = 5;
                this.x += 5;
                this.y += 5;

                var len = this.guns.length;
                for (var count = 0; count < len; count++) {
                    this.guns[count].x += 5;
                    this.guns[count].y += 5;
                }
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
