var soundManager = function(game){
    var sfxvolume = gameSfxVolume * 0.1;
    var musicvolume = gameVolume * 0.1;
    // sound effects
    this.shootsfx = game.add.audio("shootsfx");
    this.shootsfx.volume = sfxvolume;
    this.explodesfx = game.add.audio("explodesfx");
    this.explodesfx.volume = sfxvolume;
    this.summon = game.add.audio("summon");
    this.summon.volume =  sfxvolume;
    this.hurt1 = game.add.audio("hurt1");
    this.hurt1.volume =  sfxvolume;
    this.hurt2 = game.add.audio("hurt2");
    this.hurt2.volume =  sfxvolume;
    this.hurt3 = game.add.audio("hurt3");
    this.hurt3.volume =  sfxvolume;
    this.drip1 = game.add.audio("drip1");
    this.drip1.volume =  sfxvolume;
    this.drop2 = game.add.audio("drop2");
    this.drop2.volume =  sfxvolume;
    this.drop3 = game.add.audio("drop3");
    this.drop3.volume = sfxvolume;
    this.fly1 = game.add.audio("fly1");
    this.fly1.volume = sfxvolume;
    this.fly2 = game.add.audio("fly2");
    this.fly2.volume = sfxvolume;
    this.fly3 = game.add.audio("fly3");
    this.fly3.volume = sfxvolume;
    this.fly4 = game.add.audio("fly4");
    this.fly4.volume = sfxvolume;
    this.tear4 = game.add.audio("tear4");
    this.tear4.volume = sfxvolume;
    this.tear5 = game.add.audio("tear5");
    this.tear5.volume = sfxvolume;
    this.splatter0 = game.add.audio("splatter0");
    this.splatter0.volume = sfxvolume;
    this.splatter1 = game.add.audio("splatter1");
    this.splatter1.volume = sfxvolume;
    this.splatter2 = game.add.audio("splatter2");
    this.splatter2.volume = sfxvolume;
    this.stanspawn = game.add.audio("stanspawn");
    this.stanspawn.volume = sfxvolume;
    this.laugh = game.add.audio("laugh");
    this.laugh.volume = sfxvolume;
    this.mega = game.add.audio("mega");
    this.mega.volume = sfxvolume;
    this.burst = game.add.audio("burst");
    this.burst.volume = sfxvolume;
    this.burst2 = game.add.audio("burst2");
    this.burst2.volume = sfxvolume;
    this.burst3 = game.add.audio("burst3");
    this.burst3.volume = sfxvolume;
    
    this.death1 = game.add.audio("death1");
    this.death1.volume = sfxvolume;
    this.death2 = game.add.audio("death2");
    this.death2.volume = sfxvolume;
    this.death3 = game.add.audio("death3");
    this.death3.volume = sfxvolume;
    
    this.shoot = game.add.audio("shoot");
    this.shoot.volume = sfxvolume;
    this.shoot2 = game.add.audio("shoot2");
    this.shoot2.volume = sfxvolume;
    this.shoot3 = game.add.audio("shoot3");  
    this.shoot3.volume = sfxvolume;
  
    //Music
    this.game_music = game.add.audio("game_music");
    this.game_music.loop = true;
    this.game_music.volume = musicvolume;
  
    this.boss1 = game.add.audio("boss1");
    this.boss1.loop = true;
    this.boss1.volume = musicvolume;
    
    this.boss2 = game.add.audio("boss2");
    this.boss2.loop = true;
    this.boss2.volume = musicvolume;

    this.boss3 = game.add.audio("boss3");
    this.boss3.loop = true;    
    this.boss3.volume = musicvolume;

    
    this.level1 = game.add.audio("level1");
    this.level1.loop = true;
    this.level1.volume = musicvolume;
    this.level2 = game.add.audio("level2");
    this.level2.loop = true;
    this.level2.volume = musicvolume;
    this.level3a = game.add.audio("level3a");
    this.level3a.loop = true;
    this.level3a.volume = musicvolume;
    this.level3b = game.add.audio("level3b");
    this.level3b.loop = true;
    this.level3b.volume = musicvolume;

    this.intro = game.add.audio("intro");
    this.intro.loop = true;
    this.intro.volume = musicvolume;
    
    this.jingle = game.add.audio("jingle");
    this.jingle.volume = sfxvolume;
    this.deathjingle = game.add.audio("deathjingle");
    this.deathjingle.volume = sfxvolume;
    
    this.uded = game.add.audio("uded");
    this.uded.loop = true;
    this.uded.volume = musicvolume;
    
    this.calm = game.add.audio("calm");
    this.calm.loop = true;
    this.calm.volume = musicvolume;
    
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
    this.boss1.stop();
    this.boss2.stop();
    this.boss3.stop();
    this.level3b.stop();
    this.uded.stop();
    this.calm.stop();


}