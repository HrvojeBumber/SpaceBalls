/// <reference path="../managers/asset.ts" />
module objects {
    // Player Class
    export class Player extends objects.GameObject{
        stage: createjs.Stage;
        game: createjs.Container;
        //engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("blue");
            this.stage = stage;
            this.game = game;
            this.y = 600;
            this.x = stage.canvas.width * 0.5;

            this.assignControls();

            game.addChild(this);
            //this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        // Bind key actions to player events
        private assignControls() {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }

        // Switch statement to activate movement and rotation
        private onControlDown(event: KeyboardEvent) {
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
        }

        // switch statement to reset controls
        private onControlUp(event: KeyboardEvent) {
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
        }

        // Respond to player key presses
        private controlAction() {
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
        }

        // Make Sure player stays on screen
        private checkBounds() {
            // Check Right Bounds
            if (this.x >= 855 - (this.width * 0.5) - 10) {
                this.x = 855 - (this.width * 0.5) - 10;
            }
            // Check Left Bounds
            if (this.x <= (this.width * 0.5)+ 10) {
                this.x = (this.width * 0.5) + 10;
            }
        }

        update() {
            this.checkBounds();
            this.controlAction();
            this.x += this.dx;
        }
        destroy() {
            //this.engineSound.stop();
            game.removeChild(this);
        }
    }
} 