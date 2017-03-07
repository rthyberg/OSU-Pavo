var soundManager = function(game){
    // sound effects
    this.shootsfx = game.add.audio("shootsfx");
    this.shootsfx.volume = gameSfxVolume * 0.1;
    
    this.explodesfx = game.add.audio("explodesfx");
    this.explodesfx.volume = gameSfxVolume * 0.1;
    
    
    //Music
    this.game_music = game.add.audio("game_music");
    this.game_music.loop = true;
    this.game_music.volume = gameVolume * 0.1;
    
}

soundManager.prototype.constructor = soundManager;
soundManager.prototype.stop = function(){
    this.game_music.stop();
}