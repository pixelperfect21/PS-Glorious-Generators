addLayer("m", {
    branches: ['c', 'v'],
    name: "metaGenerators", 
    color: "#4A148C",
    symbol: "M", 
    position: 0,
    row: 4,
    layerShown() {return hasMilestone('c', 11) || player.m.unlocked},

    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        metaGenPower: new Decimal(0),
        resetTime: 1,

        inDialogue: false,
        dialogueInput: "",

        metaTokens: new Decimal(0),
        spentMetaTokens: new Decimal(0),

        pseudoUnlocks: []
    }},
    requires: new Decimal(1e33) ,
    resource: "meta generators", 
    baseResource: "charge", 
    baseAmount() {return player.c.charge}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.75)
        return exp
    }, 
    hotkeys: [
        {key: "m", description: "M: Reset for meta-generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.m.unlocked}},
    ],
    onPrestige() {
        player.m.metaGenPower = new Decimal(0)
    },

    metaGenBase() { 
        base = new Decimal(2)
        return base
    },
    freeMetaGens() {
        let gens = new Decimal(0)
        return gens
    },
    effect() {
        let effect = tmp.m.metaGenBase.pow(player.m.points.add(tmp.m.freeMetaGens)).sub(1)
        return effect
    },
    effectDescription() {
        return "which are generating " + format(tmp.m.effect) + " meta generator power per second"
    },
    getTotalMetaTokens() {
        let tokens = new Decimal(0)
        return tokens
    },

    infoboxes: {
        lori: {
            title: "Lori",
            body() {return " \
                    <img src='resources/loriWink.png' style='float:left'> \
                    <p style='padding: 99.5px 0;'>Hi there! My name is Lori, nice to meet you! This is the current end of Prestigious Saplings: Glorious Generators for now, but I hope to see you in Part 2! Thanks for playing!</p>\
            "},
        },
    },

    tabFormat: [

        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.m.metaGenPower) + " meta generator power"],
        "blank",
        ["display-text", () => "Your meta generator base is " + format(tmp.m.metaGenBase)],
        ["display-text", () => {
            if (tmp.m.freeMetaGens.gt(0)) {
                return "You have " + format(tmp.m.freeMetaGens) + " free meta generators"
            } else {
                return ""
            }
        }],
        "blank",
        ["infobox", "lori"],
        ["text-input", "dialogueInput", { 
            color: "var(--color)", 
            width: "400px",
            "font-family": "Inconsolata, monospace",
            "font-size": "16px",
            border: "2px solid #ffffff17", 
            background: "var(--background)", 
        }],
        

    ],
    update(diff) {
        player.m.metaGenPower = player.m.metaGenPower.add(tmp.m.effect.mul(diff))
    }
})
