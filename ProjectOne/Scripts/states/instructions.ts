/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function instructionState() {
        
    }

    export function instructions() {
        var instructionTitleLabel: objects.Label;
        var instructionText: createjs.Text;
        var labelText: objects.gameText;
        var bossLabelText: objects.gameText;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        space.setImage("space");
        var instructionPlayer = new createjs.Sprite(managers.Assets.atlas, "blue");
        var instructionEnemy = new createjs.Sprite(managers.Assets.atlas, "enemy1");
        var instructionBoss = new createjs.Sprite(managers.Assets.atlas, "boss");

        // Show Cursor
        stage.cursor = "default";

        // Display title and instructions
        instructionTitleLabel = new objects.Label(360, 30, "Instructions");

        instructionText = new createjs.Text(
            "Control the blue ship with the arrow keys or A and D, press space to shoot." +
            "Shoot all the enemies to complete the level." +
            "There are 3 levels.The third level is a boss level." +
            "Avoid the enemy ships lasers,if you get hit with one you will lose a life." +
            "If you lose all 5 of your lives, it's game over.", constants.TEXT_FONT, constants.LABEL_COLOUR);

        instructionText.x = 20;
        instructionText.y = 80;

        instructionText.lineWidth = 830;
        instructionText.lineHeight = 40;

        game.addChild(instructionTitleLabel);
        game.addChild(instructionText);
        
        labelText = new objects.gameText(123, 470, " ENEMY  PLAYER");
        bossLabelText = new objects.gameText(675, 420, "BOSS");

        instructionPlayer.x = 220;
        instructionPlayer.y = 500;

        instructionEnemy.x = 55;
        instructionEnemy.y = 500;

        instructionBoss.x = 600;
        instructionBoss.y = 450;

        game.addChild(instructionPlayer);
        game.addChild(instructionEnemy);
        game.addChild(instructionBoss);
        game.addChild(labelText);
        game.addChild(bossLabelText);
        
        // Display Play Button
        playButton = new objects.Button(440, 530, "play");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
}  