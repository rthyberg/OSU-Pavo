/* Class File for Tower*/
Tower = function(game, x, y, key, bulletkey) {
    // Define null variables for tower class
    Phaser.Sprite.call(this, game, x, y, key);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.weapon = game.add.weapon(30, bulletkey);
    this.tint = Math.random() * 0xffffff;
    // kills bullet if left world
    this.weapon.bulletKillDistance = 200;
    this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    this.weapon.bulletSpeed = 300;
    this.weapon.fireRate = 500;
    this.damage = 1;
    // tracks the pos of the tower
    this.weapon.trackSprite(this, 0, 0, true);

    this.weapon2 = game.add.weapon(30, bulletkey);
    // kills bullet if left world
    this.weapon2.bulletKillDistance = 200;
    this.weapon2.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    this.weapon2.bulletSpeed = 300;
    this.weapon2.fireRate = 500;
    // tracks the pos of the tower
    this.weapon2.trackSprite(this, 0, 0, true);

    //// circle for range
    this.towerRange = new Phaser.Circle(x, y, (this.weapon.bulletKillDistance * 2));
    this.target = null;
    this.targetDist = 0;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // Frost Tower
    this.frostShot = false;
    this.frostChance = 25;
    // Double up
    this.doubleUp = false;
    // Fire Tower
    this.fireUp = false;
    this.flames = game.add.group();
    this.flames.classType = Flames;
    this.flames.enableBody = true;
    this.fireType = 0;

    // Sound
    this.soundmanager = new soundManager(game);
    this.speed = 1.0;
    // animations
    this.animations.add('xyz');
    this.play('xyz', 4, true);
    this.enableBody = true;
};

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;

/* Fires at this.target */
Tower.prototype.updateRange = function() {
    this.towerRange = new Phaser.Circle(this.x, this.y, (this.weapon.bulletKillDistance * 2));
};


Tower.prototype.fireAt = function(path) {
    // offSet gets the time in flight times a facrot of 50 ten times the targets speed
    var offSet = Math.round((this.targetDist / this.weapon.bulletSpeed) * 50) * this.target.speed;
    //console.log(offSet);
    var pathIndex = Math.round(this.target.pi + offSet);
    if (pathIndex > (path.length - 1)) { // check that we dont go out of path's max index
        pathIndex = (path.length - 1);
    }
    var xLoc = path[pathIndex].x + this.target.vx; // set location by gettin next path and adding targets offset
    var yLoc = path[pathIndex].y + this.target.vy;
    //this.weapon.bullets.getFirstExists(false, false).tint = 0x4444AA;
    if (this.frostShot == true && Math.random() * 100 <= this.frostChance) {
        var one = this.weapon.bullets.getFirstExists(false, false, null, null, "bullet", 1);
        var two = this.weapon2.bullets.getFirstExists(false, false, null, null, "bullet", 1);
        if(one != null) {
            one.frostApplySlow = true;
          }
        if(two != null) {
            two.frostApplySlow = true;
          }
    } else {
        var one = this.weapon.bullets.getFirstExists(false, false, null, null, "bullet", this.fireType);
        var two = this.weapon2.bullets.getFirstExists(false, false, null, null, "bullet", this.fireType);
        if(one != null) {
            one.frostApplySlow = false;
          }
        if(two != null) {
            two.frostApplySlow = false;
          }
    }
    if (this.doubleUp == true) {
         this.weapon2.fireAtXY(xLoc, yLoc);
        game.physics.arcade.overlap(this.target, this.weapon2.bullets, collisionHandler, null, this);
    }
    this.weapon.fireAtXY(xLoc, yLoc);
    game.physics.arcade.overlap(this.target, this.weapon.bullets, collisionHandler, null, this);
};

/* Finds a target for the tower
 * Pass in a Phaser.group of sprites */
Tower.prototype.selectTarget = function(targets, path) {
    var inRange;
    if (this.target != null) {
        inRange = (this.towerRange.contains(this.target.x, this.target.y)); // check if current is inrange
    } else inRange = false;
    if (this.target == null || !inRange || this.target.alive == false) { // if target is not valid then find new
        this.target = null;
        targets.forEachAlive(distanceFormula, this);
    }
    if (this.target != null && inRange) {
        this.targetDist = game.physics.arcade.distanceBetween(this.target, this, true);
        this.fireAt(path); // call the fire function
    }
};

Tower.prototype.flameCollides = function(game, targets) {
    this.game.physics.arcade.overlap(targets, this.flames, collisionHandler2, null, this);
};
Tower.prototype.update = function() {

};

/****************Static functions************************/
Tower.myload = function(game) {
    game.load.spritesheet('tower', 'img/tower_isaac.png', 32, 30, 1);
    game.load.image('bullet', 'img/explosion.png');
}

/*creates a group that towers can be added to*/
Tower.createGroup = function(game) {
        var t = game.add.group(); // create a new group in the phaser game object
        t.classType = Tower; // set the classType to be our extended sprite class 'Tower'
        return t; // returns a refernce to this group
    }
    //  Called if the bullet hits one of the veg sprites
collisionHandler = function(sprite, bullet) {
        bullet.kill();
        sprite.hp -= this.damage;

        //add red tint to damaged sprite
        sprite.tint = 0xff0000;
        setTimeout(function(){
            // reset to null tint after 100 ms
            sprite.tint = 0xffffff;
        }, 100);
        if (bullet.frostApplySlow == true) {
            sprite.slow();
        }
        if (sprite.hp <= 0) {
            if(this.fireUp == true) {
                this.makeAfterFire(sprite);
            }
            sprite.kill();
            this.soundmanager.explodesfx.play();
        }
    }
    //  Called if the bullet hits one of the veg sprites
collisionHandler2 = function(sprite, bullet) {
    sprite.hp -= this.damage;

    //add red tint to damaged sprite
    sprite.tint = 0xff0000;
    setTimeout(function(){
        // reset to null tint after 100 ms
        sprite.tint = 0xffffff;
    }, 100);

    if(sprite.hp <= 0){
        sprite.kill();
        this.soundmanager.explodesfx.play();
    }

}

// Checks teh distance between Alive targets and the tower object
distanceFormula = function(target) {
    var contained = this.towerRange.contains(target.x, target.y); // set variable to if current target from group is in range
    if (contained) {
        if (this.target == null) { // if our current target is null make the first target in group the new target
            this.target = target;

        } else {
            var current = game.physics.arcade.distanceBetween(target, this, true); // check distance between current target and target of the group
            var old = game.physics.arcade.distanceBetween(this.target, this, true);
            if (current < old) { // set the current target if its closer than the old
                this.target = target;
                this.targetDist = current;
            }
        }
    }
}

Tower.prototype.makeAfterFire = function(sprite) {
    var current = this.flames.add(new Flames(this.game, sprite.x, sprite.y));
    current.flamesTimer = this.game.time.create(true);
    current.flamesTimer.add(1000, removeFlames, current, null);
    current.flamesTimer.start();

    function removeFlames() {
        this.destroy();
    }
};
