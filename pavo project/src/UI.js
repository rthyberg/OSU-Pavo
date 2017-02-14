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
