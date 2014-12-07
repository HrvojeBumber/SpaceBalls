/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        space.setImage("menu");
        //background = new createjs.Bitmap(managers.Assets.loader.getResult("menu"));
        game.addChild(background);

        // Show Cursor
        stage.cursor = "default";

        // Display Play Button
        playButton = new objects.Button(150, 500, "play");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Instructions Button
        instructionsButton = new objects.Button(550, 500, "instructions");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
} 