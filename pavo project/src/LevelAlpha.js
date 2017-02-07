
TowerDefense.LevelAlpha = function(game) {
    this.secondsElapsed;
};

TowerDefense.LevelAlpha = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.map = null;
    this.enemies = {};
    this.fire;
    this.layer = null;
    this.spawn1total = 25;
    this.totalspawn = 0;
    this.loop = null;
};

TowerDefense.LevelAlpha.prototype = {

	preload: function () {
        console.log("levelalpha");
        this.game.load.image('tiles', 'img/ground.png');
        this.load.image('explosion', 'img/explosion.png');
        this.load.spritesheet('zombie', 'img/enemies/zombie64x64.png', 64, 64, 8);
        this.load.spritesheet('boom', 'img/explode.png', 128, 128, 8);
	},

	create: function () {
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

        //add the home base
        this.base = this.add.sprite(500, 200, 'base');
        this.physics.enable(this.base, Phaser.Physics.ARCADE);
        this.base.body.collideWorldBounds = true;
        this.base.body.immovable = true;
        
                //add health to the base
        this.base.health = 3;
        this.base.maxHealth = 12;
        this.hearts = this.game.add.group();
        this.hearts.enableBody = true;
        this.healthMeterIcons = this.game.add.plugin(Phaser.Plugin.HealthMeter);
        this.healthMeterIcons.icons(this.base, {icon: 'heartFull', y: 20, x: 20, width: 32, height: 32, rows: 2});

        this.test_Tower = new Tower(game,300,300);
        this.test_Tower2 = new Tower(game,300,100);
        this.add.existing(this.test_Tower);
        this.add.existing(this.test_Tower2);
      //  this.test_Tower.add(300,300);

       
        //this.fire = this.add.group();
        this.enemies = this.add.group();
        
        this.buildEmitter();
        this.loop = game.time.events.loop(500, this.loadEnemies, this);
//        
	},

	
    
    render: function(){
        game.debug.text("Group size: " + this.enemies.total, 32, 32);
        //game.debug.text("Destroyed: " + rip, 32, 64);
    },
    
    loadEnemies: function(){
        var randomY = game.rnd.integerInRange(200, 400);     
        var zombie = this.enemies.create(0, randomY, 'zombie'); 
        zombie.health = 10;
        zombie.animations.add('walk');
        zombie.play('walk', 10, true);
        this.physics.enable(zombie, Phaser.Physics.ARCADE);
        zombie.enableBody = true;
        this.totalspawn++;
    },
    
    checkEnemy: function(enemy){
        if(this.totalspawn > 25){
            game.time.events.remove(this.loop);
        }
        try {
            //console.log(game.width);
            
            if (enemy.x > game.width)
            {
                //rip++;
                console.log(enemy.life);
                console.log(enemy);
                console.log(enemy.x);
                this.enemies.remove(enemy, true);
            }
        }
        catch (e)
        {
            console.log(enemy);
        }

    },
    
    buildEmitter:function() {
        this.fire = this.add.group();
        this.input.onDown.add(this.fireBurst, this);
    },
    
    fireBurst: function(pointer) {
        var f = this.fire.create(pointer.x, pointer.y, 'explosion');
        f.time = 2;
        f.animations.add('burst');
        this.physics.enable(f, Phaser.Physics.ARCADE);
    },
    
    checkFire: function(f){
        console.log(f.time);
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
        console.log(enemy);
        console.log(fire);
        if(enemy.exists){
            enemy.damage(2);
        }
    },
    
    baseCollision: function(enemy, base){
        
        
        var f = this.fire.create(450, 150, 'boom');
        f.time = 2;
        f.animations.add('burst');

        
    },
    
    kill: function(enemy){
       this.enemies.remove(enemy, true);
    },

    
    
    update: function () {
        // -- 
        // this.test_Tower.fire(this.enemies);
        // this.test_Tower2.fire(this.enemies);

        
        
        this.enemies.setAll('x', 1, true, true, 1);
        this.enemies.forEach(this.checkEnemy, this, true);
        this.fire.forEach(this.checkFire, this, true);
        this.physics.arcade.overlap(this.enemies, this.fire, this.fireCollision, null, this);
        this.physics.arcade.overlap(this.enemies, this.base, this.baseCollision, null, this);
        if (this.physics.arcade.overlap(this.base, this.enemies))
        {
            this.enemies.forEach(this.kill, this, true);
            this.base.damage(1);
        }
	},
};