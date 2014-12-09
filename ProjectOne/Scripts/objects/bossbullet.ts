// Boss Bullet Class
module objects {
    export class BossBullet extends objects.BossObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("laser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  