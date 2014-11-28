var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/Space.jpg" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [174, 2, 65, 70],
            [2, 2, 170, 164],
            [69, 168, 25, 50],
            [174, 74, 65, 70],
            [174, 146, 65, 70],
            [2, 168, 65, 70],
            [96, 168, 25, 40],
            [123, 168, 24, 40]
        ],
        "animations": {
            "blue": [0],
            "boss": [1],
            "bosslaser": [2],
            "enemy1": [3],
            "enemy2": [4],
            "enemy3": [5],
            "enemylaser": [6],
            "playerlaser": [7]
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
