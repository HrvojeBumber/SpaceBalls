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

        bulletManager.update();
        enemyBulletManager.update();
        collision.update();

        var len = ships.length;
        for (var count = 0; count < len; count++) {
            ships[count].update();
        }

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

    function getLocation(enemy) {
        var TileLocation = Math.floor(Math.random() * gameTiles.length);

        enemy.location.x = gameTiles[TileLocation].x + config.TILE_WIDTH * 0.5;
        enemy.location.y = gameTiles[TileLocation].y + config.TILE_HEIGHT * 0.5;
        gameTiles.splice(TileLocation, 1);
        enemy.x = enemy.location.x;
        enemy.y = enemy.location.y;
    }

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
        enemyBulletManager = new managers.EnemyBulletManager(game);

        // Show Cursor
        stage.cursor = "none";

        //initialize the grid
        var count = 0;
        for (var row = 0; row < config.LEVEL1_TILE_ROW; row++) {
            for (var col = 0; col < config.TILE_COL; col++) {
                gameTiles[count] = new createjs.Point();
                gameTiles[count].x = 10 + (col * config.TILE_WIDTH);
                gameTiles[count].y = 50 + (row * config.TILE_HEIGHT);
                count++;
            }
        }

        for (var i = 0; i < constants.LEVEL1_ENEMY_NUM; i++) {
            ships[i] = new objects.Enemy(stage, game);

            getLocation(ships[i]);
        }

        // Display Scoreboard
        scoreboard.showScoreboard();

        // Instantiate Collision Manager
        collision = new managers.Collision(player, scoreboard, game, bulletManager.bullet, ships, enemyBulletManager.bullets);

        levelLabel = new objects.LevelLabel("Boss level");

        stage.addChild(game);
    }
    states.boss = boss;
})(states || (states = {}));
//# sourceMappingURL=boss.js.map
