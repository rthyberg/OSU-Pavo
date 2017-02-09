/* Class File for Tower*/
Tower = function (game, x, y, key, bulletkey) {
  // Define null variables for tower class
  Phaser.Sprite.call(this, game, x, y, key);
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.weapon = game.add.weapon(30, bulletkey);

  // kills bullet if left world
  this.weapon.bulletKillDistance = 200;
  this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  this.weapon.bulletSpeed = 450;
  this.weapon.fireRate = 700;
  this.weapon.bulletSpeed = 300;
  this.weapon.fireRate = 500;
  // tracks the pos of the tower
  this.weapon.trackSprite(this,0,0,true);

  // circle for range
  this.towerRange = new Phaser.Circle(x, y, (this.weapon.bulletKillDistance*2));
  this.target = null;
  this.game.physics.enable(this, Phaser.Physics.ARCADE);
  };

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;

/* Fires at this.target */
Tower.prototype.fireAt = function () {
    this.weapon.fireAtSprite(this.target);
    game.physics.arcade.overlap(this.target, this.weapon.bullets, collisionHandler, null, this);
};

/* Finds a target for the tower
 * Pass in a Phaser.group of sprites */
Tower.prototype.selectTarget = function(targets) {
  var inRange;
  if(this.target != null) {
      inRange = (this.towerRange.contains(this.target.x, this.target.y));  // check if current is inrange
  } else inRange = false;
  if(this.target == null || !inRange  || this.target.alive == false ) { // if target is not valid then find new
    this.target = null;
    targets.forEachAlive(distanceFormula, this);
  }
  if(this.target != null && inRange) {
    this.fireAt(); // call the fire function
  }
};

Tower.prototype.update = function () {

};

/****************Static functions************************/
Tower.myload = function (game) {
  game.load.image('tower', 'img/tower.png');
  game.load.image('bullet', 'img/explosion.png');
}

/*creates a group that towers can be added to*/
Tower.createGroup = function (game) {
  var t = game.add.group();  // create a new group in the phaser game object
  t.classType = Tower;  // set the classType to be our extended sprite class 'Tower'
  return t;             // returns a refernce to this group
}

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


//  Called if the bullet hits one of the veg sprites
collisionHandler = function (sprite, bullet) {
    bullet.kill();
    sprite.damage(1);
}

// Checks teh distance between Alive targets and the tower object
distanceFormula = function (target) {
  var contained = this.towerRange.contains(target.x, target.y); // set variable to if current target from group is in range
if(contained) {
  if(this.target == null) {  // if our current target is null make the first target in group the new target
    this.target = target;
  } else {
    var current = game.physics.arcade.distanceBetween(target, this, true);  // check distance between current target and target of the group
    var old = game.physics.arcade.distanceBetween(this.target, this, true);
    if(current < old) {                                                    // set the current target if its closer than the old
      this.target = target;
    }
  }
 }
}

// Checks teh distance between Alive targets and the tower object
distanceFormula = function (target) {
  var contained = this.towerRange.contains(target.x, target.y); // set variable to if current target from group is in range
if(contained) {
  if(this.target == null) {  // if our current target is null make the first target in group the new target
    this.target = target;
  } else {
    var current = game.physics.arcade.distanceBetween(target, this, true);  // check distance between current target and target of the group
    var old = game.physics.arcade.distanceBetween(this.target, this, true);
    if(current < old) {                                                    // set the current target if its closer than the old
      this.target = target;
    }
  }
 }
}
