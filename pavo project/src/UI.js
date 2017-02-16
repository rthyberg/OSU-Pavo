/*FILE FOR UI ELEMENTS*/

/*Creates a UI button *
*key represents the button image key
*place represets the image that will be glues to mouse
*list represents the group created by Tower.creatGroup() */

 function createTowerButton(game, x, y, key, place, list) {
  this.game = game; // sets the current game
  this.towerList = list; // sets the tower group
  this.placeHolder = game.add.sprite(game.input.x, game.input.y, place);    // add a sprite that hovers around the mouse
  this.placeHolder.anchor.set(0.5,0.5);                                    // sets sprite to have centered origin
  this.placeHolder.visible = false;                                        // hide this sprite
  this.towerButton = game.add.button(x, y, key, null , game, 2,1,0);      // add the button to the x, y

  // Displays Towers "range" when adding
  var graphics = this.game.add.graphics(0, 0);
  graphics.beginFill(0xFF0000, 0);
  graphics.lineStyle(2, 0xffd900, 1)
  graphics.drawCircle(0, 0, (200 *2));
  this.placeHolder.addChild(graphics);
};

createTowerButton.prototype = {
  // Call Create in the levels create function after the obj as been made
  create: function ()  {
    this.towerButton.onInputDown.add(showTower, this);                  // add listener for clicking button down
    this.towerButton.onInputUp.add(buildTower, this);                  // add listener for releasing after clicking hte button
    function showTower () {
      this.placeHolder.visible = true;                                // when mouse pressed down show the "fake tower"
    }
    function  buildTower() {
      this.placeHolder.visible = false;                             // when button let go build the tower on the x, y
      this.towerList.create(this.game.input.x, this.game.input.y, 'tower', 'bullet');
    }
  },
  // call update in the levels update function
  update: function () {
    this.placeHolder.x = this.game.input.mousePointer.worldX;
    this.placeHolder.y = this.game.input.mousePointer.worldY;
  }
};


towerUI = function(game) {
	this.currentTower = null;
    // add a button for each property we want to modify
    this.dmgUp = game.add.button(-20, -20, 'dmgUp', dmgUp, this, 'Up', 'Up', 'UpPressed', 'Up'); // damage
    this.rngUp = game.add.button(-20, -20, 'dmgUp',  rngUp, this, 'Up', 'Up', 'UpPressed', 'Up');// range
    this.spdUp = game.add.button(-20, -20, 'dmgUp', spdUp, this, 'Up','Up', 'UpPressed', 'Up'); // Rate of fire
    // disable all ablity to input until called
    this.dmgUp.inputEnabled = false;
    this.rngUp.inputEnabled = false;
    this.spdUp.inputEnabled = false;
    this.on = false;
    // function that sets currentTower and enables buttons until next call
    this.setTower = function(new_tower, pointer) {
        if(!this.on) {
            this.currentTower = new_tower;
            // set dmg button offset
            this.dmgUp.x = new_tower.x + 20;
            this.dmgUp.y = new_tower.y -20;
            this.dmgUp.inputEnabled = true;
            // set the range button off set
            this.rngUp.x = new_tower.x + 20;
            this.rngUp.y = new_tower.y;
            this.rngUp.inputEnabled = true;;;
            // set the spd button off set
            this.spdUp.x = new_tower.x + 20;
            this.spdUp.y = new_tower.y +20;
            this.spdUp.inputEnabled = true;
            this.on = true;
        } else {
            // set back to default aka OFF SCREEN
            this.dmgUp.x = -40;
            this.dmgUp.y = new_tower.y -40;
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
        this.currentTower.damage++;
        console.log(this.currentTower.damage);
    }
    // set range up
    function rngUp() {
        this.currentTower.weapon.bulletKillDistance += 50;
        this.currentTower.updateRange();
        console.log(this.currentTower.weapon.bulletKillDistance);
    }
    // set rate of fire up
    function spdUp() {
        this.currentTower.weapon.fireRate -= 50;
        console.log(this.currentTower.weapon.fireRate);
    }
};

