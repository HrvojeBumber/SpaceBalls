/// <reference path="../managers/asset.ts" />

/*FileName: gameobjects.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the generic game object 
*/
module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        constructor(SpriteName: string) {
            super(managers.Assets.atlas, SpriteName);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

    }
} 