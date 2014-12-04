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
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.dx = -5;

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
            if (frameCount % 60 == 0) {
                this.x += this.dx;
            }
        };

        Enemy.prototype.checkBounds = function () {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
                for (var count = 0; count < constants.ENEMY_NUM; count++) {
                    ships[count].dx = -5;
                    ships[count].x -= 5;
                    ships[count].y += 10;
                }
            }

            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;
                for (var count = 0; count < constants.ENEMY_NUM; count++) {
                    ships[count].dx = 5;
                    ships[count].x += 5;
                    ships[count].y += 10;
                }
            }
        };

        Enemy.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
