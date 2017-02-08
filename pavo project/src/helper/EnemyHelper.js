/* Class File for Zombie*/
Zombie = function (game, x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'zombie');
    this.hp = 10;
    this.pi = 0;
    this.animations.add('walk');
    this.play('walk', 10, true);
    this.enableBody = true;
};

Zombie.prototype = Object.create(Phaser.Sprite.prototype);
Zombie.prototype.constructor = Zombie;

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