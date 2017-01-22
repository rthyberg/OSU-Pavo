# OSU-Pav
CS 467
Winter 2017
Pavo Project Plan
Pavo Team:

	Alexandre Silva
	Robert Thyberg
	Ving Trung

### Introduction:
Team Pavo will be building a tower defense game as a web application.  We will be building this using a well known javascript framework, Phaser, used to build web games.  None of us has any experience building games but we are all somewhat familiar with javascript and web applications.

### User Perspective:
The end user will experience a game loaded from their browser when they reach a specified URL address.  They will be challenge with a mixed of obstacles that will require strategy, resource management and decision making skills to overcome.  There will be at least 3 levels for the user to complete with each level being more challenging than the last.  Users should have a sense of accomplishment if they successfully complete all levels.

### Client:
The instructor for the CS 467 Capstone course at Oregon State University, Benjamin Brewster is our client.

### Client Requirement:
Requirements are outlined in this link: https://oregonstate.instructure.com/courses/1642213/pages/web4-tower-defense
It will be single player only.
Your game must allow different individual "towers" (at least three different types) to be constructed that serve some purpose on a 2D board or level.
There must be at least three different boards or levels.
Enemy units will enter the play field and attempt to achieve some objective: your towers attempt to stop the enemy units from completing their objective (e.g., steal power cores, damage a shield, cross the bridge and leave the level, etc.), in order to win (i.e. the player must lose if the enemies succeed).
There must be at least 10 "waves" of enemy units that enter the board or level.
There must be at least three different types of enemy units.
Each defeated enemy should provide some sort of benefit to the player, for example gold or energy used to purchase or power buildings or towers.
If your game has units attacking or otherwise affecting something, appropriate animations showing projectiles, beams, healing, etc. must be shown to indicate what's happening.
An individual game, screen, or board must be winnable, with reasonable to serious effort/skill, within 10 minutes. A new player should not be able to beat the game.


### Technology/Sources:
Phaser will be our framework: https://phaser.io/, and we will be utilizing other web-based technologies as needed. Any additional graphics, sounds, or assets will be covered under fair use and be appropriately sourced.


### Tower Defense Game Project Outline:
#### Name: Centralis
#### Overview:
This is a 2d tower defense game. For the purposes of this class, there are three levels, each with randomly generated assets. Each level contains ten waves. It follows the basic tower defense genre, with a few minor modifications. Which means, the Home Base has a set level of HP. Once HP hits zero, the player loses the game.
#### Tower types:
These are towers players can place down to defend their Home Base. There is a set limit of towers a player can place down, beyond the monetary constraints.
*Shooter. Basic tower that fires stuff at enemies. At base level, damage is low, range is low, accuracy is low, shot delay is high (less shots per second).
*Mine. Explodes on impact with an enemy, damaging both player and enemy waves.
*Healer. Heals other towers (but not the Home base without upgrades).
*Shield. Creates a low range, low health shield around a target.
*Wall. A wall that stops enemy progress until the wall is destroyed. Flying enemies can ignore the wall.
*Home Base. Base HP of 3. Can be upgraded, is automatically placed and cannot be moved.
#### In-Game Currency 
Dead enemies drop Space Bucks, which the player can use to purchase defenses, upgrades, new items, and new abilities. Purchases can be made during waves.

#### Shooter Upgrades:
All upgrades are applied universally. Synergies do exist.
*Piercing Shots. These shots pierce enemies can do damage to enemies behind them.
*Freeze Shots. These shots freeze enemies for a few seconds. If upgraded, not all shots will be freeze shots (based on player luck).
*Laser Shots (pierce and do continuous damage).
*Missile Shots. These shots do limited explosive damage in a certain radius.
*Flame Shots (do continuous ticks of fire damage). Not all shots will be flame shots.
*Stat Increases/Decreases (simple upgrades that increase or decrease a base stat).
*Slow Shots. Slows the targeted enemy for a few seconds. Not all shots will be slow shots.
*Fear Shots. Makes the enemy run away back towards their spawn point (this only lasts for a few seconds; after which, they continue their march if they’re not already dead). Not all shots will be fear shots.
*Charm Shots. Makes the enemy friendly for a few seconds and target other enemies. Not all shots will be charm shots.
*HP up. 
#### Mine Upgrades:
*Explosive Range Up
*Explosive Damage Up
*Smart Explosives (mines no longer harm the player assets)
#### Home Base Upgrades:
*HP up (up to a max of 12).
*Shields up.
*Slow enemies for the remainder of the wave upon getting hit once.
*Extra lives (up to 3).
*Discount item (everything is 50% cheaper). The player can get two discount items, and thus make everything free (though, after everything is purchased, the purchasable pool defaults to HP upgrades for the Home Base, which cannot heal the player).
*Wave heal: heal 1hp after beating a wave.
#### Shield upgrades:
*HP up.
*Recharge time down.
*Range up.
### Spacebar items:
The player can only hold one spacebar item at a time. Spacebar items recharge over time, or over waves, or via battery drops enemies can drop.
*Call in an airstrike.
*Summon a swarm of friendly bugs, that do damage to all enemies for a single wave.
*Heal the Base for one hp.
*Damage all enemies.
*Destroy all player towers and destroy all enemies for a single wave. 
*Reroll inventory items.
*Turn back time to the start of a wave.
*Invincibility.
### Enemies
Can drop upgrades, money, or a spacebar item (money is super common; upgrades and the spacebar way less so).
The first 9 waves are enemies with scaling difficulty.
The last wave is always a boss wave.
Enemies will always target the base first, unless if they are a specific type that goes after towers.
#### Enemy types:
*Slow, walking type. Deals contact damage.
*Slow, walking type, with shooter. Deals shooting damage.
*Fast, walking type. Deals contact damage.
*Fast, walking type. Deals shooting damage.
*Low HP swarm types. Several enemies clumped together, deal contact damage.
*Explosive type. Deals explosive damage.
*Sapper types. Goes after towers and other tools first before the main base.
*Flying, slow types. They fly over otherwise impassable gaps in the level. Can deal shooting/contact damage.
*Flying, fast types. Same as above, but faster. Can deal shooting/contact damage.
*Siege types. Deals high damage at range.
*Healer type. Heals enemies.
*Shield type. Shields enemies (must be killed in order to deal damage).
#### Boss types:
*Walking, slow type. Deals contact damage and ranged damage. Can summon other enemies. Targets towers and the base.
*Fast type. Deals all sorts of damage. Cannot summon other enemies.
*Ultra Hard type. Deals all sorts of damage. Flies. Can summon other enemies. High HP.
#### Inventory:
Once something is unlocked, it is placed in an item inventory the player can access in-game.

