/// <reference path="../managers/asset.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*FileName: bossobject.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the generic object for boss related sprites
*/
var objects;
(function (objects) {
    var BossObject = (function (_super) {
        __extends(BossObject, _super);
        function BossObject(SpriteName) {
            _super.call(this, managers.Assets.boss, SpriteName);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return BossObject;
    })(createjs.Sprite);
    objects.BossObject = BossObject;
})(objects || (objects = {}));
//# sourceMappingURL=bossobject.js.map
