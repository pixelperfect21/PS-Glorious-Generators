var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// Ghost layers, for the cool tree shape :D
addNode("row0offset", {
    layerShown: "ghost",
})
addLayer("row2offset", {
    layerShown() {
        if (!(hasUpgrade('a', 31) && hasUpgrade('d', 31))) {
            return false
        } else return "ghost"
    },
    row: 1,
    position: 0
})
addLayer("row3offset", {
    layerShown() {
        if (hasUpgrade('g', 33) || player.v.unlocked) {
            return false
        } else return "ghost"
    },
    row: 2,
    position: 1
})
addLayer("row3offset2", {
    layerShown: "ghost",
    row: 2,
    position: 2
})
/* addLayer("test1", {
    branches: ['d'],
    symbol: "C",
    color: "#1A237E",
    layerShown: true,
    row: 1,
    position: 2
}) 
addLayer("test2", {
    branches: ['v', 'c'],
    symbol: "M",
    color: "#4A148C",
    layerShown: true,
    row: 3,
    position: 2
}) */

addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})