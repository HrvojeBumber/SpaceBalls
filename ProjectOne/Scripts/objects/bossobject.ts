/// <reference path="../managers/asset.ts" />

/*FileName: bossobject.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the generic object for boss related sprites 
*/
module objects {
    export class BossObject extends createjs.Sprite {
        width: number;
        height: number;
        constructor(SpriteName: string) {
            super(managers.Assets.boss, SpriteName);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

    }
}  