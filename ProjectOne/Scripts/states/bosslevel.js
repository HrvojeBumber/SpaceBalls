/// <reference path="../constants.ts" />
/// <reference path="../config/config.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/enemybulletmanager.ts" />
/// <reference path="../managers/playerbulletmanager.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function bossState() {
        player.update();
        bossShip.update();

        bulletManager.update();
        bossBulletManager.update();
        bossCollision.update();

        scoreboard.update();
        levelLabel.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        // Change to Level 2 State if there are no ships left
        if (bossShip.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.bossState = bossState;

    // play state Function
    function boss() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        space.setImage("bosslevel");
        player = new objects.Player(stage, game);
        bossShip = new objects.Boss(stage, game);

        bulletManager = new managers.BulletManager(player, game);
        bossBulletManager = new managers.BossBulletManager(game, bossShip);

        // Show Cursor
        stage.cursor = "none";

        // Display Scoreboard
        //scoreboard.showScoreboard();
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        bossCollision = new managers.BossCollision(player, scoreboard, game, bulletManager.bullet, bossBulletManager.bullets, bossShip, bossBulletManager);

        levelLabel = new objects.LevelLabel("Boss level");

        stage.addChild(game);
    }
    states.boss = boss;
})(states || (states = {}));
//# sourceMappingURL=bosslevel.js.map
