var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Player Class
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(stage, game) {
            _super.call(this, "blue");
            this.stage = stage;
            this.game = game;
            this.y = 600;
            this.x = stage.canvas.width * 0.5;

            this.assignControls();

            game.addChild(this);
            //this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        // Bind key actions to player events
        Player.prototype.assignControls = function () {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };

        // Switch statement to activate movement and rotation
        Player.prototype.onControlDown = function (event) {
            switch (event.keyCode) {
                case keys.A:
                case keys.LEFT:
                    controls.TURN_LEFT = true;
                    break;
                case keys.D:
                case keys.RIGHT:
                    controls.TURN_RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.LASER = true;
                    break;
            }
        };

        // switch statement to reset controls
        Player.prototype.onControlUp = function (event) {
            switch (event.keyCode) {
                case keys.A:
                case keys.LEFT:
                    controls.TURN_LEFT = false;
                    break;
                case keys.D:
                case keys.RIGHT:
                    controls.TURN_RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.LASER = false;
                    break;
            }
        };

        // Respond to player key presses
        Player.prototype.controlAction = function () {
            // Execute left turn
            if (controls.TURN_LEFT) {
                this.dx = -5;
            }

            // Execute right turn
            if (controls.TURN_RIGHT) {
                this.dx = 5;
            }

            // move stop
            if ((controls.TURN_LEFT == false) && (controls.TURN_RIGHT == false)) {
                this.dx = 0;
            }
        };

        // Make Sure player stays on screen
        Player.prototype.checkBounds = function () {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
            }

            // Check Left Bounds
            if (this.x <= (this.width * 0.5) + 10) {
                this.x = (this.width * 0.5) + 10;
            }
        };

        Player.prototype.update = function () {
            this.checkBounds();
            this.controlAction();
            this.x += this.dx;
        };
        Player.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this);
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
