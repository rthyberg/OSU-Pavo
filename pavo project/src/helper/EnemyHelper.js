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

//BUILD DRY BABY (sneaky and mean, spider inside my dreams)
Drybaby = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'drybaby');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('walk');
    this.play('walk', 3, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Drybaby.prototype = Object.create(Phaser.Sprite.prototype);
Drybaby.prototype.constructor = Drybaby;

Drybaby.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}

//BUILD SUCCUBUS
Succ = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'succ');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('walk');
    this.play('walk', 4, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Succ.prototype = Object.create(Phaser.Sprite.prototype);
Succ.prototype.constructor = Succ;

Succ.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}

//BUILD Biggy
Biggy = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'biggy');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 0.5;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Biggy.prototype = Object.create(Phaser.Sprite.prototype);
Biggy.prototype.constructor = Biggy;

Biggy.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}

//BUILD Fly
Fly = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'fly');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Fly.prototype = Object.create(Phaser.Sprite.prototype);
Fly.prototype.constructor = Fly;

Fly.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}


//BUILD Spikes
Spikes = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spikes');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
    this.loop;
    this.path;
}

Spikes.prototype = Object.create(Phaser.Sprite.prototype);
Spikes.prototype.constructor = Spikes;

Spikes.prototype.move = function(path){
    this.x = path[this.pi].x + this.vx;
    this.y = path[this.pi].y + this.vy;
    this.pi += Math.round(this.speed);
}



