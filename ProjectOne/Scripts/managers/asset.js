var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/Space.jpg" },
        { id: "menu", src: "assets/images/spacemenu.png" },
        { id: "level2", src: "assets/images/level2.jpg" },
        { id: "explode", src: "assets/sounds/explosion.wav" },
        { id: "shoot", src: "assets/sounds/laser.mp3" },
        { id: "soundtrack", src: "assets/sounds/space.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/sprites.png"],
        "frames": [
            [201, 120, 57, 67],
            [260, 120, 57, 67],
            [67, 180, 65, 70],
            [0, 180, 65, 70],
            [134, 180, 65, 70],
            [167, 120, 25, 40],
            [0, 0, 500, 58],
            [0, 120, 165, 58],
            [0, 60, 408, 58],
            [201, 189, 24, 40]
        ],
        "animations": {
            "player": [0],
            "enemy1": [2],
            "enemy2": [3],
            "enemy3": [4],
            "enemylaser": [5],
            "instructions": [6],
            "play": [7],
            "playagain": [8],
            "playerlaser": [9],
            "flickerPlayer": {
                frames: [0, 1],
                speed: 0.2
            }
        }
    };

    // SpriteSheet Data Object
    var explosionData = {
        "images": ["assets/images/explosion.png"],
        "frames": [
            [0, 0, 128, 128],
            [128, 0, 128, 128],
            [256, 0, 128, 128],
            [384, 0, 128, 128],
            [512, 0, 128, 128],
            [640, 0, 128, 128],
            [768, 0, 128, 128],
            [896, 0, 128, 128],
            [1024, 0, 128, 128],
            [1152, 0, 128, 128],
            [1280, 0, 128, 128],
            [1408, 0, 128, 128],
            [1536, 0, 128, 128],
            [1664, 0, 128, 128],
            [1792, 0, 128, 128],
            [1920, 0, 128, 128],
            [2048, 0, 128, 128],
            [2176, 0, 128, 128],
            [2304, 0, 128, 128],
            [2432, 0, 128, 128],
            [2560, 0, 128, 128],
            [2688, 0, 128, 128],
            [2816, 0, 128, 128],
            [2944, 0, 128, 128],
            [3072, 0, 128, 128],
            [3200, 0, 128, 128],
            [3328, 0, 128, 128],
            [3456, 0, 128, 128],
            [3584, 0, 128, 128],
            [3712, 0, 128, 128],
            [3840, 0, 128, 128],
            [3968, 0, 128, 128]
        ],
        "animations": {
            "explosion": [0, 32]
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
            this.explosion = new createjs.SpriteSheet(explosionData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
