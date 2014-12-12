﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/level.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/playerbulletmanager.ts" />
/// <reference path="managers/bossbulletmanager.ts" />
/// <reference path="managers/enemybulletmanager.ts" />
/// <reference path="managers/bosscollision.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/bosslevel.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

/*FileName: game.ts
Authors: Kevin Donkers and Hrvoje Bumber
Last Modified by: Kevin Donkers
Description: This is the main game file 
that initializes the game loop and the state machine
*/

//global variables
var stage: createjs.Stage;
var game: createjs.Container;

var space: objects.Space;
var background: createjs.Bitmap;
var player: objects.Player;
var bossShip: objects.Boss;
var ships = [];
var gameTiles: createjs.Point[] = [];
var scoreboard: objects.Scoreboard;
var levelLabel: objects.LevelLabel;

var collision: managers.Collision;
var bossCollision: managers.BossCollision;
var bulletManager: managers.BulletManager;
var enemyBulletManager: managers.EnemyBulletManager
var bossBulletManager: managers.BossBulletManager;

var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionsButton: objects.Button;

var frameCount: number = 0;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Game Loop
function gameLoop(event): void {
    frameCount++;
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;
            // instantiate instruction screen
            states.instructions();
            break;
        case constants.LEVEL2_STATE:
            currentStateFunction = states.level2State;
            // instantiate level2 screen
            states.level2();
            break;
        case constants.BOSS_STATE:
            currentStateFunction = states.bossState;
            // instantiate level2 screen
            states.boss();
            break;
    }
}





