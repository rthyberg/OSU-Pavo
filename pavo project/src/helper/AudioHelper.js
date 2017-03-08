var soundManager = function(game){
    // sound effects
    this.shootsfx = game.add.audio("shootsfx");
    this.explodesfx = game.add.audio("explodesfx");
    this.summon = game.add.audio("summon");
    this.hurt1 = game.add.audio("hurt1");
    this.hurt2 = game.add.audio("hurt2");
    this.hurt3 = game.add.audio("hurt3");
    this.drip1 = game.add.audio("drip1");
    this.drop2 = game.add.audio("drop2");
    this.drop3 = game.add.audio("drop3");
    this.fly1 = game.add.audio("fly1");
    this.fly2 = game.add.audio("fly2");
    this.fly3 = game.add.audio("fly3");
    this.fly4 = game.add.audio("fly4");
    this.tear4 = game.add.audio("tear4");
    this.tear5 = game.add.audio("tear5");
    this.splatter0 = game.add.audio("splatter0");
    this.splatter1 = game.add.audio("splatter1");
    this.splatter2 = game.add.audio("splatter2");
    this.stanspawn = game.add.audio("stanspawn");
    this.laugh = game.add.audio("laugh");
    this.mega = game.add.audio("mega");
    this.burst = game.add.audio("burst");
    this.burst2 = game.add.audio("burst2");
    this.burst3 = game.add.audio("burst3");
    
    this.death1 = game.add.audio("death1");
    this.death2 = game.add.audio("death2");
    this.death3 = game.add.audio("death3");
    
    //Music
    this.game_music = game.add.audio("game_music");
    this.game_music.loop = true;
    this.boss1 = game.add.audio("boss1");
    this.boss1.loop = true;
    
    this.boss2 = game.add.audio("boss2");
    this.boss2.loop = true;

    this.boss3 = game.add.audio("boss3");
    this.boss3.loop = true;    

    
    this.level1 = game.add.audio("level1");
    this.level1.loop = true;
    this.level2 = game.add.audio("level2");
    this.level2.loop = true;
    this.level3a = game.add.audio("level3a");
    this.level3a.loop = true;
    this.level3b = game.add.audio("level3b");
    this.level3b.loop = true;

    this.intro = game.add.audio("intro");
    this.intro.loop = true;
    
    this.jingle = game.add.audio("jingle");
    this.deathjingle = game.add.audio("deathjingle");
    
    this.uded = game.add.audio("uded");
    this.uded.loop = true;
    
}

soundManager.prototype.constructor = soundManager;
soundManager.prototype.stop = function(){
    this.game_music.stop();
    this.intro.stop();
    this.jingle.stop();
    this.level1.stop();
    this.level2.stop();
    this.level3a.stop();
    this.level3b.stop();
    this.summon.stop();
    this.hurt1.stop();
    this.hurt2.stop();
    this.hurt3.stop();
    this.drip1.stop();
    this.drop2.stop();
    this.drop3.stop();
    this.fly1.stop();
    this.fly2.stop();
    this.fly3.stop();
    this.fly4.stop();
}

soundManager.prototype.musicstop = function(){
    this.game_music.stop();
    this.intro.stop();
    this.jingle.stop();
    this.level1.stop();
    this.level2.stop();
    this.level3a.stop();
    this.level3b.stop();
    this.uded.stop();


}