/*FILE FOR UI ELEMENTS*/

/*Creates a UI button *
 *key represents the button image key
 *place represets the image that will be glues to mouse
 *list represents the group created by Tower.creatGroup() */

function createTowerButton(game, x, y, key, place, list, player, path) {
    this.game = game; // sets the current game
    this.towerList = list; // sets the tower group
    this.placeHolder = game.add.sprite(game.input.x, game.input.y, place); // add a sprite that hovers around the mouse
    this.placeHolder.anchor.set(0.5, 0.5); // sets sprite to have centered origin
    this.placeHolder.visible = false; // hide this sprite
    this.game.physics.enable(this.placeHolder, Phaser.Physics.ARCADE); // enable physics to check tower stacking
    this.towerButton = game.add.button(x, y, key, null, game, 2, 1, 0); // add the button to the x, y
    this.player = player;
    this.path = path;
    console.log(this.path);
    // display Font
    var style = {
        font: "16px Arial",
        align: "center",
    };
    this.text = game.add.text(this.towerButton.x+20, this.towerButton.y-5, "Invalid funds", style); // add text object the the right of the coins
    this.text.visible = false;

    // Displays Towers "range" when adding
    var graphics = this.game.add.graphics(0, 0);
    graphics.beginFill(0xFF0000, 0);
    graphics.lineStyle(2, 0xffd900, 1)
    graphics.drawCircle(0, 0, (200 * 2));
    this.placeHolder.addChild(graphics);
    
    
    this.coinsDisplay1 = game.add.sprite(335, 10, 'coins');
    this.coinsDisplay1.animations.add('spin');
    this.coinsDisplay1.animations.play('spin', 30, true);
    this.text = game.add.text(this.coinsDisplay1.x+40, this.coinsDisplay1.y+10, 15, style); // add text object the the right of the coins

};

createTowerButton.prototype = {
    // Function checks if x and y are cooridnates inside the given path based on the point and how wide the path is.
    // it checks the if the values are with in the four corners of the squal that would make up that part of the path
    squareCheck: function (x, y) {
        for(var i = 0; i < this.path.length; i ++) {
            if(x >= this.path[i].x-50 && x  <= this.path[i].x+74 &&
                y >= this.path[i].y-50 && y <= this.path[i].y +66) {
                return false;
            }
        }
        return true;
    },

// Call Create in the levels create function after the obj as been made
    create: function() {
        var style = {
            font: "16px Arial",
            align: "center",
        };
        this.towerButton.onInputDown.add(showTower, this); // add listener for clicking button down
        this.towerButton.onInputUp.add(buildTower, this); // add listener for releasing after clicking hte button
        this.coinsDisplay1 = game.add.sprite(335, 10, 'coins');
        this.coinsDisplay1.animations.add('spin');
        this.coinsDisplay1.animations.play('spin', 30, true);
        this.text = game.add.text(this.coinsDisplay1.x+40, this.coinsDisplay1.y+10, 15, style); // add text object the the right of the coins
        function showTower() {
            if(this.player.coins-15 >= 0) {
                this.placeHolder.visible = true; // when mouse pressed down show the "fake tower"
            } else this.text.visible = true; // show that tower can not be built
        }

        function buildTower() {
            if(this.player.coins-15 >= 0 &&
                this.squareCheck(this.game.input.x, this.game.input.y) &&
                !this.game.physics.arcade.overlap(this.placeHolder, this.towerList, null, null, null)) {
                this.player.updateCoin(-15);
                this.placeHolder.visible = false; // when button let go build the tower on the x, y
                var newTower = this.towerList.create(this.game.input.x, this.game.input.y, 'tower', 'bullet');
                newTower.setPlayer(this.player);
            } else {
                this.text.visible = false; // disable font if tower isnt being built
                this.placeHolder.visible = false; // disable placeholder if cant be placed
                // TODO Add invalid sound effect?
            }

        }
        

    },
    // call update in the levels update function
    update: function() {
        this.placeHolder.x = this.game.input.mousePointer.worldX;
        this.placeHolder.y = this.game.input.mousePointer.worldY;

    }
};


