var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Enemy class
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(stage, game) {
            _super.call(this, this.getRandomImage());
            this.onStage = true;
            this.stage = stage;
            this.game = game;
            this.location = new createjs.Point();
            this.dx = 10;

            game.addChild(this);
        }
        Enemy.prototype.getRandomImage = function () {
            var randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

            return "enemy" + randomNum;
        };

        Enemy.prototype.setX = function (x) {
            this.x = x;
        };

        Enemy.prototype.setY = function (y) {
            this.y = y;
        };

        Enemy.prototype.update = function () {
            this.checkBounds();
            if (frameCount % 30 == 0) {
                this.x += this.dx;
            }
        };

        Enemy.prototype.checkBounds = function () {
            var len = ships.length;

            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
                for (var count = 0; count < len; count++) {
                    ships[count].dx = -10;
                    ships[count].x -= 10;
                    ships[count].y += 10;
                }
            }

            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;
                for (var count = 0; count < len; count++) {
                    ships[count].dx = 10;
                    ships[count].x += 10;
                    ships[count].y += 10;
                }
            }
        };

        Enemy.prototype.destroy = function () {
            var len = ships.length;

            for (var count = 0; count < len; count++) {
                if (ships[count] == this) {
                    ships.splice(count, 1);
                    this.game.removeChild(this);
                }
            }
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
