TowerDefense.StartMenu= function(game) {
    this.selection1;
};

TowerDefense.StartMenu.prototype = {

	preload: function () {
        this.load.bitmapFont('nokia16', 'fonts/nokia16.png', 'fonts/nokia16.xml');
	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
        
        this.selection1 = this.add.bitmapText(this.world.centerX-155, this.world.centerY-180, 'nokia16', 'PAVOS TOWER DEFENSE', 24);
        this.selection1.events.onInputDown.add(this.select1, this);
        
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
            game.state.start("LevelAlpha");
        }, this);
        //this.addMenuOption('Start', function () {
//      game.state.start("Game");
//        });
//        this.addMenuOption('Options', function () {
//          game.state.start("Options");
//        });
//        this.addMenuOption('Credits', function () {
//          game.state.start("Credits");
//        });
    },
    select1: function(){
        game.state.start("LevelOne");
    },                     
                           
	update: function () {
//        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
//            this.ready = true;
//            //this.state.start('StartMenu');
//        }
        
        //this.state.start('LevelOne');
	}
};
