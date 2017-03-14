this.soundmanager;

drawWaveScreen = function(state, message, msTime){
    var text = state.add.text(state.world.centerX, state.world.centerY-200, message, { font: "65px Arial", fill: "#ff0044", align: "center" });
    text.anchor.set(0.5);
    text.inputEnabled = true;
    
    setTimeout(function(){
        text.kill();
    }, msTime);
};

drawGameOverScreen = function(state, message, linkmessage, linkstate){
    this.soundmanager = new soundManager(game);
    this.soundmanager.uded.play();
    var graphics = state.add.graphics(0, 0);
    graphics.lineStyle(2, 0xeeeeee, 1);
    graphics.beginFill(0x000000, 0.8);
    graphics.drawRect(0, 0, 800, 600);
    graphics.endFill();
    
    var text = state.add.text(state.world.centerX, state.world.centerY-100, message, { font: "40px Arial", fill: "#ffffff", align: "center" });
    text.anchor.set(0.5);
    text.z += 500;
    text.zIndex = 100;
    console.log(text);
    
    var link = state.add.text(state.world.centerX, state.world.centerY+100, linkmessage, { font: "65px Arial", fill: "#3366BB", align: "center" });
    link.anchor.set(0.5);
    link.inputEnabled = true;
    link.events.onInputDown.add(function(){
        this.soundmanager.musicstop();
        console.log(linkstate);
        game.state.start(linkstate);
    }, this);
}

drawNextGame = function(state, message, linkmessage, linkstate){
    this.soundmanager = new soundManager(game);
    this.soundmanager.calm.play();
    var graphics = state.add.graphics(0, 0);
    graphics.lineStyle(2, 0xeeeeee, 1);
    graphics.beginFill(0x000000, 0.8);
    graphics.drawRect(0, 0, 800, 600);
    graphics.endFill();
    
    var text = state.add.text(state.world.centerX, state.world.centerY-100, message, { font: "40px Arial", fill: "#ffffff", align: "center" });
    text.anchor.set(0.5);
    text.z += 500;
    text.zIndex = 100;
    console.log(text);
    
    var link = state.add.text(state.world.centerX, state.world.centerY+100, linkmessage, { font: "65px Arial", fill: "#3366BB", align: "center" });
    link.anchor.set(0.5);
    link.inputEnabled = true;
    link.events.onInputDown.add(function(){
        this.soundmanager.musicstop();
        console.log(linkstate);
        game.state.start(linkstate);
    }, this);
}
