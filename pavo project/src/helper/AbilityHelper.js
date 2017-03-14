function GetRandomAbility(){
    var random = game.rnd.integerInRange(0, 2); 
    switch(random){
        case 1:
            return (new AbilityIce(game));
        default:
            return (new AbilityFire(game));
    }
}

// Make sure to get different ability
function GetDifferentAbility(name){
    var newability = GetRandomAbility()
    while(name == newability.name){
        newability.icon.destroy(); 
        newability = GetRandomAbility(); 
    }
    return newability;
//    if(abilityname == "fire")
//        return (new AbilityFire(game));
//    else if(abilityname == "ice")
//        return (new AbilityIce(game));
//    else
//        return (new AbilityFire(game));
}

// Damage all enemies 1 hp
AbilityFire = function(game){
    this.name = "fire";
    this.icon = game.add.sprite(665, 25, 'stanTear');
    this.icon.anchor.x = 0.5;
    this.icon.anchor.y = 0.5;
    this.cooldown = 5000; //in milliseconds
    this.ready = 0;
    this.damage = 1;
}

AbilityFire.prototype = Object.create(Phaser.Sprite.prototype);
AbilityFire.prototype.constructor = AbilityFire;
AbilityFire.prototype.castEffect = function(pointer){
    if(pointer.y < 60){
        return;
    }
    // Check if cooldown completed
    if(this.ability.ready < game.time.now){
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(2, 0xff0000, 0.4);
        graphics.beginFill(0xff0000, 0.4);
        graphics.drawRect(0, 0, 800, 600);
        graphics.endFill();

        this.enemies.forEach(function(e){
            e.hp -= this.ability.damage;
            
            //add red tint to damaged sprite
            e.tint = 0xff0000;
            setTimeout(function(){
                // reset to null tint after 100 ms
                e.tint = 0xffffff;
            }, 100);
            
            if(e.hp < 1){
                e.kill();
            }
        }, this);

        setTimeout(function(){
            graphics.clear();
        }, 50);
        
        this.ability.ready = game.time.now + this.ability.cooldown;
    }
};

AbilityFire.prototype.checkTimer = function(){
    if(this.ready < game.time.now){
        this.icon.tint= 0xffffff;
    } else {
        this.icon.tint= 0x000000;
    }
}


// Slow enemies
AbilityIce = function(){
    this.name = "ice";
    this.icon = game.add.sprite(665, 25, 'explosion');
    this.icon.anchor.x = 0.5;
    this.icon.anchor.y = 0.5
    this.cooldown = 3000; //in milliseconds
    this.ready = 0;
}
AbilityIce.prototype = Object.create(Phaser.Sprite.prototype);
AbilityIce.prototype.constructor = AbilityIce;
AbilityIce.prototype.castEffect = function(pointer){
    if(pointer.y < 60){
        return;
    }
    
    if(this.ability.ready < game.time.now){
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(2, 0x0000ff, 0.4);
        graphics.beginFill(0x0000ff, 0.4);
        graphics.drawRect(0, 0, 800, 600);
        graphics.endFill();

        setTimeout(function(){
            graphics.clear();
        }, 50);

        this.enemies.forEach(function(e){
            e.slow();

            //add red tint to damaged sprite
            e.tint = 0xff0000;
            setTimeout(function(){
                // reset to null tint after 100 ms
                e.tint = 0xffffff;
            }, 100);
        }, this);
        
        // update cooldown
        this.ability.ready = game.time.now + this.ability.cooldown;
    }
}
AbilityIce.prototype.checkTimer = function(){
    if(this.ready < game.time.now){
        this.icon.tint= 0xffffff;
    } else {
        this.icon.tint= 0x000000;
    }
}