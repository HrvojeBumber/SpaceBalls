var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var gameText = (function (_super) {
        __extends(gameText, _super);
        function gameText(x, y, labelText) {
            _super.call(this, labelText, constants.TEXT_FONT, constants.GAME_TEXT_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return gameText;
    })(createjs.Text);
    objects.gameText = gameText;
})(objects || (objects = {}));
//# sourceMappingURL=gameText.js.map
