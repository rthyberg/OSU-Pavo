var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create});
function preload() {

    //  tiles are 16x16 each
    game.load.image('tiles', 'img/ground.png');

}

function create() {
    //create a random background map
    var data = '';

    for (var y = 0; y < 200; y++)
    {
        for (var x = 0; x < 200; x++)
        {
            data += game.rnd.between(0, 20).toString();

            if (x < 199)
            {
                data += ',';
            }
        }

        if (y < 199)
        {
            data += "\n";
        }
    }

    //console.log(data);

    //  Add data to the cache
    game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    map = game.add.tilemap('dynamicMap', 20, 20);

    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('tiles', 'tiles', 20, 20);


}