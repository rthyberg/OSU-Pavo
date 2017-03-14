var magMush = function(tower) {
    if(tower.currentItem != "magmush") {
        tower.currentItem = "magmush";
        tower.fireUp = false;
        tower.fireType = 0;
        tower.frostShot = false;
        tower.damage = 5;
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
        tower.damage = 3;
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
        tower.damage = 3;
        tower.weapon.fireRate = 500;
        tower.weapon.bulletKillDistance = 200;
        tower.updateRange();
    }
}

var list_of_items = [["magmush", magMush], ["brimstone",brimStone], ["bluecap", bluecap] ,["capricorn", capricorn],["wirecoathanger", wirecoathanger], ["pentagram", pentagram]];

function pickRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}
function applyTowerUpgrade (group, item) {
    group.forEach(item, this, false);
}