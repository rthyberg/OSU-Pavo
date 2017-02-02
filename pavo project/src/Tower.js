/* Class File for Tower*/
Tower = function (game, x, y, targets) {
  // Define null variables for tower class
  Phaser.Sprite.call(this, game, x, y, 'tower')
  this.weapon = game.add.weapon(30, 'bullet');

  // kills bullet if left world
  this.weapon.bulletKillDistance = 200;
  this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  this.weapon.bulletSpeed = 600;
  this.weapon.fireRate = 700;
  // tracks the pos of the tower
  this.weapon.trackSprite(this,0,0,true);
};

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;

Tower.prototype.fire = function (target) {
  this.weapon.fireAtSprite(target);
    game.physics.arcade.overlap(target, this.weapon.bullets, collisionHandler, null, this);
};

Tower.prototype.update = function () {

};

/* Static function for loading assets*/
Tower.myload = function(game) {
  game.load.image('tower', 'img/tower.png');
  game.load.image('bullet', 'img/explosion.png');
}
//  Called if the bullet hits one of the veg sprites
collisionHandler = function (sprite, bullet) {
    bullet.kill();
}
