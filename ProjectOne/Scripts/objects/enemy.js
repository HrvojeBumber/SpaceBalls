/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Enemy = (function () {
        function Enemy(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, this.getRandomImage());
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Enemy.prototype.getRandomImage = function () {
            var randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

            return "enemy" + randomNum;
        };

        Enemy.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset();
            }
        };

        Enemy.prototype.reset = function () {
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.y = -this.height;
        };

        Enemy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Enemy;
    })();
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
