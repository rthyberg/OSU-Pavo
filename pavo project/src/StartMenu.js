TowerDefense.StartMenu= function(game) {
    this.selection1;
};

TowerDefense.StartMenu.prototype = {

	preload: function () {
        
	},

	create: function () {
        // Write Title
        this.selection1 = this.add.bitmapText(this.world.centerX-155, this.world.centerY-180, 'nokia16', 'PAVOS TOWER DEFENSE', 24);
        
        // Set Menu Items
        var text = game.add.text(game.world.centerX, game.world.centerY-100, "Demo1", { font: "65px Arial", fill: "#ff0044", align: "center" });
        text.anchor.set(0.5);
        text.inputEnabled = true;
        text.events.onInputDown.add(function(){
            game.state.start("LevelOne");
        }, this);
        
        var text2 = game.add.text(game.world.centerX, game.world.centerY, "Demo2", { font: "65px Arial", fill: "#ff0044", align: "center" });
        text2.anchor.set(0.5);
        text2.inputEnabled = true;
        text2.events.onInputDown.add(function(){
            game.state.start("Game");
        }, this);
        
        var text3 = game.add.text(game.world.centerX, game.world.centerY+100, "Demo3", { font: "65px Arial", fill: "#ff0044", align: "center" });
        text3.anchor.set(0.5);
        text3.inputEnabled = true;
        text3.events.onInputDown.add(function(){
            game.state.start("LevelOne");
        }, this);
        
        var text4 = game.add.text(game.world.centerX-300, game.world.centerY-100, "WaveDemo", { font: "25px Arial", fill: "#ff0044", align: "left" });
        text4.anchor.set(0.5);
        text4.inputEnabled = true;
        text4.events.onInputDown.add(function(){
            game.state.start("WaveDemo");
        },this);
          
        var text5 = game.add.text(game.world.centerX-300, game.world.centerY-50, "PathBuildDemo", { font: "25px Arial", fill: "#ff0044", align: "left" });
        text5.anchor.set(0.5);
        text5.inputEnabled = true;
        text5.events.onInputDown.add(function(){
            game.state.start("PathBuildDemo");
        },this);
        
        var textDarkRoom = game.add.text(game.world.centerX-300, game.world.centerY+150, "DarkRoom", { font: "25px Arial", fill: "#ff0044", align: "left" });
        textDarkRoom.anchor.set(0.5);
        textDarkRoom.inputEnabled = true;
        textDarkRoom.events.onInputDown.add(function(){
            game.state.start("DarkRoom");
        },this);
        
        var textSpookRoom = game.add.text(game.world.centerX-300, game.world.centerY+200, "SpookRoom", { font: "25px Arial", fill: "#ff0044", align: "left" });
        textSpookRoom.anchor.set(0.5);
        textSpookRoom.inputEnabled = true;
        textSpookRoom.events.onInputDown.add(function(){
            game.state.start("SpookRoom");
        },this);
        
        var textAlpha = game.add.text(game.world.centerX, game.world.centerY+200, "LevelAlpha", { font: "65px Arial", fill: "#ff0044", align: "center" });
        textAlpha.anchor.set(0.5);
        textAlpha.inputEnabled = true;
        textAlpha.events.onInputDown.add(function(){
            game.state.start("LevelAlpha");
        }, this);
        
    },
    select1: function(){
        
    },                     
                           
	update: function () {
        
	}
};