towerUI = function(game,player) {
    this.currentTower = null;
    this.player = player;
    // add a button for each property we want to modify
    this.dmgUp = game.add.button(-20, -20, 'dmgUp', dmgUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // damage
    this.rngUp = game.add.button(-20, -20, 'dmgUp', rngUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // range
    this.spdUp = game.add.button(-20, -20, 'dmgUp', spdUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // Rate of fire
    this.frostUp = game.add.button(-20, -20, 'dmgUp', frostUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // setFrost
    this.doubleUp = game.add.button(-20, -20, 'dmgUp', doubleUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // setFrost
    this.fireUp = game.add.button(-20, -20, 'dmgUp', fireUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // setFrost
    // disable all ablity to input until called
    this.dmgUp.inputEnabled = false;
    this.rngUp.inputEnabled = false;
    this.spdUp.inputEnabled = false;
    this.frostUp.inputEnabled = false;
    this.doubleUp.inputEnabled = false;
    this.fireUp.inputEnabled = false;
    this.on = false
    var style = {
        font: "16px Arial",
        align: "center",
    };
    this.text = game.add.text(0, 0, "Invalid funds", style); // add text object the the right of the coins
    this.text.visible = false;
    // add display text onDown

    this.dmgUp.onInputDown.add(down, this);
    this.dmgUp.onInputUp.add(up, this);
    this.rngUp.onInputDown.add(down, this);
    this.rngUp.onInputUp.add(up, this);
    this.spdUp.onInputDown.add(down, this);
    this.spdUp.onInputUp.add(up, this);
    this.frostUp.onInputDown.add(down2, this);
    this.frostUp.onInputUp.add(up, this);
    this.doubleUp.onInputDown.add(down2, this);
    this.doubleUp.onInputUp.add(up, this);
    this.fireUp.onInputDown.add(down2, this);
    this.fireUp.onInputUp.add(up, this);

    // function that sets currentTower and enables buttons until next call
    this.setTower = function(new_tower, pointer) {
            if (!this.on) {
                this.currentTower = new_tower;
                // set dmg button offset
                this.dmgUp.x = new_tower.x + 20;
                this.dmgUp.y = new_tower.y - 20;
                this.dmgUp.inputEnabled = true;
                // set the range button off set
                this.rngUp.x = new_tower.x + 20;
                this.rngUp.y = new_tower.y;
                this.rngUp.inputEnabled = true;;;
                // set the spd button off set
                this.spdUp.x = new_tower.x + 20;
                this.spdUp.y = new_tower.y + 20;
                this.spdUp.inputEnabled = true;
                // set frost button
                this.frostUp.x = new_tower.x -45;
                this.frostUp.y = new_tower.y -20;
                this.frostUp.inputEnabled = true;
                // set double button
                this.doubleUp.x = new_tower.x -45;
                this.doubleUp.y = new_tower.y;
                this.doubleUp.inputEnabled = true;
                // set fire up
                this.fireUp.x = new_tower.x - 45;
                this.fireUp.y = new_tower.y + 20;
                this.fireUp.inputEnabled = true;
                this.on = true;
            } else {
                // set back to default aka OFF SCREEN
                this.dmgUp.x = -40;
                this.dmgUp.y = new_tower.y - 40;
                this.dmgUp.inputEnabled = false;
                // set the range button
                this.rngUp.x = -40;
                this.rngUp.y = -40;
                this.rngUp.inputEnabled = false;
                // set the spd button
                this.spdUp.x = -40;
                this.spdUp.y = -40;
                this.spdUp.inputEnabled = false;
                // set frost button
                this.frostUp.x = -40;
                this.frostUp.y = -40
                this.frostUp.inputEnabled = false;
                // set double button
                this.doubleUp.x = -40;
                this.doubleUp.y = -40;
                this.doubleUp.inputEnabled = false;
                // set fire Up off screen
                this.fireUp.x = -40;
                this.fireUp.y = -40;
                this.fireUp.inputEnabled = false;
                this.on = false;
            }
        }
        // set dmgUp
    function dmgUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15);
            this.currentTower.damage++;
        }
    }
    // set range up
    function rngUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15);
            this.currentTower.weapon.bulletKillDistance += 50;
            this.currentTower.weapon2.bulletKillDistance += 50;
            this.currentTower.updateRange();
        }
    }
    // set rate of fire up
    function spdUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15);
            this.currentTower.weapon.fireRate -= 50;
            this.currentTower.weapon2.fireRate -= 50;
        }
    }
    function frostUp() {
        if(this.player.coins-50 >= 0) {
            this.player.updateCoin(-50);
            this.currentTower.frostShot = true;
        }
    }
    function doubleUp() {
        if(this.player.coins-50 >= 0) {
            this.player.updateCoin(-50);
            this.currentTower.doubleUp = true;
            this.currentTower.weapon.trackSprite(this.currentTower, -15, 0, false);
            this.currentTower.weapon2.trackSprite(this.currentTower, 15, 0, false);
        }
    }
    function fireUp() {
        if(this.player.coins - 50 >= 0) {
            this.player.updateCoin(-50);
            this.currentTower.fireUp = true;
            this.currentTower.fireType = 2;
        }
    }
    function down(button) {
        if(this.player.coins-15 < 0) {
            this.text.x = button.x + 40;
            this.text.y = button.y;
            this.text.visible = true
        }
    }
   function down2(button) {
       if(this.player.coins-50 < 0) {
           this.text.x = button.x - 85;
           this.text.y = button.y;
           this.text.visible = true
       }
   }
    function up() {
        this.text.visible = false;
    }
};

// Player object that tracks users coins and perhaps more
function Player(game, coins) {
    this.game = game;
    this.coins = coins; // int that tracks the players coins
    this.coinsDisplay = game.add.sprite(200, 10, 'coins'); // add spinning coin
    this.coinsDisplay.animations.add('spin');
    this.coinsDisplay.animations.play('spin', 30, true);
    var style = {
        font: "16px Arial",
        align: "center",
    };

    this.text = game.add.text(this.coinsDisplay.x+40, this.coinsDisplay.y+10, coins, style); // add text object the the right of the coins
    

};

Player.prototype = {
    displayCoin: function() {
		this.text.setText(this.coins);
    },
    updateCoin: function(value) {
        this.coins+=value;
    }
};


