// Explosion Class
module objects {
    export class BossExplosion extends createjs.Sprite {
        game: createjs.Container;
        width: number;
        height: number;
        constructor(game: createjs.Container) {
            super(managers.Assets.bossExplosion, "explosion");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.game.addChild(this);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}    