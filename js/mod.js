let modInfo = {
	name: "Prestigious Saplings: Glorious Generators!",
	author: "PixelPerfect12",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js", "metaGens.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.01",
	name: "I Forgot To Change The Version Number",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0: Glorious Generator!</h3><br>
		- Added stuff.<br>
  	<h3>v1.01: I Forgot To Change The Version Number</h3><br>
		- Fixed some typos.<br>
		- Fixed Achievement Power not working properly.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
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
}}

// Display extra things at the top of the page
var displayThings = [
	"Resets function similarly to The Game Dev Tree (Layers only reset along branches)",
	"Reach 1e10000 points to beat the game!"
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
