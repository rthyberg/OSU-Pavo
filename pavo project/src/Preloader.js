TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.enemy = {};
};

TowerDefense.Preloader.prototype = {

	preload: function () {
         /*********MENU******************/
        /**********MAP*******************/
        this.game.load.image('tiles', 'img/ground.png');
        /**********SPRITES*******************/
        this.game.load.spritesheet('mummy', 'img/placeholder-enemy.png', 64, 64, 180);
        this.game.load.spritesheet('base', 'img/base.png', 64, 64, 180);
        /**********IMAGES*******************/
        this.game.load.image('heartFull', 'img/heartFull.png');
        /**********AUDIO*******************/

        this.state.start('Game'); // changes state to Game.js
	},
};
