/* Class File for Zombie*/
Zombie = function (game, x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'zombie');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.speed = 1;
    this.animations.add('walk');
    this.play('walk', 10, true);
    this.enableBody = true;
    this.loop;
    this.path;
};

Zombie.prototype = Object.create(Phaser.Sprite.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}



// BUILD Spacebug
Spacebug = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spacebug');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.5;
    this.animations.add('walk');
    this.play('walk', 5, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Spacebug.prototype = Object.create(Phaser.Sprite.prototype);
Spacebug.prototype.constructor = Spacebug;

Spacebug.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}