/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new createjs.Bitmap(managers.Assets.loader.getResult("menu"));
        game.addChild(background);

        // Show Cursor
        stage.cursor = "default";

        // Display Play Button
        playButton = new objects.Button(150, 500, "play");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Play Button
        playButton = new objects.Button(550, 500, "instructions");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 