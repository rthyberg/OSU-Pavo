/*FILE FOR UI ELEMENTS*/

/*Creates a UI button *
 *key represents the button image key
 *place represets the image that will be glues to mouse
 *list represents the group created by Tower.creatGroup() */

function createTowerButton(game, x, y, key, place, list, player) {
    this.game = game; // sets the current game
    this.towerList = list; // sets the tower group
    this.placeHolder = game.add.sprite(game.input.x, game.input.y, place); // add a sprite that hovers around the mouse
    this.placeHolder.anchor.set(0.5, 0.5); // sets sprite to have centered origin
    this.placeHolder.visible = false; // hide this sprite
    this.towerButton = game.add.button(x, y, key, null, game, 2, 1, 0); // add the button to the x, y
    this.player = player;
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
};

createTowerButton.prototype = {
    // Call Create in the levels create function after the obj as been made
    create: function() {
        this.towerButton.onInputDown.add(showTower, this); // add listener for clicking button down
        this.towerButton.onInputUp.add(buildTower, this); // add listener for releasing after clicking hte button
        function showTower() {
            if(this.player.coins-15 >= 0) {
                this.placeHolder.visible = true; // when mouse pressed down show the "fake tower"
            } else this.text.visible = true; // show that tower can not be built
        }

        function buildTower() {
            if(this.player.coins-15 >= 0) {
                this.player.updateCoin(-15);
                this.placeHolder.visible = false; // when button let go build the tower on the x, y
                this.towerList.create(this.game.input.x, this.game.input.y, 'tower', 'bullet');
            } else this.text.visible = false; // disable font if tower isnt being built
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
    // disable all ablity to input until called
    this.dmgUp.inputEnabled = false;
    this.rngUp.inputEnabled = false;
    this.spdUp.inputEnabled = false;
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
                this.on = false;
            }
        }
        // set dmgUp
    function dmgUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15);
            this.currentTower.damage++;
            console.log(this.currentTower.damage);
        }
    }
    // set range up
    function rngUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15);
            this.currentTower.weapon.bulletKillDistance += 50;
            this.currentTower.updateRange();
        }
    }
    // set rate of fire up
    function spdUp() {
        if(this.player.coins-15 >= 0) {
            this.player.updateCoin(-15)
            this.currentTower.weapon.fireRate -= 50;
        }
    }
    function down(button) {
        if(this.player.coins-15 < 0) {
            this.text.x = button.x + 40;
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
