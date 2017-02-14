TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.enemy = {};
};

TowerDefense.Preloader.prototype = {

	preload: function () {
    //this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
    //this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
		//this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		//this.preloadBar.anchor.setTo(0.5, 0.5);
		//this.load.setPreloadSprite(this.preloadBar);

         /*********MENU******************/
        /**********MAP*******************/
        this.game.load.image('tiles', 'img/ground.png');
        /*************TOWER****************/
        this.game.load.image('tower', 'img/tower.png');
        this.game.load.image('bullet', 'img/explosion.png');
        this.game.load.image('darkroad', 'img/darkroad.png');
        /**********IMAGES*******************/
        this.game.load.image('heartFull', 'img/heartFull.png');
        this.game.load.image('explosion', 'img/explosion.png');
        /**********SPRITES*******************/
        this.game.load.spritesheet('mummy', 'img/placeholder-enemy.png', 64, 64, 180);
        this.game.load.spritesheet('spacebug', 'img/space-baddie.png', 16,16, 1);
        this.game.load.spritesheet('ufo', 'img/ufo.png', 16,16, 1);
        this.game.load.spritesheet('zombie', 'img/enemies/zombie64x64.png', 64, 64, 8);
        this.game.load.spritesheet('base', 'img/base.png', 64, 64, 180);
        
        /**********AUDIO*******************/

        //this.state.start('Game'); // changes state to Game.js
        
	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
  /*      var map = this.game.add.tilemap('cave');
        map.addTilesetImage('cave', 'tiles');
        var layer = map.createLayer('world1');
        layer.resizeWorld();
        layer.wrap = true;

        var mum = this.add.sprite(300, 200, 'mummy');
        mum.animations.add('walk');
        mum.animations.play('walk', 10, true);
        this.state.start('StartMenu');
*/
        this.state.start('StartMenu');
	},

	update: function () {
        
//        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
//            this.ready = true;
//            //this.state.start('StartMenu');
//        }

        //this.state.start('LevelOne');
        
	}
};
