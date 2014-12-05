/// <reference path="../constants.ts" />
/// <reference path="../config/config.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/playerbulletmanager.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        player.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            ships[count].update();
        }

        bulletManager.firing = controls.LASER;
        bulletManager.update();

        //collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    function getLocation(enemy) {
        var TileLocation = Math.floor(Math.random() * gameTiles.length);

        enemy.location.x = gameTiles[TileLocation].x + config.TILE_WIDTH * 0.5;
        enemy.location.y = gameTiles[TileLocation].y + config.TILE_HEIGHT * 0.5;
        gameTiles.splice(TileLocation, 1);
        enemy.x = enemy.location.x;
        enemy.y = enemy.location.y;
    }
    states.getLocation = getLocation;

    // play state Function
    function play() {
        var enemyX = 10;
        var enemyY = 100;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        player = new objects.Player(stage, game);

        bulletManager = new managers.BulletManager(player, game);

        // Show Cursor
        stage.cursor = "none";

        //initialize the grid
        var count = 0;
        for (var row = 0; row < config.TILE_ROW; row++) {
            for (var col = 0; col < config.TILE_COL; col++) {
                gameTiles[count] = new createjs.Point();
                gameTiles[count].x = 10 + (col * config.TILE_WIDTH);
                gameTiles[count].y = 100 + (row * config.TILE_HEIGHT);
                count++;
            }
        }

        for (var i = 0; i < constants.ENEMY_NUM; i++) {
            ships[i] = new objects.Enemy(stage, game);

            getLocation(ships[i]);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        //collision = new managers.Collision(player, scoreboard, game, bulletManager.bullet, ships);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
