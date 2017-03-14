var game = new Phaser.Game(800, 600, Phaser.AUTO, 'TowerDefense', { preload: preload });

//default game volume between 0-10;
var gameVolume = 7;
var gameSfxVolume = 7;

function preload() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.add('Boot', TowerDefense.Boot); // sets phaser settings
    game.state.add('Preloader', TowerDefense.Preloader); // preloads all our assets
    game.state.add('LevelOne', TowerDefense.LevelOne);
    game.state.add('WaveDemo', TowerDefense.WaveDemo);
    game.state.add('PathBuildDemo', TowerDefense.PathBuildDemo);
    game.state.add('LevelAlpha', TowerDefense.LevelAlpha);
    game.state.add('DarkRoom', TowerDefense.DarkRoom);
    game.state.add('SpookRoom', TowerDefense.SpookRoom);
    //TODO - add a start menu state
    game.state.add('StartMenu', TowerDefense.StartMenu);
    game.state.add('OptionMenu', TowerDefense.OptionMenu);

    //TODO Should be modularized later into 3 differnt levels
    game.state.add('Game', TowerDefense.Game); // Currently adds our test level.

    game.state.start('Boot'); // pushes app into boot state
}
