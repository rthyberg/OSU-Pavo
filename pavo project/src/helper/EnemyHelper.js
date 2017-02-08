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
