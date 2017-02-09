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

    this.bmd = null;

    this.points = {
        'x': [ 32, 128, 256, 384, 512, 608 ],
        'y': [ 240, 240, 240, 240, 240, 240 ]
    };

    this.path = [];
    this.pi = 0;
};

TowerDefense.LevelOne.prototype = {

	preload: function () {
        console.log("levelone");
        this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
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

        // Towers
        this.towerList = Tower.createGroup(this);

        this.uibutton = new createTowerButton(this, 300, 500, 'tower', 'tower', this.towerList);
        this.uibutton.create();



        //this.fire = this.add.group();
        this.enemies = this.add.group();

        this.buildEmitter();
        this.loop = game.time.events.loop(500, this.loadEnemies, this);
//

        this.stage.backgroundColor = '#204090';

        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        var py = this.points.y;

        for (var i = 0; i < py.length; i++)
        {
            py[i] = this.rnd.between(32, 432);
        }

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

            // var px = this.math.bezierInterpolation(this.points.x, i);
            // var py = this.math.bezierInterpolation(this.points.y, i);

            // var px = this.math.catmullRomInterpolation(this.points.x, i);
            // var py = this.math.catmullRomInterpolation(this.points.y, i);

            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');

            this.path.push( { x: px, y: py });
        }

        for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }

    },

    render: function(){
        game.debug.text("Group size: " + this.enemies.total, 32, 32);
        //game.debug.text("Destroyed: " + rip, 32, 64);
    },

    loadEnemies: function(){
        var randomY = game.rnd.integerInRange(200, 400);
        zombie = this.enemies.add(new Zombie(game, 0, randomY ));
        this.physics.enable(zombie, Phaser.Physics.ARCADE);
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
//                console.log(enemy.life);
//                console.log(enemy);
//                console.log(enemy.x);
                this.enemies.remove(enemy, true);
            }

            enemy.x = this.path[enemy.pi].x;
            enemy.y = this.path[enemy.pi].y;
            enemy.pi++;
            if (enemy.pi >= this.path.length)
            {
                this.enemies.remove(enemy, true);
                enemy.pi = 0;
            }

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

        if(enemy.exists){
            enemy.kill();
        }
    },
    // --- End OnClick FireBurst Logic

    update: function () {
        // --
        this.uibutton.update()
        this.towerList.callAll('selectTarget', null, this.enemies);
        this.enemies.setAll('x', 1, true, true, 1);
        this.enemies.forEach(this.checkEnemy, this, true);
        this.fire.forEach(this.checkFire, this, true);
        this.physics.arcade.overlap(this.enemies, this.fire, this.fireCollision, null, this);
	},
};
