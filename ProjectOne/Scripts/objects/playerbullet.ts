// Bullet Class
module objects {
    export class PlayerBullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("playerlaser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  