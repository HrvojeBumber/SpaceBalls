var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/Space.jpg" },
        { id: "menu", src: "assets/images/spacemenu.png" },
        { id: "level2", src: "assets/images/level2.jpg" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/sprites.png"],
        "frames": [
            [67, 418, 57, 67],
            [0, 120, 170, 164],
            [126, 460, 25, 50],
            [67, 346, 65, 70],
            [0, 346, 65, 70],
            [0, 418, 65, 70],
            [126, 418, 25, 40],
            [0, 0, 500, 58],
            [0, 286, 165, 58],
            [0, 60, 408, 58],
            [134, 346, 24, 40]
        ],
        "animations": {
            "blue": [0],
            "boss": [1],
            "bosslaser": [2],
            "enemy1": [3],
            "enemy2": [4],
            "enemy3": [5],
            "enemylaser": [6],
            "instructions": [7],
            "play": [8],
            "playagain": [9],
            "playerlaser": [10]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
