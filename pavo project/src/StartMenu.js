TowerDefense.StartMenu= function(game) {
    this.selection1;
    this.soundmanager;
    this.txt;
    
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
        this.selection1 = this.add.bitmapText(this.world.centerX-205, this.world.centerY-180, 'nokia16', 'THE BINDING OF ISAAC: TOWERBIRTH', 24);
        this.soundmanager = new soundManager(game);
        
        this.soundmanager.intro.play();
        
        var starttext = game.add.text(game.world.centerX-5, game.world.centerY+100, "Start Game", { font: "65px Arial", fill: "#ff0044", align: "center" });
        starttext.anchor.set(0.5);
        starttext.inputEnabled = true;
        starttext.events.onInputDown.add(function(){
            this.soundmanager.stop();
            this.soundmanager.jingle.play();
            var pic = game.add.image(game.world.centerX, game.world.height, 'bgblack');
            var randomS = game.rnd.integerInRange(0, 6);
            if (randomS == 0)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader');
            else if (randomS == 1)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader2');           
            else if (randomS == 2)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader3');  
            else if (randomS == 3)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader3');  
            else if (randomS == 4)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader4');  

            else if (randomS == 5)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader5');  
            else if (randomS == 6)
                var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader7');  
            
            pic.anchor.setTo(0.5, 1);
            pictxt.anchor.setTo(0.5, 1);
            game.time.events.add(Phaser.Timer.SECOND * 5, fadePicture, this);

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
            this.soundmanager.stop();
            game.state.start("LevelOne");
        }, this);
        
        var text2 = game.add.text(game.world.centerX-300, game.world.centerY-75, "Demo2", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text2.anchor.set(0.5);
        text2.inputEnabled = true;
        text2.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("Game");
        }, this);
        
        var text3 = game.add.text(game.world.centerX-300, game.world.centerY-50, "Demo3", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text3.anchor.set(0.5);
        text3.inputEnabled = true;
        text3.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("LevelOne");
        }, this);
        
        var text4 = game.add.text(game.world.centerX-300, game.world.centerY-25, "WaveDemo", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text4.anchor.set(0.5);
        text4.inputEnabled = true;
        text4.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("WaveDemo");
        },this);
          
        var text5 = game.add.text(game.world.centerX-300, game.world.centerY, "PathBuildDemo", { font: "20px Arial", fill: "#ff0044", align: "left" });
        text5.anchor.set(0.5);
        text5.inputEnabled = true;
        text5.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("PathBuildDemo");
        },this);
        
        var textDarkRoom = game.add.text(game.world.centerX-300, game.world.centerY+25, "DarkRoom", { font: "20px Arial", fill: "#ff0044", align: "left" });
        textDarkRoom.anchor.set(0.5);
        textDarkRoom.inputEnabled = true;
        textDarkRoom.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("DarkRoom");
        },this);
        
        var textSpookRoom = game.add.text(game.world.centerX-300, game.world.centerY+50, "SpookRoom", { font: "20px Arial", fill: "#ff0044", align: "left" });
        textSpookRoom.anchor.set(0.5);
        textSpookRoom.inputEnabled = true;
        textSpookRoom.events.onInputDown.add(function(){
            this.soundmanager.stop();
            game.state.start("SpookRoom");
        },this);
        
        var textAlpha = game.add.text(game.world.centerX-300, game.world.centerY+75, "LevelAlpha", { font: "20px Arial", fill: "#ff0044", align: "center" });
        textAlpha.anchor.set(0.5);
        textAlpha.inputEnabled = true;
        textAlpha.events.onInputDown.add(function(){
            this.soundmanager.stop();
            this.soundmanager.jingle.play();
            var pic = game.add.image(game.world.centerX, game.world.height, 'bgblack');
            var pictxt = game.add.image(game.world.centerX, game.world.centerY, 'loader');
            pic.anchor.setTo(0.5, 1);
            pictxt.anchor.setTo(0.5, 1);
            game.time.events.add(Phaser.Timer.SECOND * 5, fadePicture, this);
        }, this);
        

        function fadePicture(){
            

            //var tween = game.add.tween(pic).to( { alpha: 1 }, 2000, "Linear", true, 2000);
            this.soundmanager.stop();
            game.state.start("LevelAlpha");
        }
        
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
	}

};
