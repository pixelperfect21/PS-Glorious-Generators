let modInfo = {
	name: "Prestigious Saplings: Glorious Generators!",
	author: "PixelPerfect12",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js", "metaGens.js"],

	discordName: "Pixel's Cool Server",
	discordLink: "https://discord.gg/5K4DXpGeU2",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.11",
	name: "Pixel, Please Stop Fumbling Updates",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0: Glorious Generators!</h3><br>
		- Added stuff.<br>
  	<h3>v1.01: I Forgot To Change The Version Number</h3><br>
		- Fixed some typos.<br>
		- Fixed Achievement Power not working properly.<br>
	<h3>v1.1: Half An Update Is Better Than None</h3><br>
		- Added content to the Meta-Generator layer.<br>
		- Added max buying to the Generator, Alternator, and Dynamo layers<br>
		- Reworked the Voltage mechanic<br>
	<h3>v1.11: Pixel, Please Stop Fumbling Updates</h3><br>
		- Balancing reworks<br>
		- Fixed Meta Generator related bugs<br>`

let winText = `if you can see this you most likely caused something to inflate, please let me know, and also tell me your most recently purchased upgrade (if you remember what it was)`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return !player.m.inDialogue
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(tmp.g.genPowEffect)
	if (hasUpgrade('g', 11)) gain = gain.mul(upgradeEffect('g', 11))
	if (hasUpgrade('g', 22)) gain = gain.mul(upgradeEffect('g', 22))
	if (hasUpgrade('g', 23)) gain = gain.mul(upgradeEffect('g', 23))
	if (hasUpgrade('g', 24)) gain = gain.mul(upgradeEffect('g', 24))
	if (hasUpgrade('a', 11)) gain = gain.mul(upgradeEffect('a', 11))
	if (hasUpgrade('a', 12)) gain = gain.mul(upgradeEffect('a', 12))
	if (hasUpgrade('a', 24)) gain = gain.mul(upgradeEffect('a', 24))
	if (hasUpgrade('d', 11)) gain = gain.mul(upgradeEffect('d', 11))
	if (hasUpgrade('d', 12)) gain = gain.mul(upgradeEffect('d', 12))
	if (hasUpgrade('d', 24)) gain = gain.mul(upgradeEffect('d', 24))
	gain = gain.mul(tmp.v.voltageEffect)
	if (hasUpgrade('d', 51)) gain = gain.mul(upgradeEffect('d', 51))

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	name: "Player"
}}

// Display extra things at the top of the page
var displayThings = [
	"Resets function similarly to The Game Dev Tree (Layers only reset along branches)",
	"Reach 1e10000 points to beat the game!",
	() => {
		if (player.m.inDialogue) {return "You are currently in dialogue, check the Meta Generator layer"}
	},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e10000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(60) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
	if (oldVersion <= "1.01") {
		if (player.m.points.gte(2)) {
			player.m.points = new Decimal(1)
		}
		player.m.metaTokens = new Decimal(1)
		startDialogue("introduction1")
	}
	if (oldVersion <= "1.1") {
		if (player.m.points.lte(0) && player.m.metaTokens.gte(1)) {
			player.m.points = new Decimal(1)
		}
		if (player.m.dialogueStatus == "metaUpgrades3" && getBuyableAmount('m', 51).eq(1)) {
			startDialogue('metaUpgrades4B')
		}
	}
}