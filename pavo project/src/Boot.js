var TowerDefense = {};


TowerDefense.Boot = function(game) {};

TowerDefense.Boot.prototype = {
    preload: function() {
<<<<<<< HEAD
<<<<<<< HEAD
        this.load.image('cat', 'img/loading/eve.jpg');
=======
        //this.load.image('preloaderBar', 'images/loader_bar.png');
        //this.load.image('titleimage', 'images/TitleImage.png');
>>>>>>> master
=======
        //this.load.image('preloaderBar', 'images/loader_bar.png');
        //this.load.image('titleimage', 'images/TitleImage.png');
>>>>>>> master
    },

    create: function() {
        this.input.maxPointers = 1;
<<<<<<< HEAD
        this.stage.disableVisibilityChange = false;
		    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		    this.scale.minWidth = 800;
		    this.scale.minHeight = 600;
		    this.scale.pageAlignHorizontally = true;
		    this.scale.pageAlignVertically = true;
	    	this.stage.forcePortrait = true;
		    this.scale.setScreenSize = true;

		    this.input.addPointer();
		    this.stage.backgroundColor = '#171642';

=======
		this.stage.disableVisibilityChange = false;
        
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
		this.scale.minHeight = 600;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		//this.scale.setScreenSize(true);

		this.input.addPointer();
		
        //this.stage.backgroundColor = "#4488AA";
        
>>>>>>> master
        this.state.start('Preloader');
        
    }
};
