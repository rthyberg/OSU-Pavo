TowerDefense.Game = function(game) {
    this.secondsElapsed;
};

TowerDefense.Game.prototype = {
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

    update: function() {

    }


};
