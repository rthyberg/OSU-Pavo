var game = new Phaser.Game(800, 600, Phaser.AUTO, 'TowerDef', { preload: preload });

function preload() {
    game.state.add('Boot', TowerDefense.Boot);
    game.state.add('Preloader', TowerDefense.Preloader);
    //game.state.add('StartMenu', TowerDefense.StartMenu);
    game.state.add('Game', TowerDefense.Game);
    game.state.start('Boot');
}

function create() {

}
