TowerDefense.Game = function(game) {
    this.secondsElapsed;
};

TowerDefense.Game.prototype = {
    create: function() {
      //create tiles
       var data = '';

       for (var y = 0; y < 128; y++)
       {
           for (var x = 0; x < 128; x++)
           {
               data += this.rnd.between(0, 20).toString();

               if (x < 127)
               {
                   data += ',';
               }
           }

           if (y < 127)
           {
               data += "\n";
           }
       }

       //console.log(data);

       //add data to cache
       this.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

       //create map using 16x16 tiles
       map = this.add.tilemap('dynamicMap', 16, 16);

       //tiles == image cache key
       map.addTilesetImage('tiles', 'tiles', 16, 16);

       layer = map.createLayer(0);

       layer.resizeWorld();

       //add a mummy
       var mum = this.add.sprite(300, 200, 'mummy');
       mum.animations.add('walk');
       mum.animations.play('walk', 10, true);
    },


    update: function() {
      
    }


};
