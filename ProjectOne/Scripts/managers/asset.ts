module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/Space.jpg" },
        { id: "menu", src: "assets/images/spacemenu.png" },
        { id: "level2", src: "assets/images/level2.jpg" },
        { id: "bosslevel", src: "assets/images/bosslevel.jpg" },
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
            [201, 189, 24, 40],
        ],

        "animations": {
            "player": [0],
            "enemy1":[2],
            "enemy2":[3],
            "enemy3":[4],
            "enemylaser":[5],
            "instructions":[6],
            "play":[7],
            "playagain":[8],
            "playerlaser": [9],
            "flickerPlayer": {
                frames: [0, 1],
                speed: 0.2
            }
        }
    }

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
    }

    var bossData = {
        "images": ["assets/images/bosssprites.png"],
        "frames": [

            [53, 923, 15, 41],
            [53, 966, 15, 48],
            [70, 885, 15, 49],
            [70, 936, 15, 48],
            [36, 972, 15, 48],
            [38, 885, 15, 36],
            [36, 933, 15, 37],
            [19, 933, 15, 38],
            [19, 973, 15, 39],
            [87, 885, 15, 40],
            [53, 923, 15, 41],

            [0, 930, 17, 43],
            [0, 975, 17, 46],
            [87, 927, 12, 43],
            [19, 885, 17, 46],
            [0, 885, 17, 43],
            [19, 885, 17, 46],
            [87, 927, 12, 43],
            [0, 975, 17, 46],

            [0, 0, 552, 293],
            [0, 295, 552, 293],
            [0, 590, 552, 293]
        ],

        "animations": {
            "cannon": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                next: "gun",
                speed: 0.2
            },
            "gun": [10],
            "laser": {
                frames: [11, 12, 13, 14, 15, 16, 17, 18],
                speed: 0.5
            },
            "weakboss": {
                frames: [19, 21],
                speed: 0.2
            },
            "boss": [20]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static explosion: createjs.SpriteSheet;
        public static boss: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.explosion = new createjs.SpriteSheet(explosionData);
            this.boss = new createjs.SpriteSheet(bossData);
        }

    }
} 