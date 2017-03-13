var magMush = function(tower) {
    if(tower.currentItem != "magMush") {
        tower.currentItem = "magMush";
        tower.damage += 3;
        tower.towerRange += 100;
        tower.updateRange();
    }
}
var brimStone = function(tower) {
    if(tower.currentItem != "brimStone") {
        tower.currentItem = "brimStone";
        tower.fireUp = true;
        tower.fireType = 2;
    }
}
var bluecap = function(tower) {
    if(tower.currentItem != "bluecap") {
        tower.currentItem = "bluecap";
        tower.frostShot = true
        tower.fireRate -= 100;
        tower.towerRange += 150;
        tower.updateRange();
    }
}
var capricon = function(tower) {
    if(tower.currentItem != "capricon") {
        tower.currentItem = "capricon";
        tower.fireRate -= 75;
        tower.damage += 2;
        tower.towerRange += 75;
        tower.updateRange();
    }
}
var wirecoathanger = function(tower) {
    if(tower.currentItem != "wirecoathanger") {
        tower.currentItem = "wirecoathanger";
        tower.fireRate-=200;
    }
}
var pentagram = function(tower) {
    if(tower.currentItem != "pentagram") {
        tower.currentItem = "pentagram";
        tower.damage += 4;
    }
}
var list_of_items = [["magMush", magMush], ["brimStone",brimStone], ["bluecap", bluecap] ,["capricon", capricon],["wirecoathanger", wirecoathanger], ["pentagram", pentagram]];

<<<<<<< HEAD
function pickRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}
function applyTowerUpgrade (group, item) {
    group.forEach(item, this, false);
}
