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
        this.game.load.spritesheet('mummy', 'images/placeholder-enemy.png', 64, 64, 180);
        /**********AUDIO*******************/

        this.state.start('Game'); // changes state to Game.js
	},
};
