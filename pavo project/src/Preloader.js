TowerDefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.enemy = {};
};

TowerDefense.Preloader.prototype = {

	preload: function () {
    //this.game.load.tilemap('cave', 'img/tiles/cave/cave_base_map.json', null, Phaser.Tilemap.TILED_JSON);
    //this.game.load.image('tiles', 'img/tiles/cave/Cave.png');
		//this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		//this.preloadBar.anchor.setTo(0.5, 0.5);
		//this.load.setPreloadSprite(this.preloadBar);

         /*********MENU******************/
        this.game.load.atlasJSONArray('dmgUp', 'img/UI/UP/TestButtonSheet.png', 'img/UI/UP/TestButtonSheet.json');
        this.game.load.atlasJSONArray('coins', 'img/UI/GoldCoinSprite/coinsheet.png', 'img/UI/GoldCoinSprite/coin.json');
        /**********MAP*******************/
        this.game.load.image('tiles', 'img/ground.png');
        this.game.load.image('darkTile', 'img/dark_ground.png');
        this.game.load.image('spook', 'img/spook_ground.png');
        /*************TOWER****************/
        //this.game.load.image('tower', 'img/tower.png');
        this.game.load.atlasJSONArray('bullet', 'img/bullet_sheet.png', 'img/bullets_sheet.json');
        this.game.load.image('darkroad', 'img/darkroad.png');
	    /**********IMAGES*******************/
        this.game.load.spritesheet('heartFull', 'img/heartFull.png', 16, 14, 1);
        this.game.load.image('explosion', 'img/explosion.png');
        this.game.load.image('bgblack', 'img/bgblack.png');
        this.game.load.image('loader', 'img/loader.png');
        this.game.load.image('loader2', 'img/loader2.png');
        this.game.load.image('loader3', 'img/loader3.png');
        this.game.load.image('loader4', 'img/loader4.png');
        this.game.load.image('loader5', 'img/loader5.png');
        this.game.load.image('loader6', 'img/loader6.png');
        this.game.load.image('loader7', 'img/loader7.png');
        /**********SPRITES*******************/
        this.game.load.spritesheet('restock', 'img/items/restock.png', 32, 32, 1);
        
        
        this.game.load.spritesheet('twenty', 'img/items/2020.png', 32, 32, 1);
        this.game.load.spritesheet('dinner', 'img/items/dinner.png', 32, 32, 1);
        this.game.load.spritesheet('wirecoathanger', 'img/items/wirecoathanger.png', 32, 32, 1);
        
        this.game.load.spritesheet('magmush', 'img/items/magMush.png', 32, 32, 1);
        this.game.load.spritesheet('brimstone', 'img/items/brimstone.png', 32, 32, 1);
        
        this.game.load.spritesheet('pentagram', 'img/items/pentagram.png', 32, 32, 1);
        this.game.load.spritesheet('bluecap', 'img/items/bluecap.png', 32, 32, 1);
        this.game.load.spritesheet('capricorn', 'img/items/capricorn.png', 32, 32, 1);
        this.game.load.spritesheet('ghostpepper', 'img/items/ghostpepper.png', 32, 32, 1);
        this.game.load.spritesheet('smallrock', 'img/items/smallrock.png', 32, 32, 1);
        
        this.game.load.spritesheet('blacklotus', 'img/items/blacklotus.png', 32, 32, 1);
        this.game.load.spritesheet('breakfast', 'img/items/breakfast.png', 32, 32, 1);
        this.game.load.spritesheet('lunch', 'img/items/lunch.png', 32, 32, 1);
        this.game.load.spritesheet('dessert', 'img/items/dessert.png', 32, 32, 1);
        this.game.load.spritesheet('dinner', 'img/items/dinner.png', 32, 32, 1);
        this.game.load.spritesheet('snack', 'img/items/snack.png', 32, 32, 1);
        this.game.load.spritesheet('placenta', 'img/items/placenta.png', 32, 32, 1);
        this.game.load.spritesheet('heart', 'img/items/heart.png', 32, 32, 1);
        
        this.game.load.spritesheet('squeezy', 'img/items/squeezy.png', 32, 32, 1);
        this.game.load.spritesheet('bloodylust', 'img/items/bloodylust.png', 32, 32, 1);
        this.game.load.spritesheet('momseye', 'img/items/momseye.png', 32, 32, 1);
        this.game.load.spritesheet('momscontacts', 'img/items/momscontacts.png', 32, 32, 1);
        
        this.game.load.spritesheet('polyphemus', 'img/items/polyphemus.png', 32, 32, 1);
        this.game.load.spritesheet('glasscannon', 'img/items/glasscannon.png', 32, 32, 1);
        
        this.game.load.spritesheet('toothpicks', 'img/items/toothpicks.png', 32, 32, 1);
        this.game.load.spritesheet('vampire', 'img/items/vampire.png', 32, 32, 1);
        this.game.load.spritesheet('deadcat', 'img/items/deadcat.png', 32, 32, 1);
        this.game.load.spritesheet('momsbra', 'img/items/momsbra.png', 32, 32, 1);
        
        this.game.load.spritesheet('experimentaltreatment', 'img/items/experimentaltreatment.png', 32, 32, 1);
        this.game.load.spritesheet('holymantle', 'img/items/holymantle.png', 32, 32, 1);
        
        this.game.load.spritesheet('steamsale', 'img/items/steamsale.png', 32, 32, 1);
        
        this.game.load.spritesheet('itemAltar', 'img/itemAltar.png', 32, 30, 1);
        this.game.load.spritesheet('isaac', 'img/isaac.png', 66, 58, 1);
        this.game.load.spritesheet('tower', 'img/tower_isaac.png', 32, 30, 2);
        this.game.load.spritesheet('boom', 'img/explode.png', 128, 128, 8);
        this.game.load.spritesheet('belial', 'img/belial.png', 128, 128, 8);
        this.game.load.spritesheet('megaTear', 'img/megaTear.png', 128, 128, 8);
        this.game.load.spritesheet('megaExplode', 'img/megaExplode.png', 128, 128, 12);
        this.game.load.spritesheet('enemyTear', 'img/enemyTear.png', 128, 128, 8);
        this.game.load.spritesheet('stanTear', 'img/stanTear.png', 128, 128, 8);
        this.game.load.spritesheet('babyTear', 'img/babyTear.png', 48, 48, 5);
        this.game.load.spritesheet('mummy', 'img/placeholder-enemy.png', 64, 64, 180);
        this.game.load.spritesheet('spacebug', 'img/space-baddie.png', 16,16, 1);
        this.game.load.spritesheet('ufo', 'img/ufo.png', 16,16, 1);
        this.game.load.spritesheet('zombie', 'img/enemies/zombie64x64.png', 64, 64, 8);
        this.game.load.spritesheet('drybaby', 'img/drybaby.png', 32, 32, 4);
        this.game.load.spritesheet('biggy', 'img/bigDude.png', 82, 82, 5);
        this.game.load.spritesheet('fly', 'img/fly.png', 32, 32, 2);
        this.game.load.spritesheet('spikes', 'img/spikes.png', 48, 48, 2);
        this.game.load.spritesheet('laserhead', 'img/laserhead.png', 48, 48, 2);
        this.game.load.spritesheet('vis', 'img/vis.png', 32, 32, 2);
        this.game.load.spritesheet('succ', 'img/succ.png', 32, 32, 2);
        this.game.load.spritesheet('base', 'img/base.png', 64, 64, 1);
        this.game.load.spritesheet('stan', 'img/stan.png', 200, 124, 12);
        this.game.load.spritesheet('mega', 'img/megasatan.png', 166, 293, 3);
        this.game.load.spritesheet('baby', 'img/baby.png', 64, 64, 6);
        
        
        this.game.load.spritesheet('clotty', 'img/clotty.png', 68, 68, 6);
        this.game.load.spritesheet('squirt', 'img/squirt.png', 64, 64, 5);
        this.game.load.spritesheet('deathhead', 'img/deathhead.png', 32, 34, 4);
        this.game.load.spritesheet('dip', 'img/dip.png', 32, 32, 4);
        this.game.load.spritesheet('lilhaunt', 'img/lilhaunt.png', 32, 32, 3);
        this.game.load.spritesheet('dankdeath', 'img/dankdeath.png', 32, 34, 4);
        this.game.load.spritesheet('guts', 'img/guts.png', 32, 32, 12);
        this.game.load.spritesheet('scarredguts', 'img/scarredguts.png', 32, 32, 12);
        
        this.game.load.spritesheet('bg_fire', 'img/bg_assets/fire_asset.png', 52, 52, 3);
        this.game.load.spritesheet('spikey', 'img/bg_assets/grid_spikes.png', 31, 31, 1);
        this.game.load.spritesheet('rocks1', 'img/bg_assets/rocks_basement.png', 31, 31, 1);
        this.game.load.spritesheet('rocks2', 'img/bg_assets/rocks_sheol.png', 31, 31, 1);
        this.game.load.spritesheet('rocks3', 'img/bg_assets/rocks_caves.png', 31, 31, 1);

        this.game.load.spritesheet('arrowup', 'img/arrowup.png', 30, 18, 1);
        this.game.load.spritesheet('arrowdown', 'img/arrowdown.png', 30, 18, 1);
        /**********AUDIO*******************/
        this.game.load.audio('mega', ['audio/sfx/mega.mp3']);
        this.game.load.audio('laugh', ['audio/sfx/laugh.wav']);
        this.game.load.audio('burst', ['audio/sfx/burst.wav']);
        this.game.load.audio('burst3', ['audio/sfx/burst3.wav']);
        this.game.load.audio('burst2', ['audio/sfx/burst2.wav']);
        this.game.load.audio('summon', ['audio/sfx/summonsound.mp3']);
        this.game.load.audio('drip1', ['audio/sfx/drip1.wav']);
        this.game.load.audio('drop2', ['audio/sfx/drop2.wav']);
        this.game.load.audio('drop3', ['audio/sfx/drop3.wav']);
        this.game.load.audio('splatter0', ['audio/sfx/splatter0.wav']);
        this.game.load.audio('splatter1', ['audio/sfx/splatter1.wav']);
        this.game.load.audio('splatter2', ['audio/sfx/splatter2.wav']);
        this.game.load.audio('tear4', ['audio/sfx/tear1.mp3']);
        this.game.load.audio('tear5', ['audio/sfx/tear2.mp3']);
        this.game.load.audio('stanspawn', ['audio/sfx/stanspawn.mp3']);
        this.game.load.audio('fly1', ['audio/sfx/fly1.wav']);
        this.game.load.audio('fly2', ['audio/sfx/fly2.wav']);
        this.game.load.audio('fly3', ['audio/sfx/fly3.wav']);
        this.game.load.audio('fly4', ['audio/sfx/fly4.wav']);
        
        this.game.load.audio('itemGet1', ['audio/sfx/itemGet1.mp3']);
        this.game.load.audio('itemGet2', ['audio/sfx/itemGet2.mp3']);
        this.game.load.audio('itemGet3', ['audio/sfx/itemGet3.mp3']);
        this.game.load.audio('itemGet4', ['audio/sfx/itemGet4.mp3']);
        this.game.load.audio('itemGet5', ['audio/sfx/itemGet5.mp3']);
        
        
        this.game.load.audio('hurt1', ['audio/sfx/hurt1.mp3']);
        this.game.load.audio('hurt2', ['audio/sfx/hurt2.mp3']);
        this.game.load.audio('hurt3', ['audio/sfx/hurt3.mp3']);
        this.game.load.audio('death1', ['audio/sfx/death1.mp3']);
        this.game.load.audio('death2', ['audio/sfx/death2.mp3']);
        this.game.load.audio('death3', ['audio/sfx/death3.mp3']);
        this.game.load.audio('shoot', ['audio/sfx/shoot.wav']);
        this.game.load.audio('shoot2', ['audio/sfx/shoot2.wav']);
        this.game.load.audio('shoot3', ['audio/sfx/shoot3.wav']);
        this.game.load.audio('shootsfx', 'audio/shootsfx.mp3');
        this.game.load.audio('explodesfx', 'audio/explodesfx.mp3');
        this.game.load.audio('game_music', ['audio/game_music.mp3']);
        this.game.load.audio('level1', ['audio/level1.mp3']);
        this.game.load.audio('level2', ['audio/level2.mp3']);
        this.game.load.audio('level3a', ['audio/level3a.mp3']);
        this.game.load.audio('level3b', ['audio/level3b.mp3']);
        this.game.load.audio('intro', ['audio/intro.mp3']);
        this.game.load.audio('jingle', ['audio/jingle.mp3']);
        this.game.load.audio('deathjingle', ['audio/deathjingle.mp3']);
        this.game.load.audio('uded', ['audio/uded.mp3']);
        this.game.load.audio('boss1', ['audio/boss1.mp3']);
        this.game.load.audio('boss2', ['audio/boss2.mp3']);
        this.game.load.audio('boss3', ['audio/boss3.mp3']);
        this.game.load.audio('calm', ['audio/calm.mp3']);
        /**********FONT*******************/
        this.game.load.bitmapFont('nokia16', 'fonts/nokia16.png', 'fonts/nokia16.xml');

        //this.state.start('Game'); // changes state to Game.js

	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
  /*      var map = this.game.add.tilemap('cave');
        map.addTilesetImage('cave', 'tiles');
        var layer = map.createLayer('world1');
        layer.resizeWorld();
        layer.wrap = true;

        var mum = this.add.sprite(300, 200, 'mummy');
        mum.animations.add('walk');
        mum.animations.play('walk', 10, true);
        this.state.start('StartMenu');
*/
        this.state.start('StartMenu');
	},

	update: function () {

//        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
//            this.ready = true;
//            //this.state.start('StartMenu');
//        }

        //this.state.start('LevelOne');

	}
};

