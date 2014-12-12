var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*FileName: explosion.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the explosion object for the small ships
*/
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(game) {
            _super.call(this, managers.Assets.explosion, "explosion");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.game.addChild(this);
        }
        Explosion.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return Explosion;
    })(createjs.Sprite);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map
