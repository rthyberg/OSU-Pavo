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

    this.bmd = null;

    // Wave variables
    this.spawnstart = true;
    this.wave1spawn = 0;
    this.wave1max = 25;
    this.wave2spawn = 0;
    this.wave2max = 25;
    this.wave3spawn = 0;
    this.wave3max = 30;
    
    
    this.points = {
        'x': [ 50, 50, 50, 250, 250,650 ],
        'y': [ 0, 200, 400, 400, 240,240 ]
    };

    this.path = [];
    this.pi = 0;
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
        // Build dynamic map
		DynamicMapBuilder(this);

        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        
        // Plot and Draw Path First
        this.plot();
        
        //add the home base
        this.base = this.add.sprite(600, 200, 'base');
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
        
        // Towers
        this.towerList = Tower.createGroup(this);

        this.uibutton = new createTowerButton(this, 300, 500, 'tower', 'tower', this.towerList);
        this.uibutton.create();



        //this.fire = this.add.group();
        this.enemies = this.add.group();
        this.fire = this.add.group();
        //this.buildEmitter();
        //this.loop = game.time.events.loop(500, this.loadEnemies, this);

       
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
        
        road = new Road("darkroad");
        road.draw(this.path);

    },
	
    
    render: function(){
        game.debug.text("Group size: " + this.enemies.total, 32, 32);
        //game.debug.text("Destroyed: " + rip, 32, 64);
    },
    
    loadEnemies: function(){
        var randomY = game.rnd.integerInRange(200, 400);
        zombie = this.enemies.add(new Zombie(game, 0, randomY ));
        zombie.health = 3;
        this.physics.enable(zombie, Phaser.Physics.ARCADE);
        this.totalspawn++;
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
    
    buildEmitter:function() {
        this.input.onDown.add(this.fireBurst, this);
    },

    fireBurst: function(pointer) {
        var f = this.fire.create(pointer.x, pointer.y, 'explosion');
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
        console.log(enemy.hit);
        if(enemy.exists){
            enemy.hp -= 1;
            if(enemy.hp <= 0)
                enemy.kill();
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
        this.uibutton.update()
        this.towerList.callAll('selectTarget', null, this.enemies);
        this.checkwave();
        //this.enemies.setAll('x', 1, true, true, 1);
        this.enemies.forEach(this.checkEnemy, this, true);
        this.fire.forEach(this.checkFire, this, true);
        this.physics.arcade.overlap(this.enemies, this.fire, this.fireCollision, null, this);
        this.physics.arcade.overlap(this.enemies, this.base, this.baseCollision, null, this);
        if (this.physics.arcade.overlap(this.base, this.enemies))
        {
            this.enemies.forEach(this.kill, this, true);
            this.base.damage(1);
            if (this.base.health==0){
                game.paused=true;
            }
        }
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
            var randomX = game.rnd.integerInRange(-30, 30); 
            var randomY = game.rnd.integerInRange(-30, 30);   
            enemy = this.enemies.add(new Spikes(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave1spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave2: function(){
        if(this.wave2spawn < this.wave2max){
            var randomX = game.rnd.integerInRange(-30, 30); 
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
            var randomX = game.rnd.integerInRange(-30, 30); 
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