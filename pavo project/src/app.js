var game = new Phaser.Game(800, 600, Phaser.AUTO, 'TowerDef', { preload: preload });

function preload() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.add('Boot', TowerDefense.Boot); // sets phaser settings
    game.state.add('Preloader', TowerDefense.Preloader); // preloads all our assets
    game.state.add('LevelOne', TowerDefense.LevelOne);
    //TODO - add a start menu state
    //game.state.add('StartMenu', TowerDefense.StartMenu);

    //TODO Should be modularized later into 3 differnt levels
    game.state.add('Game', TowerDefense.Game); // Currently adds our test level.

    game.state.start('Boot'); // pushes app into boot state
}
