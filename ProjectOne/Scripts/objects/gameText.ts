/// <reference path="../constants.ts" />

/*FileName: gameText.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the game text object to create the instruction text 
*/
module objects {
    export class gameText extends createjs.Text {
        constructor(x: number, y: number, labelText: string) {
            super(labelText, constants.TEXT_FONT, constants.GAME_TEXT_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
}  