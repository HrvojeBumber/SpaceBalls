var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*FileName: enemyBullet.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the bullet object for the enemy ships
*/
var objects;
(function (objects) {
    var EnemyBullet = (function (_super) {
        __extends(EnemyBullet, _super);
        function EnemyBullet(game) {
            _super.call(this, "enemylaser");
            this.game = game;
            this.game.addChild(this);
        }
        return EnemyBullet;
    })(objects.GameObject);
    objects.EnemyBullet = EnemyBullet;
})(objects || (objects = {}));
//# sourceMappingURL=enemybullet.js.map
