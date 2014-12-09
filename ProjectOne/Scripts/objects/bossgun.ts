// Boss Class
module objects {
    export class BossGun extends objects.BossObject {
        game: createjs.Container;
        gun: objects.BossGun;
        firing: boolean;
        constructor(game: createjs.Container) {
            super("gun");
            this.game = game;
            this.game.addChild(this);
        }

        fire(gun:objects.BossGun) {
            this.gotoAndPlay("cannon");
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  