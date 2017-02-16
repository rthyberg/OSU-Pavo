TowerDefense.Game = function(game) {
    this.secondsElapsed;
};

TowerDefense.Game.prototype = {
    create: function() {
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

        //add a mummy
        this.mum = this.add.sprite(300, 200, 'mummy');
        this.mum.anchor.set(0.5, 0.5);
        this.physics.enable(this.mum, Phaser.Physics.ARCADE);
        this.mum.body.collideWorldBounds = true;
	      this.mum.body.bounce.setTo(1, 1);
        this.mum.body.velocity.x = 125;
        this.mum.animations.add('walk');
        //this.mum.animations.play('walk', 10, true);

        this.towerList = Tower.createGroup(this); // creates group  of towers
        this.towerList.inputEnableChildren = true; // enable input for all future children

        this.towerUI = new towerUI(game); // create a new UI object
        this.towerList.onChildInputDown.add(this.towerUI.setTower, this.towerUI); // set the UI to point to the last tower clicked

        this.uibutton = new createTowerButton(this, 300, 500, 'tower', 'tower', this.towerList);// create Tower button
        this.uibutton.create();
        //add health to the base
        this.base.health = 3;
        this.base.maxHealth = 12;
        this.hearts = this.game.add.group();
        this.hearts.enableBody = true;
        this.healthMeterIcons = this.game.add.plugin(Phaser.Plugin.HealthMeter);
        this.healthMeterIcons.icons(this.base, {icon: 'heartFull', y: 20, x: 20, width: 32, height: 32, rows: 2});



    },


    update: function() {
        this.uibutton.update();
      //  console.log(this.towerList.countLiving());
        //this.towerList.callAll('fireAt', null, this.mum);
        if (this.physics.arcade.collide(this.base, this.mum)){
            if (this.base.health == 1)
                this.base.heal(3);
            this.base.damage(1);
        }

    },

    render: function() {
        //game.debug.bodyInfo(this.base, 16, 24);

    }


};
