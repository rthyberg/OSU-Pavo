/* Class File for Tower*/
Tower = function (game, x, y, key, bulletkey) {
  // Define null variables for tower class
  Phaser.Sprite.call(this, game, x, y, key);
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.weapon = game.add.weapon(30, bulletkey);

  // kills bullet if left world
  this.weapon.bulletKillDistance = 100;
  this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  this.weapon.bulletSpeed = 600;
  this.weapon.fireRate = 700;
  // tracks the pos of the tower
  this.weapon.trackSprite(this,0,0,true);
  // circle for range
//  var circleShell = this.game.add.sprite(0,0);
  var graphics = this.game.add.graphics(0, 0);


    // graphics.lineStyle(2, 0xffd900, 1);

    graphics.beginFill(0, 0);
    graphics.lineStyle(5, 500, 0)
    graphics.drawCircle(0, 0, (this.weapon.bulletKillDistance *2));
    //circleShell.addChild(graphics);
    this.addChild(graphics);
    // Enable physics on the sprite (as graphics objects cannot have bodies applied)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    //this.game.physics.enable(this.children[0], Phaser.Physics.ARCADE);
};

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;

Tower.prototype.fire = function (target) {
  this.weapon.fireAtSprite(target);
  game.physics.arcade.overlap(target, this.weapon.bullets, collisionHandler, null, this);
  //game.physics.arcade.overlap(target, this, collisionHandler, null, this);
  //game.physics.arcade.collide(target, this.children[0], collisionHandler, null, this);
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
  graphics.drawCircle(0, 0, (100 *2));
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
}
