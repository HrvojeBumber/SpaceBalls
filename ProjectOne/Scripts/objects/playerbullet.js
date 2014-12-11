var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Bullet Class
var objects;
(function (objects) {
    var PlayerBullet = (function (_super) {
        __extends(PlayerBullet, _super);
        function PlayerBullet(game) {
            _super.call(this, "playerlaser");
            this.game = game;
            this.game.addChild(this);
        }
        return PlayerBullet;
    })(objects.GameObject);
    objects.PlayerBullet = PlayerBullet;
})(objects || (objects = {}));
//# sourceMappingURL=playerBullet.js.map
