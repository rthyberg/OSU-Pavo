TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

TowerDefense.Preloader.prototype = {

	preload: function () {
  this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
	this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
	},

	create: function () {
    var map = this.game.add.tilemap('cave');
    map.addTilesetImage('cave', 'tiles');
    var layer = map.createLayer('world1');
    layer.resizeWorld();
    layer.wrap = true;
    //var layer = map.createLayer('World');
    //layer.resizeWorld();
  },

	update: function () {

	}
};
