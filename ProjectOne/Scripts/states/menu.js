/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function menuState() {
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

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

        // Display Instructions Button
        instructionsButton = new objects.Button(550, 500, "instructions");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
