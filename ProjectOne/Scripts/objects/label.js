/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*FileName: label.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is a general label object that inherits from createjs.text
*/
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map
