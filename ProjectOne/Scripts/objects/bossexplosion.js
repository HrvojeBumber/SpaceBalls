var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Explosion Class
var objects;
(function (objects) {
    var BossExplosion = (function (_super) {
        __extends(BossExplosion, _super);
        function BossExplosion(game) {
            _super.call(this, managers.Assets.bossExplosion, "bosssplodes");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.game.addChild(this);
        }
        BossExplosion.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return BossExplosion;
    })(createjs.Sprite);
    objects.BossExplosion = BossExplosion;
})(objects || (objects = {}));
//# sourceMappingURL=bossexplosion.js.map
