var game = new Phaser.Game(800, 600, Phaser.AUTO, 'TowerDef', { preload: preload, create: create});

function preload() {
    game.load.image('tiles', 'img/ground.png');
    game.load.spritesheet('mummy', 'img/placeholder-enemy.png', 64, 64, 180);
}

function create() {
    //create a random background map by using a 2d matrix
    var data = '';

    for (var y = 0; y < 128; y++)
    {
        for (var x = 0; x < 128; x++)
        {
            data += game.rnd.between(0, 20).toString();

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
    game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

    //create map using 16x16 tiles
    map = game.add.tilemap('dynamicMap', 16, 16);

    //tiles == image cache key
    map.addTilesetImage('tiles', 'tiles', 16, 16);

    layer = map.createLayer(0);

    layer.resizeWorld();
    var mum = game.add.sprite(300, 200, 'mummy');
    mum.animations.add('walk');
    mum.animations.play('walk', 10, true);
    
    game.input.maxPointers = 1;
	game.stage.disableVisibilityChange = false;
    
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.minWidth = 800;
	game.scale.minHeight = 600;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.stage.forcePortrait = true;

}
