
DynamicMapBuilder = function(state){
    var data = '';
    for (var y = 0; y < 128; y++)
    {
        for (var x = 0; x < 128; x++)
        {
            data += state.rnd.between(0, 20).toString();
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
    //add data to cache
    state.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);
    //create map using 16x16 tiles
    map = state.add.tilemap('dynamicMap', 16, 16);
    //tiles == image cache key
    map.addTilesetImage('tiles', 'tiles', 16, 16);
    layer = map.createLayer(0);
    layer.resizeWorld();
};


/* Class File for Path*/
// Define sprite as road used
Road = function (sprite) {
    this.height = 600;
    this.width = 800;
    this.pathwidth = 50;
    this.tilewidth = 16;
    this.sprite = sprite;
};
Road.prototype.constructor = Road;
Road.prototype.draw = function(path){
    var tilewidth = this.tilewidth;
    var pathwidth = this.pathwidth;
    var sprite = this.sprite;
    
    var maxvcell = Math.round(this.height/tilewidth);
    var maxhcell = Math.round(this.width/tilewidth);
    
    // Build Array for map tiles
    var mem = new Array(maxvcell);
    for(var i = 0; i < maxvcell; i++){
        mem[i] = new Array(maxhcell);
    };
    
    // Draw path
    path.forEach(function(p){
        var vcell = Math.round(p.y/tilewidth);
        var hcell = Math.round(p.x/tilewidth);
        
        for(var i = p.y - pathwidth; i < p.y + pathwidth; i += tilewidth){
            for( j = p.x - pathwidth; j < p.x + pathwidth; j += tilewidth){
                vcell = Math.round(i/tilewidth);
                hcell = Math.round(j/tilewidth);
                if(vcell >= 0 && vcell < maxvcell && hcell >= 0 && hcell < maxhcell){
                    if(mem[vcell][hcell] == undefined){
                        mem[vcell][hcell] = true;
                        game.add.sprite(hcell*tilewidth, vcell*tilewidth ,sprite);
                    }
                }

            }

        }
    });
}

