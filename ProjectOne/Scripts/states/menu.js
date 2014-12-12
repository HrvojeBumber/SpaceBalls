/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/label.ts" />
/*FileName: menu.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the main menu that is displayed at the start of the game
*/
var states;
(function (states) {
    var soundtrack;

    //play the game when clicked
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    //show the instructions when clicked
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

        levelLabel = new objects.LevelLabel(" ");

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        space.setImage("menu");

        // Show Cursor
        stage.cursor = "default";

        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

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
