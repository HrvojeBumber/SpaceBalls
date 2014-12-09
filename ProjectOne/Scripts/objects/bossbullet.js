var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Boss Bullet Class
var objects;
(function (objects) {
    var BossBullet = (function (_super) {
        __extends(BossBullet, _super);
        function BossBullet(game) {
            _super.call(this, "laser");
            this.game = game;
            this.game.addChild(this);
        }
        return BossBullet;
    })(objects.BossObject);
    objects.BossBullet = BossBullet;
})(objects || (objects = {}));
//# sourceMappingURL=bossbullet.js.map
