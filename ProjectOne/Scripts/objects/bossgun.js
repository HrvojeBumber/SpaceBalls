﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*FileName: bossgun.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the boss gun object that handles gun animation
*/
var objects;
(function (objects) {
    var BossGun = (function (_super) {
        __extends(BossGun, _super);
        function BossGun(game) {
            _super.call(this, "gun");
            this.game = game;
            this.game.addChild(this);
        }
        BossGun.prototype.fire = function (gun) {
            this.gotoAndPlay("cannon");
        };

        BossGun.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return BossGun;
    })(objects.BossObject);
    objects.BossGun = BossGun;
})(objects || (objects = {}));
//# sourceMappingURL=bossgun.js.map
