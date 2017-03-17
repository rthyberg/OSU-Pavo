
// *** Helper functions

function MoveFunction(path) {
    pathindex = Math.round(this.pi);
    if(pathindex < path.length){
        this.x = path[pathindex].x + this.vx;
        this.y = path[pathindex].y + this.vy;
        this.pi += this.speed;
    } else {
        this.pi = path.length;
    }
}


// Dynamic Move
function DynamicMoveFunction(path) {
    var disttoend = (path.length - this.pi);
    var totalretreat = (this.retreatpoint + this.retreatdist);

    if(this.retreatcount > 0){
        // enemy is retreating
        if(this.retreat && !this.forward){
            if(disttoend > totalretreat){
                //console.log(disttoend);
                //console.log(forwarddist);
                this.forward = true;
                this.retreat = false;
                this.retreatcount -= 1;
            }
        }

        // enemy has not retreated yet
        if(!this.retreat){
            if(this.retreatpoint > disttoend){
                this.retreat = true;
                this.forward = false;
            }
        }
    }


    pathindex = Math.round(this.pi);

    if(pathindex < path.length){
        this.x = path[pathindex].x + this.vx;
        this.y = path[pathindex].y + this.vy;
        if(this.forward){
            this.pi += this.speed;
        }else{
            this.pi -= this.speed;
            if(this.pi <= 0)
                this.pi = path.length;
        }
    } else {
        this.pi = path.length;
    }
}

function SetEnemyDefault(enemy){
    enemy.pi = 0;
    enemy.anchor.x = 0.5;
    enemy.anchor.y = 0.5;
    enemy.enableBody = true;
    enemy.forward = true;
    enemy.retreat = false;
}

function EquipWeapon(enemy, bullettype){

    enemy.lastFired = 0;
    enemy.fireRate = 3000;
    enemy.fireRange = 200;

    enemy.weapon = game.add.weapon(30, bullettype);
    enemy.weapon.bulletKillDistance = 200;
    enemy.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    enemy.weapon.bulletSpeed = 200;
    enemy.weapon.fireRate = 3000;
}

function EquipBossWeapon(enemy, bullettype){

    enemy.lastFired = 0;
    enemy.fireRate = 4000;
    enemy.fireRange = 700;

    enemy.weapon = game.add.weapon(30, bullettype);
    enemy.weapon.bulletKillDistance = 800;
    enemy.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    enemy.weapon.bulletSpeed = 100;
    enemy.weapon.fireRate = 4000;
}

function FireWeapon(target){
    var dist = this.game.physics.arcade.distanceBetween(this, target);
    game.physics.arcade.overlap(target, this.weapon.bullets, BaseCollisionHandler, null, this);
    
    if (dist < this.fireRange && this.game.time.now > this.lastFired &&  this.hp > 0){
        this.weapon.trackSprite(this,0,0,true);
        this.weapon.bulletKillDistance = dist;
        this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        this.weapon.fireAtXY(target.x, target.y);
        this.lastFired = this.game.time.now + this.fireRate;
        

    }
};

function FireBoss1Weapon(target){
    //this.soundmanager = new soundManager(game);
    var dist = this.game.physics.arcade.distanceBetween(this, target);
    game.physics.arcade.overlap(target, this.weapon.bullets, BaseCollisionHandler, null, this);
    if (dist < this.fireRange && this.game.time.now > this.lastFired &&  this.hp > 0){
        this.weapon.trackSprite(this,0,0,true);
        this.weapon.bulletKillDistance = dist;
        this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        this.weapon.fireAtXY(target.x, target.y);
        this.lastFired = this.game.time.now + this.fireRate;
        
    }
};


function BaseCollisionHandler(base, bullet){
    this.soundmanager = new soundManager(game);
    bullet.kill();
    base.damage(this.damage);
    var randomS = game.rnd.integerInRange(0, 2);
    if (randomS == 0)
        this.soundmanager.hurt1.play();
    else if (randomS == 1)
        this.soundmanager.hurt2.play();
    else if (randomS == 2)
        this.soundmanager.hurt3.play();
    //add red tint to damaged sprite
    base.tint = 0xff0000;
    setTimeout(function(){
        // reset to null tint after 100 ms
        base.tint = 0xffffff;
    }, 100);
}

slow = function () {
    var time = 0.5
    if(this.slowed == false) {
        this.timer = this.game.time.create(true);
        this.oldspeed = this.speed;
        this.speed = this.speed/2;
        this.slowed = true;
        this.timer.add(500, normal, this, null);
        this.timer.start();
    } else {
        this.timer.stop(true);
        this.timer.add(500, normal, this, null);
        this.timer.start();
    }
        function normal() {
        this.speed = this.oldspeed;
        this.slowed = false;
        }
}



// *** END Helpers ***




// *** Build Objects ***

// BUILD UFO
Ufo = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'ufo');
    this.vx = x;
    this.vy = y;
    this.hp = 3;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('walk');
    this.play('walk', 5, true);
    this.enableBody = true;
    SetEnemyDefault(this);
}

