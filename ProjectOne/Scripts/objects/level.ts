/*FileName: level.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the level label that appears at the start of every level  
*/
module objects {
    export class LevelLabel extends objects.Label {
        private dy: number;
        private height: number;
        constructor(levelText: string) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            super(this.x, this.y, levelText);
            this.dy = 2;
            this.height = this.getBounds().height;
            game.addChild(this);
        }

        //move it up until it is off screen
        update() {
            this.y -= this.dy
            if (this.y < 0 - this.height) {
                this.dy = 0;
            }
        }
    }
}  