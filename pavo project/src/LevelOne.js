TowerDefense.LevelOne = function(game) {
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

TowerDefense.LevelOne.prototype = {

	preload: function () {
        console.log("levelone");
        this.game.load.tilemap('levelone', 'img/tiles/cave/level_one.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('cavemap', 'img/tiles/cave/Cave.png');
        this.load.image('explosion', 'img/explosion.png');
        this.load.spritesheet('zombie', 'img/enemies/zombie64x64.png', 64, 64, 8);
	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
        var map = this.game.add.tilemap('cave');
        map.addTilesetImage('cave', 'tiles');
        var layer = map.createLayer('world1');
        layer.resizeWorld();
        layer.wrap = true;
        
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
        zombie.life = 10;
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
            enemy.kill();
        }
    },
    
    update: function () {
        // -- 
        this.enemies.setAll('x', 1, true, true, 1);
        this.enemies.forEach(this.checkEnemy, this, true);
        this.fire.forEach(this.checkFire, this, true);
        this.physics.arcade.overlap(this.enemies, this.fire, this.fireCollision, null, this);
	},
};