Ufo.prototype = Object.create(Phaser.Sprite.prototype);
Ufo.prototype.constructor = Ufo;
Ufo.prototype.move = MoveFunction;
Ufo.prototype.slow = slow;



// BUILD Spacebug
Spacebug = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spacebug');
    this.vx = x;
    this.vy = y;
    this.hp = 3;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.3;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('walk');
    this.play('walk', 5, true);
    this.enableBody = true;
}
Spacebug.prototype = Object.create(Phaser.Sprite.prototype);
Spacebug.prototype.constructor = Spacebug;
Spacebug.prototype.move = MoveFunction;
Spacebug.prototype.slow = slow;


/* Class File for Zombie*/
Zombie = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'zombie');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 0.6;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('walk');
    this.play('walk', 10, true);
    this.enableBody = true;
};
Zombie.prototype = Object.create(Phaser.Sprite.prototype);
Zombie.prototype.constructor = Zombie;
Zombie.prototype.move = MoveFunction;
Zombie.prototype.slow = slow;


//BUILD DRY BABY (sneaky and mean, spider inside my dreams)
Drybaby = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'drybaby');
    this.vx = x;
    this.vy = y;
    this.hp = 25;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.coins = 3;
    this.animations.add('walk');
    this.play('walk', 3, true);
    this.enableBody = true;
}

Drybaby.prototype = Object.create(Phaser.Sprite.prototype);
Drybaby.prototype.constructor = Drybaby;
Drybaby.prototype.move = MoveFunction;
Drybaby.prototype.slow = slow;

//BUILD SUCCUBUS
Succ = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'succ');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.coins = 3;
    this.damage = 1;
    this.slowed = false;
    this.retreatpoint = 50;
    this.retreatdist = 50;
    this.retreatcount = 99;
    this.animations.add('fly');
    this.play('fly', 4, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipWeapon(this, 'enemyTear');
}

Succ.prototype = Object.create(Phaser.Sprite.prototype);
Succ.prototype.constructor = Succ;
Succ.prototype.move = DynamicMoveFunction;
Succ.prototype.fire = FireWeapon;
Succ.prototype.slow = slow;

//BUILD Biggy
Biggy = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'biggy');
    this.vx = x;
    this.vy = y;
    this.hp = 4;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 3.5;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Biggy.prototype = Object.create(Phaser.Sprite.prototype);
Biggy.prototype.constructor = Biggy;
Biggy.prototype.move = MoveFunction;
Biggy.prototype.slow = slow;


//BUILD Fly
Fly = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'fly');
    this.vx = x;
    this.vy = y;
    this.hp = 2;
    this.speed = 1.0;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.slowed = false;
    this.coins = 1;

    this.retreatpoint = 50;
    this.retreatdist = 50;
    this.retreatcount = 99;

    this.damage = 1;
    SetEnemyDefault(this);
    EquipWeapon(this, 'enemyTear');
}

Fly.prototype = Object.create(Phaser.Sprite.prototype);
Fly.prototype.constructor = Fly;
Fly.prototype.move = DynamicMoveFunction;
Fly.prototype.fire = FireWeapon;
Fly.prototype.slow = slow;



//BUILD Spikes
Spikes = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spikes');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.coins = 1;
    this.slowed = false;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Spikes.prototype = Object.create(Phaser.Sprite.prototype);
Spikes.prototype.constructor = Spikes;
Spikes.prototype.move = MoveFunction;
Spikes.prototype.slow = slow;


//STAN
Stan = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'stan');
    this.vx = x;
    this.vy = y;
    this.hp = 2000;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.coins = 100;
    this.damage = 1;
    this.speed = 0.5;
    this.slowed = false;
    this.retreatpoint = 200;
    this.retreatdist = 100;
    this.retreatcount = 99;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipBossWeapon(this, 'stanTear');
}

Stan.prototype = Object.create(Phaser.Sprite.prototype);
Stan.prototype.constructor = Stan;
Stan.prototype.move = DynamicMoveFunction;
Stan.prototype.fire = FireBoss1Weapon;
Stan.prototype.slow = slow;

//MEGA
Mega = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'mega');
    this.vx = x;
    this.vy = y;
    this.hp = 3000;
    this.pi = 0;
    this.speed = 0.25;
    this.slowed = false;
    this.retreatpoint = 100;
    this.retreatdist = 100;
    this.retreatcount = 99;
    this.coins = 100;
    this.damage = 1;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.animations.add('fly');
    this.play('fly', 2, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipBossWeapon(this, 'megaTear');
    //TODO: on enemy hit player, call megaExplode anim
}

Mega.prototype = Object.create(Phaser.Sprite.prototype);
Mega.prototype.constructor = Mega;
Mega.prototype.move = DynamicMoveFunction;
Mega.prototype.fire = FireBoss1Weapon;
Mega.prototype.slow = slow;

//Blue Baby
Baby = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'baby');
    this.vx = x;
    this.vy = y;
    this.hp = 4000;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 0.5;
    this.coins = 100;
    this.damage = 1;
    this.slowed = false;
    this.retreatpoint = 100;
    this.retreatdist = 100;
    this.retreatcount = 99;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipBossWeapon(this, 'babyTear');
}

