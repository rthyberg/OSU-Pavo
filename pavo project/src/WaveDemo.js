TowerDefense.WaveDemo = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.map = null;
    this.enemies = {};
    this.fire;
    this.layer = null;
    this.spawn1total = 25;
    this.totalspawn = 0;
    this.loop = null;
    this.bmd = null;
    
    this.spawnstart = true;
    this.wave1spawn = 0;
    this.wave1max = 25;
    this.wave2spawn = 0;
    this.wave2max = 25;
    this.wave3spawn = 0;
    this.wave3max = 30;
    

    this.points = {
        'x': [ 0, 300, 600, 800],
        'y': [ 250, 250, 400,  400 ]
    };
    
    this.path = [];
};

TowerDefense.WaveDemo.prototype = {

	preload: function () {
        console.log("wavedemo");
        this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
	},

	create: function () {
		//SET Map
        var map = this.game.add.tilemap('cave');
        map.addTilesetImage('cave', 'tiles');
        var layer = map.createLayer('world1');
        layer.resizeWorld();
        layer.wrap = true;
        
        
        // GET map data to generate path
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.plot();
        
        // Build User Weapon
        this.buildEmitter();
        // SET enemies group
        this.enemies = this.add.group();
    },

    plot: function () {

        this.bmd.clear();

        var x = 1 / game.width;
        
        this.path = [];
        
        for (var i = 0; i <= 1; i += x)
        {
            var px = this.math.linearInterpolation(this.points.x, i);
            var py = this.math.linearInterpolation(this.points.y, i);

            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            
            this.path.push( { x: px, y: py });
        }

        for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }
        
        // Draw Road
        road = new Road("darkroad");
        road.draw(this.path);

    },
    
    render: function(){
        game.debug.text("Group size: " + this.enemies.total, 32, 32);
        //game.debug.text("Destroyed: " + rip, 32, 64);
    },
    
    checkEnemy: function(enemy){
        try {
            if (enemy.x > game.width)
            {
                this.enemies.remove(enemy, true);
            }
            
            if (enemy.pi >= this.path.length)
            {
                this.enemies.remove(enemy, true);
            }
            enemy.move(this.path);
            
        }
        catch (e)
        {
            console.log(enemy);
        }

    },
    
    // -- On Click Fireburst Logic
    buildEmitter:function() {
        this.fire = this.add.group();
        this.input.onDown.add(this.fireBurst, this);
    },
    
    fireBurst: function(pointer) {
        var f = this.fire.create(pointer.x-10, pointer.y-10, 'explosion');
        f.time = 2;
        f.animations.add('burst');
        this.physics.enable(f, Phaser.Physics.ARCADE);
    },
    
    checkFire: function(f){
        try {
            if (f.time < 0)
            {
                this.fire.remove(f, true);
            }
            f.time--;
        }
        catch (e)
        {
            console.log(f);
        }
    },
    
    fireCollision: function(enemy, fire){
        
        if(enemy.exists){
            enemy.kill();
        }
    },
    // --- End OnClick FireBurst Logic
    
    update: function () {
        // -- 
        this.checkwave();
        this.enemies.forEach(this.checkEnemy, this, true);
        this.fire.forEach(this.checkFire, this, true);
        this.physics.arcade.overlap(this.enemies, this.fire, this.fireCollision, null, this);
	},
    
    
    // MANAGE waves
    checkwave: function(){
        if(this.spawnstart && this.enemies.total < 1){
            this.spawnstart = false;
            if(this.wave1spawn < this.wave1max){
                this.loop = game.time.events.loop(400, this.loadwave1, this);
            } else if(this.wave2spawn < this.wave2max){
                this.loop = game.time.events.loop(400, this.loadwave2, this);
            } else if(this.wave3spawn < this.wave3max){
                this.loop = game.time.events.loop(400, this.loadwave3, this);
            }
        }
        
    },
    loadwave1: function(){
        if(this.wave1spawn < this.wave1max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);     
            enemy = this.enemies.add(new Ufo(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave1spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave2: function(){
        if(this.wave2spawn < this.wave2max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);       
            enemy = this.enemies.add(new Spacebug(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave2spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave3: function(){
        if(this.wave3spawn < this.wave3max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            var enemy;
            
            if(this.wave3spawn % 2 == 1)
                enemy = this.enemies.add(new Spacebug(game, randomX, randomY ));
            else
                enemy = this.enemies.add(new Ufo(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave3spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    }
};