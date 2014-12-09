// boss Class
module objects {
    export class BossGun extends objects.BossObject {
        game: createjs.Container;
        firing: boolean;
        constructor(game: createjs.Container) {
            super("gun");
            this.game = game;
            this.game.addChild(this);
        }

        fire() {
            this.gotoAndPlay("cannon");
            this.firing = true;
            setTimeout(function (e) {
                this.gotoAndPlay("gun");
                this.firing = false;
            }, 500);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  