Baby.prototype = Object.create(Phaser.Sprite.prototype);
Baby.prototype.constructor = Baby;
Baby.prototype.move = DynamicMoveFunction;
Baby.prototype.fire = FireBoss1Weapon;
Baby.prototype.slow = slow;

//Squirt
Squirt = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'squirt');
    this.vx = x;
    this.vy = y;
    this.hp = 10;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 4.0;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Squirt.prototype = Object.create(Phaser.Sprite.prototype);
Squirt.prototype.constructor = Squirt;
Squirt.prototype.move = MoveFunction;
Squirt.prototype.slow = slow;

//DeathHead
DeathHead = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'deathhead');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.coins = 3;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

DeathHead.prototype = Object.create(Phaser.Sprite.prototype);
DeathHead.prototype.constructor = DeathHead;
DeathHead.prototype.move = MoveFunction;
DeathHead.prototype.slow = slow;

//Dip
Dip = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'dip');
    this.vx = x;
    this.vy = y;
    this.hp = 1;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 3.5;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

Dip.prototype = Object.create(Phaser.Sprite.prototype);
Dip.prototype.constructor = Dip;
Dip.prototype.move = MoveFunction;
Dip.prototype.slow = slow;

//lilhaunt
Lilhaunt = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'lilhaunt');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.damage = 1;
    this.retreatpoint = 50;
    this.retreatdist = 50;
    this.retreatcount = 99;
    this.coins = 3;
    this.animations.add('fly');
    this.play('fly', 4, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipWeapon(this, 'enemyTear');
}

Lilhaunt.prototype = Object.create(Phaser.Sprite.prototype);
Lilhaunt.prototype.constructor = Lilhaunt;
Lilhaunt.prototype.move = DynamicMoveFunction;
Lilhaunt.prototype.fire = FireWeapon;
Lilhaunt.prototype.slow = slow;

laserhead = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'laserhead');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.damage = 1;
    this.coins = 1;
    this.slowed = false;
    this.retreatpoint = 100;
    this.retreatdist = 100;
    this.retreatcount = 99;
    this.animations.add('fly');
    this.play('fly', 4, true);
    this.enableBody = true;
    SetEnemyDefault(this);
    EquipWeapon(this, 'belial');
}

laserhead.prototype = Object.create(Phaser.Sprite.prototype);
laserhead.prototype.constructor = laserhead;
laserhead.prototype.move = DynamicMoveFunction;
laserhead.prototype.fire = FireWeapon;
laserhead.prototype.slow = slow;

vis = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'vis');
    this.vx = x;
    this.vy = y;
    this.hp = 20;
    this.speed = 2.0;
    this.slowed = false;
    this.coins = 1;
    this.damage = 1;
    this.retreatpoint = 100;
    this.retreatdist = 100;
    this.retreatcount = 99;
    this.animations.add('fly');
    this.play('fly', 4, true);
    SetEnemyDefault(this);
    EquipWeapon(this, 'belial');
}

vis.prototype = Object.create(Phaser.Sprite.prototype);
vis.prototype.constructor = vis;
vis.prototype.move = DynamicMoveFunction;
vis.prototype.fire = FireWeapon;
vis.prototype.slow = slow;


//Clotty
Clotty = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'clotty');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 10, true);
    this.enableBody = true;
}

Clotty.prototype = Object.create(Phaser.Sprite.prototype);
Clotty.prototype.constructor = Clotty;
Clotty.prototype.move = MoveFunction;
Clotty.prototype.slow = slow;

//DankDeath
DankDeath = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'dankdeath');
    this.vx = x;
    this.vy = y;
    this.hp = 12;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.coins = 3;
    this.slowed = false;
    this.animations.add('fly');
    this.play('fly', 5, true);
    this.enableBody = true;
}

DankDeath.prototype = Object.create(Phaser.Sprite.prototype);
DankDeath.prototype.constructor = DankDeath;
DankDeath.prototype.move = MoveFunction;
DankDeath.prototype.slow = slow;

//Guts
Guts = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'guts');
    this.vx = x;
    this.vy = y;
    this.hp = 5;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 7, true);
    this.enableBody = true;
}

Guts.prototype = Object.create(Phaser.Sprite.prototype);
Guts.prototype.constructor = Guts;
Guts.prototype.move = MoveFunction;
Guts.prototype.slow = slow;

//ScarredGuts
ScarredGuts = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'scarredguts');
    this.vx = x;
    this.vy = y;
    this.hp = 7;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.slowed = false;
    this.coins = 1;
    this.animations.add('fly');
    this.play('fly', 7, true);
    this.enableBody = true;
}

ScarredGuts.prototype = Object.create(Phaser.Sprite.prototype);
ScarredGuts.prototype.constructor = ScarredGuts;
ScarredGuts.prototype.move = MoveFunction;
ScarredGuts.prototype.slow = slow;

//BACKGROUND
Flames = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'bg_fire');
    this.vx = x;
    this.vy = y;
    this.hp = 999;
    this.pi = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 1.0;
    this.damage = 1;
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
