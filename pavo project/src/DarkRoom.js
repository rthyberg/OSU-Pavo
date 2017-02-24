TowerDefense.DarkRoom = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.map = null;
    this.enemies = {};
    this.fire;
    this.layer = null;
    this.spawn1total = 25;
    this.totalspawn = 0;
    this.loop = null;
    this.player;

    this.bmd = null;

    // Wave variables
    this.spawnstart = true;
    this.wave1spawn = 0;
    this.wave1max = 10;
    this.wave2spawn = 0;
    this.wave2max = 15;
    this.wave3spawn = 0;
    this.wave3max = 25;
    this.wave4spawn = 0;
    this.wave4max = 30;
    this.wave5spawn = 0;
    this.wave5max = 30;
    this.wave6spawn = 0;
    this.wave6max = 30;
    this.wave7spawn = 0;
    this.wave7max = 35;
    this.wave8spawn = 0;
    this.wave8max = 40;
    this.wave9spawn = 0;
    this.wave9max = 40;
    this.wave10spawn = 0;
    this.wave10max = 1;
    
    
    this.points = {
        'x': [ 50, 50, 50, 250, 250,650 ],
        'y': [ 0, 200, 400, 400, 240,240 ]
    };

    this.path = [];
    
    this.pi = 0;
};

TowerDefense.DarkRoom.prototype = {

	create: function () {
        // Build dynamic map
		DynamicMapBuilder(this, 1);

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
        
        
        // Add Player
        this.player = new Player(game,200);
        
        // Towers
        this.towerList = Tower.createGroup(this); // creates group  of towers
        this.towerList.inputEnableChildren = true; // enable input for all future children
        this.towerUI = new towerUI(game); // create a new UI object
        this.towerList.onChildInputDown.add(this.towerUI.setTower, this.towerUI); // set the UI to point to the last tower clicked
        this.uibutton = new createTowerButton(this, 300, 500, 'tower', 'tower', this.towerList);
        this.uibutton.create();



        //this.fire = this.add.group();
        this.enemies = this.add.group();
        this.fire = this.add.group();
        //this.buildEmitter();
        //this.loop = game.time.events.loop(500, this.loadEnemies, this);
        this.bga = this.add.group();
        for (var i = 0; i < game.rnd.integerInRange(9, 16); i++){
            var randomX = game.rnd.integerInRange(10, 790); 
            var randomY = game.rnd.integerInRange(10, 590); 
            var spikey = this.bga.add(new Spikey(game, randomX, randomY));
            this.physics.enable(spikey, Phaser.Physics.ARCADE);
        }

        
        for (var i = 0; i < game.rnd.integerInRange(4, 12); i++){
            var randomX = game.rnd.integerInRange(10, 790); 
            var randomY = game.rnd.integerInRange(10, 590); 
            var rocks2 = this.bga.add(new Rocks2(game, randomX, randomY));
            this.physics.enable(rocks2, Phaser.Physics.ARCADE);           
        }
        
        for (var i = 0; i < game.rnd.integerInRange(4, 17); i++){
            var randomX = game.rnd.integerInRange(10, 790); 
            var randomY = game.rnd.integerInRange(10, 590); 
            var rocks3 = this.bga.add(new Rocks3(game, randomX, randomY));
            this.physics.enable(rocks3, Phaser.Physics.ARCADE);           
        }

       
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
        zombie.health = 10;
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
        //console.log(enemy.hit);
        if(enemy.exists){
            enemy.hp -= 1;
            if(enemy.hp <= 0)
                enemy.kill();
        }
    },
        
    baseCollision: function(enemy, base){
        
        var f = this.fire.create(600, 200, 'boom');
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
            // if(this.wave1spawn < this.wave1max){
                // this.loop = game.time.events.loop(400, this.loadwave1, this);
            // }
            // } else if(this.wave2spawn < this.wave2max){
                // this.loop = game.time.events.loop(400, this.loadwave2, this);
            // } else if(this.wave3spawn < this.wave3max){
                // this.loop = game.time.events.loop(400, this.loadwave3, this);
            // } else if(this.wave4spawn < this.wave4max){
                // this.loop = game.time.events.loop(400, this.loadwave4, this);
            // } else if(this.wave5spawn < this.wave5max){
                // this.loop = game.time.events.loop(400, this.loadwave5, this);
            // } else if(this.wave6spawn < this.wave6max){
                // this.loop = game.time.events.loop(400, this.loadwave6, this);
            // } else if(this.wave7spawn < this.wave7max){
                // this.loop = game.time.events.loop(400, this.loadwave7, this);
            // } else if(this.wave8spawn < this.wave8max){
                // this.loop = game.time.events.loop(400, this.loadwave8, this);
            // } else if(this.wave9spawn < this.wave9max){
                // this.loop = game.time.events.loop(400, this.loadwave9, this);
            // } else if(this.wave10spawn < this.wave10max){
                if (this.wave10spawn < this.wave10max)
                    this.loop = game.time.events.loop(400, this.loadwave10, this);
            
            
            
            
        }
        
    },
    loadwave1: function(){
        if(this.wave1spawn < this.wave1max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);   
            enemy = this.enemies.add(new Fly(game, randomX, randomY ));
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
                enemy = this.enemies.add(new Fly(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave3spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave4: function(){
        if(this.wave4spawn < this.wave4max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            enemy = this.enemies.add(new Biggy(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave4spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave5: function(){
        if(this.wave5spawn < this.wave5max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            var enemy;
            
            if(this.wave5spawn % 2 == 1)
                enemy = this.enemies.add(new Spacebug(game, randomX, randomY ));
            else
                enemy = this.enemies.add(new Fly(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave5spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    
    loadwave6: function(){
        if(this.wave6spawn < this.wave6max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            enemy = this.enemies.add(new Spikes(game, randomX, randomY ));       
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave6spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave7: function(){
        if(this.wave7spawn < this.wave7max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            enemy = this.enemies.add(new Succ(game, randomX, randomY ));       
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave7spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave8: function(){
        if(this.wave8spawn < this.wave8max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            var enemy;
            
            if(this.wave8spawn % 2 == 1)
                enemy = this.enemies.add(new Drybaby(game, randomX, randomY ));
            else
                enemy = this.enemies.add(new Spikes(game, randomX, randomY ));
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave8spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    loadwave9: function(){
        if(this.wave9spawn < this.wave9max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            enemy = this.enemies.add(new Succ(game, randomX, randomY ));       
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave9spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
    
    loadwave10: function(){
        if(this.wave10spawn < this.wave10max){
            var randomX = game.rnd.integerInRange(-10, 10); 
            var randomY = game.rnd.integerInRange(-30, 30);    
            enemy = this.enemies.add(new Mega(game, randomX, randomY ));       
            this.physics.enable(enemy, Phaser.Physics.ARCADE);
            this.wave10spawn++;
        } else {
            game.time.events.remove(this.loop);
            this.spawnstart = true;
        }
    },
};
