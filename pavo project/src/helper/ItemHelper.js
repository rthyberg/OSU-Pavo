var magMush = function(tower) {
    if(tower.currentItem != "magmush") {
        
        tower.currentItem = "magmush";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 3;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 300;
        tower.updateRange();
    }
}
var brimStone = function(tower) {
    if(tower.currentItem != "brimstone") {
        tower.currentItem = "brimstone";
        tower.fireUp = true;
        tower.fireType = 2;
        tower.frostShot = false;
        tower.damage = 2;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}
var bluecap = function(tower) {
    if(tower.currentItem != "bluecap") {
        tower.currentItem = "bluecap";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false
        tower.damage = 2;
        tower.weapon.fireRate = 400;
        tower.weapon.bulletKillDistance = 350;
        tower.updateRange();
    }
}
var capricorn = function(tower) {
    if(tower.currentItem != "capricorn") {
        tower.currentItem = "capricorn";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = true;
        tower.damage = 2;
        tower.weapon.fireRate = 425;
        tower.weapon.bulletKillDistance = 275;
        tower.updateRange();
    }
}
var wirecoathanger = function(tower) {
    if(tower.currentItem != "wirecoathanger") {
        tower.currentItem = "wirecoathanger";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1;
        tower.weapon.fireRate = 300;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}
var pentagram = function(tower) {
    if(tower.currentItem != "pentagram") {
        tower.currentItem = "pentagram";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 4;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var ghostpepper = function(tower) {
    if(tower.currentItem != "ghostpepper") {
        tower.currentItem = "ghostpepper";
        tower.fireUp = true;
        tower.fireType = 2;
        tower.frostShot = false;
        tower.damage = 2;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var smallrock = function(tower) {
    if(tower.currentItem != "smallrock") {
        tower.currentItem = "smallrock";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 8;
        tower.weapon.fireRate = 600;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var squeezy = function(tower) {
    if(tower.currentItem != "squeezy") {
        tower.currentItem = "squeezy";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1;
        tower.weapon.fireRate = 100;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var twenty = function(tower) {
    if(tower.currentItem != "twenty") {
        tower.currentItem = "twenty";
        tower.doubleUp = true;
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var bloodylust = function(tower) {
    if(tower.currentItem != "bloodylust") {
        tower.currentItem = "bloodylust";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var momseye = function(tower) {
    if(tower.currentItem != "momseye") {
        tower.currentItem = "momseye";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = true;
        tower.damage = 5;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var momscontacts = function(tower) {
    if(tower.currentItem != "momscontacts") {
        tower.currentItem = "momscontacts";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = true;
        tower.damage = 3;
        tower.weapon.fireRate = 300;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var polyphemus = function(tower) {
    if(tower.currentItem != "polyphemus") {
        tower.currentItem = "polyphemus";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 100;
        tower.weapon.fireRate = 1000;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var glasscannon = function(tower) {
    if(tower.currentItem != "glasscannon") {
        tower.currentItem = "glasscannon";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1000;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var toothpicks = function(tower) {
    if(tower.currentItem != "toothpicks") {
        tower.currentItem = "toothpicks";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 1;
        tower.weapon.fireRate = 200;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var momsbra = function(tower) {
    if(tower.currentItem != "momsbra") {
        tower.currentItem = "momsbra";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = true;
        tower.damage = 3;
        tower.weapon.fireRate = 300;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var experimentaltreatment = function(tower) {
    if(tower.currentItem != "experimentaltreatment") {
        tower.currentItem = "experimentaltreatment";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 2;
        tower.weapon.fireRate = 300;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var holymantle = function(tower) {

}



var blacklotus = function(tower) {

}

var deadcat = function(tower) {

}

var breakfast = function(tower) {

}

var dessert = function(tower) {

}

var dinner = function(tower) {

}

var lunch = function(tower) {

}

var snack = function(tower) {

}

var placenta = function(tower) {

}

var steamsale = function(tower) {

}

var heart = function(tower) {

}

var vampire = function(tower) {

}

var deadcat = function(tower) {

}


var list_of_items = [["holymantle", holymantle], ["experimentaltreatment", experimentaltreatment],["momsbra", momsbra],["deadcat", deadcat],["vampire", vampire],["toothpicks", toothpicks],["glasscannon", glasscannon],["polyphemus", polyphemus],["momseye", momseye],["momscontacts", momscontacts],["heart", heart], ["bloodylust", bloodylust],["twenty", twenty],["squeezy", squeezy],["smallrock", smallrock],["steamsale", steamsale], ["lunch", lunch],["snack", snack],["placenta", placenta],["ghostpepper", ghostpepper],["dessert", dessert],["dinner", dinner],["breakfast", breakfast], ["blacklotus", blacklotus], ["magmush", magMush], ["brimstone",brimStone], ["bluecap", bluecap] ,["capricorn", capricorn],["wirecoathanger", wirecoathanger], ["pentagram", pentagram]];

function pickRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function applyTowerUpgrade (group, item) {
    group.forEach(item, this, false);
}

function applyBloody (group) {
    //group.forEach(tower.damage+=1);
}