var soundManager = function(game){
    // sound effects
    this.shootsfx = game.add.audio("shootsfx");
    this.explodesfx = game.add.audio("explodesfx");
    
    //Music
    this.game_music = game.add.audio("game_music");
    this.game_music.loop = true;
    
}