/// <reference path="../constants.ts" />

/*FileName: label.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is a general label object that inherits from createjs.text
*/
module objects {
    export class Label extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
    }
} 