/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/playerbulletmanager.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
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

    // play state Function
    export function play(): void {
        var enemyX: number = 10;
        var enemyY: number = 100;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        player = new objects.Player(stage, game);

        bulletManager = new managers.BulletManager(player, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            ships[count] = new objects.Enemy(stage, game);
            ships[count].setX(enemyX);
            ships[count].setY(enemyY);
            enemyX += 80;

            if (enemyX >= 840 - (ships[count].width * 0.5)) {
                enemyX = 10;
                enemyY += 75; 
            }
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        //collision = new managers.Collision(player, ships, scoreboard);

        stage.addChild(game);
    }
}