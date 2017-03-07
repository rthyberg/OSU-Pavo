TowerDefense.StartMenu= function(game) {
    this.selection1;
};

TowerDefense.StartMenu.prototype = {

	preload: function () {
        var gamevolume = this.getVolume("gameVolume");
        var soundvolume = this.getVolume("soundVolume");
        if(gamevolume.length > 0){
            gameVolume = gamevolume;
        }
        if(soundvolume.length > 0){
            gameSfxVolume = soundvolume;
        }
	},

	create: function () {
        // Write Title
        this.selection1 = this.add.bitmapText(this.world.centerX-155, this.world.centerY-180, 'nokia16', 'PAVOS TOWER DEFENSE', 24);
        
        
        var starttext = game.add.text(game.world.centerX-25, game.world.centerY, "Start Game", { font: "65px Arial", fill: "#ff0044", align: "center" });
        starttext.anchor.set(0.5);
        starttext.inputEnabled = true;
        starttext.events.onInputDown.add(function(){
            game.state.start("LevelOne");
        }, this);
        
        var optiontext = game.add.text(game.world.centerX-25, game.world.centerY+200, "Options", { font: "45px Arial", fill: "#ff0044", align: "center" });
        optiontext.anchor.set(0.5);
        optiontext.inputEnabled = true;
        optiontext.events.onInputDown.add(function(){
            game.state.start("OptionMenu");
        }, this);
        
        // **** DEMO MENU *** 
        // Set Menu Items
        var text = game.add.text(game.world.centerX-300, game.world.centerY-100, "Demo1", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text.anchor.set(0.5);
        text.inputEnabled = true;
        text.events.onInputDown.add(function(){
            game.state.start("LevelOne");
        }, this);
        
        var text2 = game.add.text(game.world.centerX-300, game.world.centerY-75, "Demo2", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text2.anchor.set(0.5);
        text2.inputEnabled = true;
        text2.events.onInputDown.add(function(){
            game.state.start("Game");
        }, this);
        
        var text3 = game.add.text(game.world.centerX-300, game.world.centerY-50, "Demo3", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text3.anchor.set(0.5);
        text3.inputEnabled = true;
        text3.events.onInputDown.add(function(){
            game.state.start("LevelOne");
        }, this);
        
        var text4 = game.add.text(game.world.centerX-300, game.world.centerY-25, "WaveDemo", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text4.anchor.set(0.5);
        text4.inputEnabled = true;
        text4.events.onInputDown.add(function(){
            game.state.start("WaveDemo");
        },this);
          
        var text5 = game.add.text(game.world.centerX-300, game.world.centerY, "PathBuildDemo", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text5.anchor.set(0.5);
        text5.inputEnabled = true;
        text5.events.onInputDown.add(function(){
            game.state.start("PathBuildDemo");
        },this);
        
        var textDarkRoom = game.add.text(game.world.centerX-300, game.world.centerY+25, "DarkRoom", { font: "20px Arial", fill: "#ff0044", align: "left" });
        textDarkRoom.anchor.set(0.5);
        textDarkRoom.inputEnabled = true;
        textDarkRoom.events.onInputDown.add(function(){
            game.state.start("DarkRoom");
        },this);
        
        var textSpookRoom = game.add.text(game.world.centerX-300, game.world.centerY+50, "SpookRoom", { font: "20px Arial", fill: "#ff0044", align: "left" });
        textSpookRoom.anchor.set(0.5);
        textSpookRoom.inputEnabled = true;
        textSpookRoom.events.onInputDown.add(function(){
            game.state.start("SpookRoom");
        },this);
        
        var textAlpha = game.add.text(game.world.centerX-300, game.world.centerY+75, "LevelAlpha", { font: "20px Arial", fill: "#ff0044", align: "center" });
        textAlpha.anchor.set(0.5);
        textAlpha.inputEnabled = true;
        textAlpha.events.onInputDown.add(function(){
            game.state.start("LevelAlpha");
        }, this);
        
    },
    select1: function(){
        
    },                     
                           
	update: function () {
        
	},
    
    getVolume: function (cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
};
