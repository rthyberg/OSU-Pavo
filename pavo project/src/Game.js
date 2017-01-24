TowerDefense.Game = function(game) {
    this.secondsElapsed;
};

TowerDefense.Game.prototype = {
    
    create: function() {
        this.gameover = false;
        this.secondsElapsed = 0;
       // this.timer = this.time.create(false);
        //this.timer.loop(1000, this.updateSeconds, this);
        
        this.buildWorld();
    },
    

    update: function() {
        //this.physics.arcade.overlap(this.spacerockgroup, this.burst, this.burstCollision, null, this);
        //this.physics.arcade.overlap(this.spacerockgroup, this.bunnygroup, this.bunnyCollision, null, this);
        //this.physics.arcade.overlap(this.bunnygroup, this.burst, this.friendlyFire, null, this);
    }
    
    
};