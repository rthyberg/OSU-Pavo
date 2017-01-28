var TowerDefense = {};

TowerDefense.Boot = function(game) {};

TowerDefense.Boot.prototype = {
    
    init: function(){
        this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;  
    },
    
    preload: function() {
        this.load.image('cat', 'img/loading/eve.jpg');
    },

    create: function() {

        
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
		this.scale.minHeight = 600;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		//this.scale.setScreenSize(true);

		this.input.addPointer();
		
        //this.stage.backgroundColor = "#4488AA";
        
        this.state.start('Preloader');
        
    }

};

