TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.enemy = {};
};

TowerDefense.Preloader.prototype = {

	preload: function () {
        this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
        
		//this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		//this.preloadBar.anchor.setTo(0.5, 0.5);
		//this.load.setPreloadSprite(this.preloadBar);
       
        //frame size 64x64, 13x21 frames
        this.load.spritesheet('mummy', 'images/placeholder-enemy.png', 64, 64, 180);
        
        //this.stage.backgroundColor = "#ee1111";

        //  Add data to the cache
        //this.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);
		//this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		//this.titleText.anchor.setTo(0.5, 0.5);
//        this.load.image('titlescreen', 'images/TitleBG.png');
//        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
//        this.load.image('hill', 'images/hill.png');
//        this.load.image('sky', 'images/sky.png');
//        this.load.atlasXML('bunny', 'images/spritesheets/bunny.png', 'images/spritesheets/bunny.xml');
//        this.load.atlasXML('spacerock', 'images/spritesheets/SpaceRock.png', 'images/spritesheets/SpaceRock.xml');
//        this.load.image('explosion', 'images/explosion.png');
//        this.load.image('ghost', 'images/ghost.png');
//        this.load.audio('explosion_audio', 'audio/explosion.mp3');
//        this.load.audio('hurt_audio', 'audio/hurt.mp3');
//        this.load.audio('select_audio', 'audio/select.mp3');
//        this.load.audio('game_audio', 'audio/bgm.mp3');
	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
        var map = this.game.add.tilemap('cave');
        map.addTilesetImage('cave', 'tiles');
        var layer = map.createLayer('world1');
        layer.resizeWorld();
        layer.wrap = true;
        
        var mum = this.add.sprite(300, 200, 'mummy');
        mum.animations.add('walk');
        mum.animations.play('walk', 10, true);
        
	},

	update: function () {
//        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
//            this.ready = true;
//            //this.state.start('StartMenu');
//        }
        
        this.state.start('LevelOne');
	}
};