### Levels:
3 in total:
They have random architecture and geography, which randomizes enemy patterns (except if enemies can fly).
For example:

There are three artistic designs (the order is randomly generated):
Desert level.
Underground level.
Lava level



#### Concept Levels:
Desert Map


Underground Map

Lava Level


During waves, the player can control repair drones (upgradable) during waves to up the HP of one tower. Beyond the home base, everything in the game has HP bars, and can take several hits each before going down.


### Project Benchmarks:
The following is a list of general project benchmarks to assist in completing the project on time; an overall view of the due dates and deliverables, ordered from highest priority to lowest priority:

1. Create an empty, base level that exists in a two-dimensional space; compiled and executed without any bugs. This base level will serve as the foundation for the game.
2. Create and add placeholder geometric shapes that will represent towers, enemies, and the Base.
3. Add in tower AI to shoot at objects. Modify it to include variable range and accuracy.
4. Add in enemy AI that can either target the Base or towers.
5. Add in damage and HP, as well as player stats and UI.
6. Using roguelike philosophy, add in random generation and placement of assets in the level; so that each level generated will be different, with different enemy spawns and graphics.
7. Create a simple debug mode that allows for easy testing.
8. Begin the process of adding items, upgrades, and shops.
9. Successfully run ten enemy waves through, from start to end.
10. Modify as needed the difficulty level of the AI to make it harder or easier.
11. Add in variable enemies, with different patterns of attack.
12. Add in the bosses.
13. Run the game from start to finish; all three levels of ten waves each.
14. Add in graphics to replace the placeholder ones.
15. Create a menu with options, stats, and a start button.
16. Add in sound design, including if time permits, a simple soundtrack.
17. Ship it.

### Team Member Responsibilities:

#### Alexandre Silva
Responsibilities: 



Expectations
- [] Week 1: Get familiarity with the Phaser framework; Benchmarks 1 & 2
- [] Week 2 Benchmark 5
- [] Week 3: Benchmark 5
- [] Week 4 Benchmark 6
- [] Week 5 Benchmark 8
- [] Week 6 Benchmark 9; 10; 11
- [] Week 7 Benchmark 11; 12
- [] Week 8 Benchmark 13
- [] Week 9 Benchmark 13-17
- [] Week 10 Benchmark 13-17

#### Robert Thyberg
Responsibilities: 



Expectations
- [] Week 1: Get familiarity with the Phaser framework; Benchmarks 1 & 2
- [] Week 2: Benchmark 3
- [] Week 3: Benchmark 3
- [] Week 4: Benchmark 6
- [] Week 5: Benchmark 8
- [] Week 6: Benchmark 9; 10; 11
- [] Week 7: Benchmark 11, 12
- [] Week 8: Benchmark 13
- [] Week 9: Benchmark 13-17
- [] Week 10: Benchmark 13-17

#### Ving Trung
Responsibilities: 



Expectations
- [] Week 1: Get familiarity with the Phaser framework; Benchmarks 1 & 2
- [] Week 2: Benchmark 4
- [] Week 3: Benchmark 4
- [] Week 4: Benchmark 6
- [] Week 5: Benchmark 7, Benchmark 8
- [] Week 6: Benchmark 9, 10, 11
- [] Week 7: Benchmark 11, 12
- [] Week 8: Benchmark 13
- [] Week 9: Benchmark 13-17
- [] Week 10: Benchmark 13-17

### Conclusion:

The Pavo team will complete a tower defense game that will run on the chrome browser using the phaser javascript framework.  This project will take more than 300 hours to complete.


