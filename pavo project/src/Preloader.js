TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.enemy = {};
};

TowerDefense.Preloader.prototype = {

	preload: function () {
    /************ MENU **********************/

    /************ MAPs **********************/
    this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles', 'img/tiles/cave/Cave.png');

		//this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		//this.preloadBar.anchor.setTo(0.5, 0.5);
		//this.load.setPreloadSprite(this.preloadBar);

    //frame size 64x64, 13x21 frames
   /************ SPRITE  **********************/
   this.load.spritesheet('mummy', 'images/placeholder-enemy.png', 64, 64, 180);

  /************ AUDIO **********************/

   this.state.start('Game');
	},



	update: function () {
//        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
//            this.ready = true;
//            //this.state.start('StartMenu');
//        }
	}
};
