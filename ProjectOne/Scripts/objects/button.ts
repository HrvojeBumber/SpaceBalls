/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />

/*FileName: button.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the button object for the menu and game over buttons
*/
module objects {
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 