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

        update() {
            this.y -= this.dy
            if (this.y < 0 - this.height) {
                this.dy = 0;
            }
        }
    }
}  