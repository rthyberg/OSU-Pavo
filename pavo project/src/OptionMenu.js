TowerDefense.OptionMenu= function(game) {
    this.volume = gameVolume;
    this.volumeLevel;
    this.soundVolume = gameSfxVolume;
    this.soundLevel;
};

TowerDefense.OptionMenu.prototype = {

	preload: function () {
        
	},

	create: function () {
        // Write Title
        this.selection1 = this.add.bitmapText(this.world.centerX-155, this.world.centerY-180, 'nokia16', 'Option Menu', 28);
        
        
        var volumetext = game.add.text(game.world.centerX-150, game.world.centerY-100, "Music Volume", { font: "30px Arial", fill: "#ffffff", align: "left" });
        volumetext.anchor.set(0.5);
        
        this.volumeLevel = game.add.text(game.world.centerX-90, game.world.centerY-80, this.volume, { font: "25px Arial", fill: "#ffffff", align: "left" });
        
        var volumeUp = game.add.image(380, 200, 'arrowup');
        volumeUp.anchor.set(0.5);
        volumeUp.inputEnabled = true;
        volumeUp.events.onInputDown.add(function(){
            if(this.volume < 10){
                console.log("volume up");
                this.volume++;
                this.setVolumeCookie();
            }
            
        }, this);
        
        var volumeDown = game.add.image(380, 230, 'arrowdown');
        volumeDown.anchor.set(0.5);
        volumeDown.inputEnabled = true;
        volumeDown.events.onInputDown.add(function(){
            if(this.volume > 0){
                console.log("volume down");
                this.volume--;
                this.setVolumeCookie();
            }
            
        }, this);
        
        
        // Sound Levels
        var soundtext = game.add.text(game.world.centerX-335, game.world.centerY-20, "Sound Effect Volume", { font: "30px Arial", fill: "#ffffff", align: "left" });
        volumetext.anchor.set(0.5);
        
        this.soundLevel = game.add.text(game.world.centerX-90, game.world.centerY+20, this.soundVolume, { font: "25px Arial", fill: "#ffffff", align: "left" });
        
        var soundUp = game.add.image(380, 300, 'arrowup');
        soundUp.anchor.set(0.5);
        soundUp.inputEnabled = true;
        soundUp.events.onInputDown.add(function(){
            if(this.soundVolume < 10){
                console.log("volume up");
                this.soundVolume++;
                this.setVolumeCookie();
            }
            
        }, this);
        
        var soundDown = game.add.image(380, 330, 'arrowdown');
        soundDown.anchor.set(0.5);
        soundDown.inputEnabled = true;
        soundDown.events.onInputDown.add(function(){
            if(this.soundVolume > 0){
                console.log("volume down");
                this.soundVolume--;
                this.setVolumeCookie();
            }
            
        }, this);
        
        
        var starttext = game.add.text(game.world.centerX-50, game.world.centerY+150, "Back To Start Menu", { font: "30px Arial", fill: "#ffffff", align: "left" });
        starttext.anchor.set(0.5);
        starttext.inputEnabled = true;
        starttext.events.onInputDown.add(function(){
            game.state.start("StartMenu");
        }, this);
        
    },                 
                           
	update: function () {
        this.volumeLevel.setText(this.volume);
        this.soundLevel.setText(this.soundVolume);
	},
    
    setVolumeCookie: function(){
        document.cookie = "gameVolume=" + this.volume;
        document.cookie = "soundVolume=" + this.soundVolume;
    }
};
