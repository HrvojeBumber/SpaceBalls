/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*FileName: gameover.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Hrvoje Bumber
Description: This is the gameover state that gets switched to whenever the player dies 
*/
module states {
    export function gameOverState() {
       
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        bossCollision = null;
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        space.setImage("space");

        // Show Cursor
        stage.cursor = "default";

        // Display end game message if won, if not, displays the game over message
        if (bossShip != null && bossShip.lives <= 0) {
            gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "YOU ARE VICTORIOUS");
        }
        else
        {
            gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        }
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 220, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 400, "playagain");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);

    }
}