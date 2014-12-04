// Bullet Class
module objects {
    export class EnemyBullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("enemylaser");
            this.game = game;
            this.game.addChild(this);
        }
    }
}  