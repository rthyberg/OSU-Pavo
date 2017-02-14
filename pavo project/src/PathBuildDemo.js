TowerDefense.PathBuildDemo = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.map = null;

    this.points = {
        'x': [ 0, 300, 300, 800],
        'y': [ 250, 250, 400,  400 ]
    };
    
    this.path = [];
};

TowerDefense.PathBuildDemo.prototype = {

	preload: function () {
        console.log("pathbuilddemo");
	},

	create: function () {
        // Build dynamic map
		DynamicMapBuilder(this);
        
        // GET map data to generate path line
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        this.plot();
    },

    plot: function () {

        this.bmd.clear();

        var x = 1 / game.width;
        
        this.path = [];
        
        for (var i = 0; i <= 1; i += x)
        {
            var px = this.math.linearInterpolation(this.points.x, i);
            var py = this.math.linearInterpolation(this.points.y, i);
            
            //Draw Line for path
            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            
            this.path.push( { x: px, y: py });
        }

        for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }
        road = new Road("darkroad");
        road.draw(this.path);
    },
    
    update: function () {
        
	},
    
    
};