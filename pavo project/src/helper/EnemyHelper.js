MoveFunction = function(path){
    pathindex = Math.round(this.pi);
    if(pathindex < path.length){
        this.x = path[pathindex].x + this.vx;
        this.y = path[pathindex].y + this.vy;
        this.pi += this.speed;
    } else {
        this.pi = path.length;
    }
}


// BUILD UFO
Ufo = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'ufo');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1;
    this.animations.add('walk');
    this.play('walk', 5, true);
    this.enableBody = true;
}

Ufo.prototype = Object.create(Phaser.Sprite.prototype);
Ufo.prototype.constructor = Ufo;
Ufo.prototype.move = MoveFunction;



// BUILD Spacebug
Spacebug = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spacebug');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.speed = 1.3;
    this.animations.add('walk');
    this.play('walk', 5, true);
    this.enableBody = true;
}
Spacebug.prototype = Object.create(Phaser.Sprite.prototype);
Spacebug.prototype.constructor = Spacebug;
Spacebug.prototype.move = MoveFunction;


/* Class File for Zombie*/
Zombie = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'zombie');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.speed = 0.6;
    this.animations.add('walk');
    this.play('walk', 10, true);
    this.enableBody = true;
};
Zombie.prototype = Object.create(Phaser.Sprite.prototype);
Zombie.prototype.constructor = Zombie;
Zombie.prototype.move = MoveFunction;


//BUILD DRY BABY (sneaky and mean, spider inside my dreams)
Drybaby = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'drybaby');
    this.vx = x;
    this.vy = y;
    this.hp = 25;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('walk');
    this.play('walk', 3, true);
    this.enableBody = true;
}

Drybaby.prototype = Object.create(Phaser.Sprite.prototype);
Drybaby.prototype.constructor = Drybaby;
Drybaby.prototype.move = MoveFunction;

//BUILD SUCCUBUS
Succ = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'succ');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 4, true);
    this.enableBody = true;
}

Succ.prototype = Object.create(Phaser.Sprite.prototype);
Succ.prototype.constructor = Succ;
Succ.prototype.move = MoveFunction;

//BUILD Biggy
Biggy = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'biggy');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.speed = 0.5;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Biggy.prototype = Object.create(Phaser.Sprite.prototype);
Biggy.prototype.constructor = Biggy;
Biggy.prototype.move = MoveFunction;

//BUILD Fly
Fly = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'fly');
    this.vx = x;
    this.vy = y;
    this.hp = 100;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Fly.prototype = Object.create(Phaser.Sprite.prototype);
Fly.prototype.constructor = Fly;
Fly.prototype.move = MoveFunction;


//BUILD Spikes
Spikes = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spikes');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Spikes.prototype = Object.create(Phaser.Sprite.prototype);
Spikes.prototype.constructor = Spikes;
Spikes.prototype.move = MoveFunction;


//BACKGROUND
Flames = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'bg_fire');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 3, true);
    this.enableBody = true;
}

Flames.prototype = Object.create(Phaser.Sprite.prototype);
Flames.prototype.constructor = Flames;

Spikey = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spikey');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 1, true);
    this.enableBody = true;
}

Spikey.prototype = Object.create(Phaser.Sprite.prototype);
Spikey.prototype.constructor = Spikey;

Rocks1 = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'rocks1');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.speed = 0.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Rocks1.prototype = Object.create(Phaser.Sprite.prototype);
Rocks1.prototype.constructor = Rocks1;

Rocks2 = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'rocks2');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.speed = 0.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Rocks2.prototype = Object.create(Phaser.Sprite.prototype);
Rocks2.prototype.constructor = Rocks2;

Rocks3 = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'rocks3');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.speed = 0.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Rocks3.prototype = Object.create(Phaser.Sprite.prototype);
Rocks3.prototype.constructor = Rocks3;
