/* 
    Icon change key:
    @w = loriWink
    @h = loriHappy
    @s = loriSmile
    @c = loriConfused
    @p = loriSurprised
    @d = loriDisappointed
    @n = loriNotSpeaking

*/
function skipPart1() {
    player.g.upgrades = ["11","12","13","14","21","22","23","24","31","32","33","41","42","43","44"]
    player.a.upgrades = ["11","12","13","14","21","22","23","24","31","41","42","43","44","51","52","53","54"]
    player.d.upgrades = ["11","12","13","14","21","22","23","24","31","41","42","43","44","51","52","53","54"]
    player.v.upgrades = ["11","12","13","14","21","22","23","24","31","32","33","34"]
    player.g.points = new Decimal(1)
    player.a.points = new Decimal(1)
    player.d.points = new Decimal(1)
    player.v.points = new Decimal(24)
    player.c.points = new Decimal(46)
    player.c.challenges[11] = 10
    player.c.challenges[12] = 10
    player.c.challenges[13] = 10
    setBuyableAmount('c', 11, new Decimal(100))
    setBuyableAmount('c', 12, new Decimal(100))
    setBuyableAmount('c', 13, new Decimal(100))
    setBuyableAmount('c', 21, new Decimal(100))
    setBuyableAmount('c', 22, new Decimal(100))
    player.a.unlocked = true
    player.d.unlocked = true
    player.c.unlocked = true
    player.v.unlocked = true
    player.g.pseudoUnlocks = ["41", "42", "43", "44"]
    player.a.pseudoUnlocks = ["51", "52", "53", "54"]
    player.d.pseudoUnlocks = ["51", "52", "53", "54"]
    player.v.pseudoUnlocks = ["31", "32", "33", "34"]
    player.g.generatorPower = new Decimal(1)
    player.a.alternatingCurrent = new Decimal(1)
    player.d.directCurrent = new Decimal(1)
    player.c.charge = new Decimal(1)
    player.v.voltage = new Decimal(1)

}
function fixInflation() {
    skipPart1()
    player.g.points = new Decimal(0)
    player.a.points = new Decimal(0)
    player.d.points = new Decimal(0)
    player.points = new Decimal(0)
    player.g.generatorPower = new Decimal(0)
    player.a.alternatingCurrent = new Decimal(0)
    player.d.directCurrent = new Decimal(0)
    player.c.charge = new Decimal(0)
    player.v.voltage = new Decimal(0)
    player.g.best = new Decimal(0)
    player.a.best = new Decimal(0)
    player.d.best = new Decimal(0)    
    player.c.best = new Decimal(0)    
    player.v.best = new Decimal(0)    

}
const metaDialogue = {
    // Gameplay dialogue
    introduction1: {
        onLoad() {player.m.inDialogue = true},
        loriText: () => "Hey there! @sNice to meet you! Welcome to the Meta Generator layer! @hI should introduce myself. @wMy name is Lori! @hI'm the one in charge in helping you making it to the Glorious Generator. By the way, what's your name?@n",
        command: 'Enter your name.',
        startImage: "resources/loriWink.png",
        canSend() {return true},
        onSend() {startDialogue('introduction2')}
    },
    introduction2: {
        onLoad() {player.name = player.m.dialogueInput; player.m.metaGenEffectsUnlocked = true},
        loriText: () => "Nice to meet you, " + player.name + "! @hNow, let's get started. On your first Meta Generator reset, you should have earned a Meta Token. Meta Tokens are the universal currency for this layer, you'll have to use lots of these in order to reach the Glorious Generator. I've unlocked a new tab, go spend one on unlocking a Meta Generator Power Effect!@n",
        command: 'Purchase a Meta Generator Power Effect upgrade.',
        startImage: "resources/loriWink.png",
        canSend() {return false},
        onSend() {}
    },
    introduction3: {
        onLoad() {player.m.inDialogue = false},
        loriText: () => "Great! @hIf you're not happy with your current effect, you can force a Meta Generator reset to refund your Meta Tokens. Go ahead and reach your second Meta Generator.@n",
        command: 'Reach 2 meta generators.',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    },
    metaUpgrades1: {
        onLoad() {player.m.inDialogue = true; player.m.metaUpgradesUnlocked = true},
        loriText: () => "Welcome back, " + player.name + "! @sGreat job getting your 2nd Meta Generator! @hLet's move on now. I've just unlocked a new tab for you: @wthe Meta Upgrades tab! @hThis tab contains special variants of upgrades that strengthens its normal counterpart. @sNot only that, you can buy them up to 5 times each! @hEach meta-upgrade's effect is based on the stats of their respective layer. Currently you only have access to the Generator Meta Upgrades. Go purchase the \"Overpowered Generators\" meta upgrade.@n",
        command: 'Purchase a Generator Meta Upgrade.',
        startImage: "resources/loriHappy.png",
        canSend() {return false},
        onSend() {}
    },
    metaUpgrades2: {
        onLoad() {player.m.inDialogue = false; player.m.metaUpgradesUnlocked = true},
        loriText: () => "Awesome! @hJust so you know, you can't refund your meta tokens once you've purchased a Meta Upgrade. Your next goal is to earn 25 meta tokens. It'll take a while though, so good luck! @n",
        command: 'Earn 25 Meta Tokens.',
        startImage: "resources/loriWink.png",
        canSend() {return true},
        onSend() {}
    },
    metaUpgrades3: {
        onLoad() {player.m.inDialogue = true; player.m.altDynMetaUpgradesUnlocked = true},
        loriText: () => "Hello again, " + player.name + "! @sLooks like you got the Meta Tokens! @hNow, you can choose to unlock another set of Meta Upgrades: Alternators or Dynamos. @wI've unlocked two new tabs, simply purchase a meta upgrade from either tab to permanently unlock it!@n",
        command: 'Purchase an Alternator or Dynamo Meta Upgrade.',
        startImage: "resources/loriWink.png",
        canSend() {return false},
        onSend() {}
    },
    metaUpgrades4A: {
        onLoad() {player.m.inDialogue = false; player.m.metaUpgSet1FirstUnlock = "alt"},
        loriText: () => "Alternators... @sgreat choice! @hNow, with this set of upgrades, along with the Generator Meta Upgrades and Meta Generator Effect Unlocks, go ahead and reach 7 Meta Generators. @wGood luck! @hBy the way, you don't need to earn a Meta Generator every time you perform a Meta Generator reset. @sYou can simply reach 1e34 charge and reset for meta tokens only!@n",
        command: 'Earn 7 Meta Generators.',
        startImage: "resources/loriSurprised.png",
        canSend() {return false},
        onSend() {}
    },
    metaUpgrades4B: {
        onLoad() {player.m.inDialogue = false; player.m.metaUpgSet1FirstUnlock = "dyn"},
        loriText: () => "Dynamos... @sgreat choice! @hNow, with this set of upgrades, along with the Generator Meta Upgrades and Meta Generator Effect Unlocks, go ahead and reach 7 Meta Generators. @wGood luck! @hBy the way, you don't need to earn a Meta Generator every time you perform a Meta Generator reset. @sYou can simply reach 1e34 charge and reset for meta tokens only!@n",
        command: 'Earn 7 Meta Generators.',
        startImage: "resources/loriSurprised.png",
        canSend() {return false},
        onSend() {}
    },
    metaMaintenance1: {
        onLoad() {player.m.inDialogue = true; player.m.metaMaintenanceUnlocked = "true"},
        loriText: () => "Yay! You made it! @cLooks like Meta Generators are starting to get harder to obtain though... @hGood thing you've unlocked a new feature: @wMeta Maintenance! @hThese maintenance challenges are more challenging, @showever you unlock powerful automation features and several great boosts once you complete them! @nAs usual, I've unlocked a new tab for you. There, you'll find the first Meta Maintenance challenge. @sNow, go and enter the first challenge!@n",
        command: 'Enter Generator Meta Maintenance I.',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    },
    metaMaintenance2: {
        onLoad() {player.m.inDialogue = false},
        loriText: () => "Alright, here we are! @hThings are getting tense... Don't worry, you'll get through this one as long as you have the right Meta Generator Power effects. @wGood luck!@n",
        command: 'Complete Generator Meta Maintenance I.',
        startImage: "resources/loriWink.png",
        canSend() {return false},
        onSend() {}
    },
    metaMaintenance3: {
        onLoad() {},
        loriText: () => "You figured it out! Great job! @hThe key to completing these challenges is getting the right Meta Generator Power effects. @wYou'll be relying lots on the \"Free ___\" and \"___ Requirement\" effects for these. @hI've unlocked 2 more Meta Maintenance challenges for you. @wYour next goal is to complete them all! @sHave fun figuring out the rest of the Meta Maintenance Challenges!@n",
        command: 'Complete all 3 Meta Maintenance challenges.',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    },
    metaMaintenance4: {
        onLoad() {player.m.bothSet1MetUpgsUnlocked = true},
        loriText: () => "You did it! @hThose ones were tricker to figure out, were they? It looks like you're accumulating lots more Meta Tokens thanks to Alternator Meta Maintenance I. I've just unlocked the other set of Meta Upgrades that you chose not to unlock earlier. @sI've also unlocked another set of Meta Maintenance challenges for you! @hNow, the next step is to reach 14 Meta Generators, and also complete the three new Meta Maintenance challenges. @wGood luck!@n",
        command: 'Reach 14 Meta Generators, and complete the new Meta Maintenance challenges.',
        startImage: "resources/loriWink.png",
        canSend() {return false},
        onSend() {}
    },
    halfUpdateEnd: {
        onLoad() {player.m.metaBatteriesUnlocked = true},
        loriText: () => "Let's go, " + player.name + "! Way to go! @hNow that you've completed the last of the Meta Maintenance Challenges... @wfor now... @hwe'll continue with... @cuh... @cThere's nothing here yet. I forgot to tell you that the Meta Batteries aren't ready yet. @hIt's alright, I'll get it ready eventually! @wYou'll just have to wait for now!@n",
        command: 'wait for pixel to release the second half of the update lmao',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    },
    /*
    metaBatteries1: {
        onLoad() {player.m.metaBatteriesUnlocked = true},
        loriText: () => "Let's go, " + player.name + "! Way to go! @hNow that you've completed the last of the Meta Maintenance Challenges... @wfor now... @hwe'll continue with the next mechanic... @sMeta Batteries! @hThese work differently than the usual batteries, in order to charge them, you need to enter a challenge. These challenges are VERY difficult, so you don't need to complete them right now. @sJust enter one of the Meta-Charger challenges to begin charging it!@n",
        command: 'Charge the Generator Meta Battery to 5%.',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    },
    metaBatteries2: {
        onLoad() {player.m.inDialogue = true},
        loriText: () => "Nice! @hYou can go ahead and exit the challenge now. @n",
        command: 'Stop charging the Generator Meta Battery.',
        startImage: "resources/loriSmile.png",
        canSend() {return false},
        onSend() {}
    }, 
    metaBatteries3: {
        onLoad() {player.m.inDialogue = false},
        loriText: () => "Alright, now that you've gotten the battery charged a bit, you've gotten some nice boosts! I've unlocked lots of things for you: another set of Meta Upgrades, two new Meta Maintenance challenges, and two new batteries! Your next goal is to charge all three batteries to 25%. @wHave fun!@n",
        command: 'Charge all three Meta Batteries to at least 25%.',
        startImage: "resources/loriHappy.png",
        canSend() {return false},
        onSend() {}
    }, */
}

function renderDialogue(dialogueid, step) {
    let ret = ""
    for (let i = 0; i < metaDialogue[dialogueid].loriText().length && i < step; i++) {
        if (metaDialogue[dialogueid].loriText().charAt(i) == "@") {
            i++
            if (metaDialogue[dialogueid].loriText().charAt(i) == "w") {
                player.m.currentImage = "resources/loriWink.png"
            } else if (metaDialogue[dialogueid].loriText().charAt(i) == "h") {
                player.m.currentImage = "resources/loriHappy.png"
            } else if (metaDialogue[dialogueid].loriText().charAt(i) == "s") {
                player.m.currentImage = "resources/loriSmile.png"
            } else if (metaDialogue[dialogueid].loriText().charAt(i) == "c") {
                player.m.currentImage = "resources/loriConfused.png"
            } else if (metaDialogue[dialogueid].loriText().charAt(i) == "p") {
                player.m.currentImage = "resources/loriSurprised.png"
            } else if (metaDialogue[dialogueid].loriText().charAt(i) == "n") {
                player.m.currentImage = "resources/loriNotSpeaking.png"
            }
        } else {
            ret = ret + metaDialogue[dialogueid].loriText().charAt(i)
        }
    }
    return ret
}
function startDialogue(dialogueid) {
    metaDialogue[dialogueid].onLoad()
    player.m.dialogueInput = ''
    player.m.dialogueStatus = dialogueid
    player.m.dialogueStep = 0
    player.m.currentImage = metaDialogue[dialogueid].startImage
}
function triggerDialogues() {
    if (player.m.dialogueStatus == "introduction2" && player.m.upgrades.length > 0) {
        startDialogue('introduction3')
    }
    if (player.m.dialogueStatus == "introduction3" && player.m.points.eq(2)) {
        startDialogue('metaUpgrades1')
    }
    if (player.m.dialogueStatus == "metaUpgrades1" && getBuyableAmount('m', 11).gte(1)) {
        startDialogue('metaUpgrades2')
    }
    if (player.m.dialogueStatus == "metaUpgrades2" && player.m.metaTokens.gte(25)) {
        startDialogue('metaUpgrades3')
    }
    if (player.m.dialogueStatus == "metaUpgrades3" && getBuyableAmount('m', 31).eq(1)) {
        startDialogue('metaUpgrades4A')
    }
    if (player.m.dialogueStatus == "metaUpgrades3" && getBuyableAmount('m', 51).eq(1)) {
        startDialogue('metaUpgrades4B')
    }
    if ((player.m.dialogueStatus == "metaUpgrades4A" || player.m.dialogueStatus == "metaUpgrades4B") && player.m.points.eq(7)) {
        startDialogue('metaMaintenance1')
    }
    if (player.m.dialogueStatus == "metaMaintenance1" && inChallenge('m', 11)) {
        startDialogue('metaMaintenance2')
    }
    if (player.m.dialogueStatus == "metaMaintenance2" && challengeCompletions('m', 11) == 1) {
        startDialogue('metaMaintenance3')
    }
    if (player.m.dialogueStatus == "metaMaintenance3" && challengeCompletions('m', 11) == 1 && challengeCompletions('m', 21) == 1 && challengeCompletions('m', 31) == 1) {
        startDialogue('metaMaintenance4')
    }
    if (player.m.dialogueStatus == "metaMaintenance4" && player.m.points.gte(14) && challengeCompletions('m', 12) >= 1 && challengeCompletions('m', 22) >= 1 && challengeCompletions('m', 32) >= 1) {
        startDialogue('halfUpdateEnd')
    } /*
    if (player.m.dialogueStatus == "metaBatteries1" && challengeCompletions('m', 61) >= 0.05) {
        startDialogue('metaBatteries2')
    }
    if (player.m.dialogueStatus == "metaBatteries2" && !inChallenge('m', 61)) {
        startDialogue('metaBatteries3')
    } */
}
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
        dialogueStep: 0,
        dialogueStatus: "introduction1",
        currentImage: "resources/loriWink.png",

        metaGenEffectsUnlocked: false,
        metaUpgradesUnlocked: false,
        altDynMetaUpgradesUnlocked: false,
        bothSet1MetUpgsUnlocked: false,
        metaMaintenanceUnlocked: false,
        metaBatteriesUnlocked: false,

        metaUpgSet1FirstUnlock: "",

        metaTokens: new Decimal(0),

        pseudoUnlocks: []
    }},

    componentStyles: {
        "buyable"() { return {'height': '150px', 'width': '150px'} },
    },
    requires: new Decimal(1e34) ,
    resource: "meta generators", 
    baseResource: "charge", 
    baseAmount() {return player.c.charge}, 
    type: "custom", 
    exponent() {
        let exp = new Decimal(1.75)
        return exp
    }, 
    canReset() {return player.c.charge.gte(1e34)},
    getResetGain() {
        if (player.c.charge.gte(tmp.m.getNextAt)) {
            return new Decimal(1)
        } else {
            return new Decimal(0)
        }
    },
    getNextAt(canMax=false) {
        let req = new Decimal(1e34)
        req = req.mul(new Decimal(2).pow(player.m.points.pow(tmp.m.exponent)))
        return req
    },
    prestigeButtonText() {
        return "Reset for +" + format(tmp.m.getResetGain, 0) + " meta generators and +" + format(tmp.m.getMetaTokens, 0) + " meta tokens<br><br>Next meta generator at " + format(tmp.m.getNextAt) + " charge"
    },
    hotkeys: [
        {key: "m", description: "M: Reset for meta-generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.m.unlocked}},
    ],
    onPrestige() {
        player.m.metaTokens = player.m.metaTokens.add(tmp.m.getMetaTokens)
        player.m.metaGenPower = new Decimal(0)
        if (player.m.dialogueStatus == "introduction1") startDialogue("introduction1")
    },

    tooltip() {return format(player.m.points, 0) + " meta generators (" + format(tmp.m.metaGenBase) + "^,  +" +  format(tmp.m.freeMetaGens) + ")"},

    metaGenBase() { 
        base = new Decimal(2)
        if (challengeCompletions('m', 12) >= 1) base = base.add(1)
        return base
    },
    freeMetaGens() {
        let gens = new Decimal(0)
        if (challengeCompletions('m', 22) >= 1) gens = gens.add(2)
        return gens
    },
    effect() {
        let effect = tmp.m.metaGenBase.pow(player.m.points.add(tmp.m.freeMetaGens)).sub(1)
        return effect
    },
    effectDescription() {
        return "which are generating " + format(tmp.m.effect) + " meta generator power per second"
    },
    getMetaTokens() {
        let tokens = new Decimal(1)
        tokens = tokens.add(player.m.metaGenPower.add(1).log(25).floor())
        tokens = tokens.mul(player.m.points.add(1))
        if (challengeCompletions('m', 21) >= 1) tokens = tokens.mul(3)
        if (challengeCompletions('m', 32) >= 1) tokens = tokens.mul(challengeEffect("m", 32))
        /* tokens = tokens.mul(challengeEffect("m", 61)[3]) */
        return tokens
    },

    clickables: {
        11: {
            title: ">",
            onClick() {
                metaDialogue[player.m.dialogueStatus].onSend()
            },
            canClick() {return metaDialogue[player.m.dialogueStatus].canSend()},
        },
        21: {
            title: "Respec meta generator effect upgrades",
            onClick() {
                for (let i = 0; i < player.m.upgrades.length; i++) {
                    player.m.metaTokens = player.m.metaTokens.add(new Decimal(player.m.upgrades.length - i).pow(3))
                }
                doReset('m', true)
                player.m.upgrades = []
            },
            canClick() {return true},
        },
    },
    
    microtabs: {
        metaTabs: {
            "Meta Generator Effect Unlocks": {
                content: [
                    "blank",
                    ["clickables", [2]],
                    "blank",
                    "upgrades",
                    "blank"
                ],
                unlocked() {return player.m.metaGenEffectsUnlocked}
            },
            "Meta Upgrades": {
                content: [
                    "blank",
                    ["microtabs", "metaUpgradeSubtabs"],
                    "blank"
                ],
                unlocked() {return player.m.metaUpgradesUnlocked}
            },
            "Meta Maintenance": {
                content: [
                    "blank",
                    ["challenges", [1, 2, 3, 4, 5]]
                ],
                unlocked() {return player.m.metaMaintenanceUnlocked}
            },
            "Meta Batteries": {
                content: [
                    "blank",
                    "blank",
                    "blank",
                    ["display-text", "Soon"],
                    "blank",
                    "blank",
                    "blank"
                ],
                unlocked() {return player.m.metaBatteriesUnlocked}
            }
        },
        metaUpgradeSubtabs: {
            "Generator Meta Upgrades": {
                content: [
                    "blank",
                    ["buyables", [1, 2]]
                ] 
            },
            "Alternator Meta Upgrades": {
                content: [
                    "blank",
                    ["buyables", [3, 4]]
                ],
                unlocked() {return (player.m.altDynMetaUpgradesUnlocked && (player.m.metaUpgSet1FirstUnlock == "" || player.m.metaUpgSet1FirstUnlock == "alt")) || player.m.bothSet1MetUpgsUnlocked}
            },
            "Dynamo Meta Upgrades": {
                content: [
                    "blank",
                    ["buyables", [5, 6]]
                ],
                unlocked() {return (player.m.altDynMetaUpgradesUnlocked && (player.m.metaUpgSet1FirstUnlock == "" || player.m.metaUpgSet1FirstUnlock == "dyn")) || player.m.bothSet1MetUpgsUnlocked}
            }
        }
    },

    infoboxes: {
        lori: {
            title: "Lori",
            body() {return " \
                    <br><img src=" + player.m.currentImage + " width='317' height='317'><br>\
                    <br><p>" + renderDialogue(player.m.dialogueStatus, Math.floor(player.m.dialogueStep / 1.2)) + "</p><br>\
                    <p>> " + metaDialogue[player.m.dialogueStatus].command + "</p><br>\
            "},
            unlocked() {return player.m.points.gte(1)}
        },
    },

    upgrades: {
        11: {
            title: "Generator Requirement",
            description() {return "Effect: /" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.pow(0.6)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        12: {
            title: "Generator Base",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(100)            
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        13: {
            title: "Free Generators",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(100)            
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        14: {
            title: "Generator Effectiveness",
            description() {return "Effect: +" + format(this.effect().mul(100)) + "%"},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(5).add(1).log(5).div(50)       
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        21: {
            title: "Alternator Requirement",
            description() {return "Effect: /" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.pow(0.5)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        22: {
            title: "Alternator Base",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(5).div(3)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        23: {
            title: "Free Alternators",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(5).div(2)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        24: {
            title: "Alternating Current",
            description() {return "Effect: x" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.pow(0.25).mul(2)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        31: {
            title: "Dynamo Requirement",
            description() {return "Effect: /" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.pow(0.5)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        32: {
            title: "Dynamo Base",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(5).div(3)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        33: {
            title: "Free Dynamos",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(5).div(2)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        34: {
            title: "Direct Current",
            description() {return "Effect: x" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.pow(0.25).mul(2)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        41: {
            title: "Charger Requirement",
            description() {return "Effect: /" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(1.5).div(2.5).pow(1.1)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        42: {
            title: "Charger Base",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(3).div(15)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        43: {
            title: "Free Chargers",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(3).div(10)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        44: {
            title: "Charge/Charge Limit",
            description() {return "Effect: x" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).div(10).pow(0.3)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        51: {
            title: "Amplifier Requirement",
            description() {return "Effect: /" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(1.5).div(2.5).pow(1.1)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        52: {
            title: "Amplifier Base",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(3).div(10)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        53: {
            title: "Free Amplifiers",
            description() {return "Effect: +" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).log(3).div(7.5)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
        54: {
            title: "Voltage",
            description() {return "Effect: x" + format(this.effect())},
            cost() {
                let cost = new Decimal(1)
                cost = cost.mul(new Decimal(player.m.upgrades.length).add(1).pow(3))
                return cost
            },
            effect() {
                return player.m.metaGenPower.add(1).div(5).pow(0.3)
            },
            currencyLayer: "m",
            currencyDisplayName: "meta tokens",
            currencyInternalName: "metaTokens",
        },
    },

    buyables: {
        // Generator Meta Upgrades (11 to 24)
        11: {
            title() {return "Overpowered Generators (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(3).pow(x.add(1))},
            display() {return "Multiplying <b>Stronger Generators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(16).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.g.freeGens.add(1).mul(tmp.g.generatorBase).pow(tmp.g.generatorEffectiveness)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        12: {
            title() {return "Hyperspeed Generators (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(64).pow(x.add(1))},
            display() {return "Multiplying <b>Faster Generators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).add(1)
                effect = effect.mul(tmp.g.freeGens.add(1).mul(tmp.g.generatorBase).pow(tmp.g.generatorEffectiveness)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        13: {
            title() {return "Generator Overload (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(3125).pow(x.add(1))},
            display() {return "Multiplying <b>More Generators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(15).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        14: {
            title() {return "Overpowered (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(16384).pow(x.add(1))},
            display() {return "Multiplying <b>Stronger Power</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(1).add(getBuyableAmount(this.layer, this.id).div(1000))
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        21: {
            title() {return "Perfect Generators (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(50).pow(x.add(1))},
            display() {return "Multiplying <b>Better Generators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(15).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        22: {
            title() {return "Self Generation IV (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(125).pow(x.add(1))},
            display() {return "Multiplying <b>Self Generation</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)).mul(getBuyableAmount(this.layer, this.id)).add(1)
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).add(1)
                effect = effect.mul(tmp.g.freeGens.add(tmp.g.generatorBase).pow(tmp.g.generatorEffectiveness)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                effect = effect.pow(0.3)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        23: {
            title() {return "Meta Point (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(300).pow(x.add(1))},
            display() {return "Multiplying <b>Base Point</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).add(1)
                effect = effect.mul(tmp.g.freeGens.add(tmp.g.generatorBase).pow(tmp.g.generatorEffectiveness)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        24: {
            title() {return "Meta-Multi Generation (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(1000).pow(x.add(1))},
            display() {return "Multiplying <b>Multi Generation</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).add(1)
                effect = effect.mul(tmp.g.freeGens.add(tmp.g.generatorBase).pow(tmp.g.generatorEffectiveness)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        // Alternator Meta Upgrades (31 to 44)
        31: {
            title() {return "Meta Wire (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(25).pow(x.add(1))},
            display() {return "Multiplying <b>Point Wire</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.a.freeAlts.add(1).mul(tmp.a.alternatorBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        32: {
            title() {return "Overpowered Alternators (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(45).pow(x.add(1))},
            display() {return "Multiplying <b>Stronger Alternators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(1.05).pow(getBuyableAmount(this.layer, this.id))
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        33: {
            title() {return "Meta Current (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(150).pow(x.add(1))},
            display() {return "Multiplying <b>Generative Current</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.a.freeAlts.add(1).mul(tmp.a.alternatorBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        34: {
            title() {return "Honorable Stacking (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(250).pow(x.add(1))},
            display() {return "Multiplying <b>Bonus Stacking</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(1.05).pow(getBuyableAmount(this.layer, this.id))
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        41: {
            title() {return "Perfect Alternators (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(75).pow(x.add(1))},
            display() {return "Multiplying <b>Better Alternators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(15).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        42: {
            title() {return "Alternator Overload (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(100).pow(x.add(1))},
            display() {return "Multiplying <b>More Alternators</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(10).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        43: {
            title() {return "Self Generation V (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(125).pow(x.add(1))},
            display() {return "Multiplying <b>Self Generation II</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.a.freeAlts.add(1).mul(tmp.a.alternatorBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                effect = effect.pow(0.1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        44: {
            title() {return "Meta-Multi Alternation (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(200).pow(x.add(1))},
            display() {return "Multiplying <b>Multi Alternation</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.a.freeAlts.add(1).mul(tmp.a.alternatorBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        // Dynamo Meta Upgrades (51 to 64)
        51: {
            title() {return "Meta Multiplier (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(25).pow(x.add(1))},
            display() {return "Multiplying <b>Direct Multiplier</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.d.freeDynas.add(1).mul(tmp.d.dynamoBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        52: {
            title() {return "Overpowered Dynamos (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(45).pow(x.add(1))},
            display() {return "Multiplying <b>Stronger Dynamos</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id))
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        53: {
            title() {return "Direct Metapower (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(150).pow(x.add(1))},
            display() {return "Multiplying <b>Direct Power</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.d.freeDynas.add(1).mul(tmp.d.dynamoBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        54: {
            title() {return "Can't Let Go (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(250).pow(x.add(1))},
            display() {return "Multiplying <b>Base After Base</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id))
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        61: {
            title() {return "Perfect Dynamos (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(75).pow(x.add(1))},
            display() {return "Multiplying <b>Better Dynamos</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(15).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        62: {
            title() {return "Dynamo Overload (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(100).pow(x.add(1))},
            display() {return "Multiplying <b>More Dynamos</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).div(10).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        63: {
            title() {return "It Was Only Now That I Realized (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(125).pow(x.add(1))},
            display() {return "Multiplying <b>Free Base</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(0.075).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        64: {
            title() {return "Dynamic Meta-Generation (" + format(getBuyableAmount(this.layer, this.id), 0) + "/5)"},
            cost(x) {return new Decimal(200).pow(x.add(1))},
            display() {return "Multiplying <b>Dynamic Generation</b>'s effect by " + format(this.effect()) + "<br> Cost: " + format(this.cost()) + " meta tokens"},
            canAfford() { return player.m.metaTokens.gte(this.cost()) },
            buy() {
                player.m.metaTokens = player.m.metaTokens.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = new Decimal(4).pow(getBuyableAmount(this.layer, this.id))
                effect = effect.mul(tmp.d.freeDynas.add(1).mul(tmp.d.dynamoBase)).mul(getBuyableAmount(this.layer, this.id)).add(1)
                return effect
            },
            purchaseLimit() {return new Decimal(5)}
        },
        // Amplifier Meta Upgrades (71 to 84)
    },

    challenges: {
        11: {
            name: "Generator Meta<br>Maintenance I",
            fullDisplay() {return " \
                Resets all generator content. Generators no longer generate generator power.<br><br> \
                Reach 11 generators to complete.<br> \
                Completing will grant the following boosts: <br> \
                Keep generator maintenance completions on reset<br> \
                You can buy max chargers up to your<br>best amount"
            },
            canComplete() {return player.g.points.gte(11)},
            onEnter() {player.g.upgrades = [31, 32]; if (hasUpgrade('g', 33)) {player.g.upgrades = [31, 32, 33]}; player.g.best = new Decimal(0)},
        },
        12: {
            name: "Generator Meta<br>Maintenance II",
            fullDisplay() {return " \
                Resets all generator content. All layers except for Generators and Meta Generators no longer function.<br><br> \
                Reach 35 alternators and dynamos to complete.<br> \
                Completing will grant the following boosts: <br> \
                +1 Meta Generator base <br> \
                Chargers/amplifiers reset nothing"
            },
            canComplete() {return player.a.points.gte(35) && player.d.points.gte(35)},
            onEnter() {player.g.upgrades = [31, 32]; if (hasUpgrade('g', 33)) {player.g.upgrades = [31, 32, 33]}; player.g.best = new Decimal(0)},
            unlocked() {return challengeCompletions('m', 21) >= 1 && challengeCompletions('m', 31) >= 1}
        },
        21: {
            name: "Alternator Meta<br>Maintenance I",
            fullDisplay() {return " \
                Resets all alternator content. Alternator base removes free alternators. (minimum 0)<br><br> \
                Reach 1e182 AC to complete.<br> \
                Completing will grant the following boosts: <br> \
                x3 Meta Token gain <br> \
                Keep alternator/dynamo maintenance dcompletions on reset"
            },
            canComplete() {return player.a.alternatingCurrent.gte(1e182)},
            onEnter() {player.a.upgrades = [31]; player.a.milestones = []; player.a.best = new Decimal(0)},
            unlocked() {return challengeCompletions('m', 11) >= 1}
        },
        22: {
            name: "Alternator Meta<br>Maintenance II",
            fullDisplay() {return " \
                Resets all alternator content. You cannot reset for any type of generator.<br><br> \
                Reach 1e12 generator power to complete.<br> \
                Completing will grant the following boosts: <br> \
                +2 Free Meta Generators <br> \
                Keep battery percentages on reset<br> \
                You can buy max amplifiers up to<br>your best amount"
            },
            canComplete() {return player.g.generatorPower.gte(1e12)},
            onEnter() {player.a.upgrades = [31]; player.a.milestones = []; player.a.best = new Decimal(0)},
            unlocked() {return challengeCompletions('m', 21) >= 1 && challengeCompletions('m', 31) >= 1}
        },
        31: {
            name: "Dynamo Meta<br>Maintenance I",
            fullDisplay() {return " \
                Resets all dynamo content. Dynamos produce AC, and vice versa. Generator requirement also scales much faster.<br><br> \
                Reach 5 chargers to complete.<br> \
                Completing will grant the following boosts: <br> \
                +1.5 Free Chargers <br>\
                +0.5 Charger Base <br>"
            },
            canComplete() {return player.c.points.gte(5)},
            onEnter() {player.d.upgrades = [31]; player.d.milestones = []; player.d.best = new Decimal(0)},
            unlocked() {return challengeCompletions('m', 11) >= 1}
        },
        32: {
            name: "Dynamo Meta<br>Maintenance II",
            fullDisplay() {return " \
                Resets all dynamo content and Dynamo Maintenance completions. Free dynamos reduce the dynamo base (minimum 1).<br><br> \
                Reach 1e242 DC to complete.<br> \
                Completing will grant the following boosts: <br> \
                Meta Generator Power boosts<br>Meta Token gain (x" + format(this.rewardEffect()) + ") <br>"
            },
            canComplete() {return player.d.directCurrent.gte(1e242)},
            onEnter() {player.d.upgrades = [31]; player.d.milestones = []; player.d.best = new Decimal(0); player.c.challenges[12] = 0},
            unlocked() {return challengeCompletions('m', 21) >= 1 && challengeCompletions('m', 31) >= 1},
            rewardEffect() {
                return player.m.metaGenPower.add(1).pow(0.075)
            }
        },

        // Batteries
       /* 61: {
            name() {return "Generator Meta Battery<br>(" + new Decimal(100).mul(challengeCompletions('m', this.id)) + "/100%)"},
            fullDisplay() {return " \
                Resets all generator content. All generator stats are square rooted.<br><br> \
                Next % at " + (challengeCompletions(this.layer, this.id) != 1 ? new Decimal(1e30).pow(challengeCompletions(this.layer, this.id) * 100 + 1) : "Infinity") + " generator power <br> \
                Completing will grant the following boosts: <br> \
                All Generator content is no longer reset<br><br> \
                Effects: <br>\
                +" + format(challengeEffect(this.layer, this.id)[0]) + " Free Generators and Generator Base<br> \
                /" + format(challengeEffect(this.layer, this.id)[1]) + " Generator Requirement<br>\
                +" + format(challengeEffect(this.layer, this.id)[2].mul(100)) + "% Generator Effectiveness<br>\
                x" + format(challengeEffect(this.layer, this.id)[3]) + " Meta Tokens"

            },
            canComplete() {return player.g.generatorPower.gte("1e3000")},
            onEnter() {player.g.upgrades = [31, 32, 33]},
            unlocked() {return true},
            style() {return {
                "width": "350px",
                "height": "350px",
                "border-color": "#250045",
                "background-color": "rgba(0, 0, 0, 0)",
                "color": "#5d0ba3",
                "text-shadow": "0px 0px 10px #5d0ba3",
                "box-shadow": "0px 0px 10px #5d0ba3"
            }},
            rewardEffect() {
                return [
                    new Decimal(15).mul(challengeCompletions(this.layer, this.id)),
                    new Decimal(1e25).pow(challengeCompletions(this.layer, this.id)),
                    new Decimal(0.10).mul(new Decimal(challengeCompletions(this.layer, this.id))),
                    new Decimal(1.05).pow(new Decimal(challengeCompletions(this.layer, this.id)).mul(100))
                ]
            }
        }, */
    },

    tabFormat: [

        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.m.metaGenPower) + " meta generator power"],
        ["display-text", () => "You have " + format(player.m.metaTokens, 0) + " meta token(s)"],
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

        () => {if (player.m.points.gte(1)) {return ['text-input', 'dialogueInput', { 
            color: "var(--color)", 
            width: "400px",
            "font-family": "Inconsolata, monospace",
            "font-size": "16px",
            border: "2px solid #ffffff17", 
            background: "var(--background)", 
        }]}},
        () => {if (player.m.points.gte(1)) {return ["clickables", [1]]}},
        "blank",
        () => {if (player.m.metaGenEffectsUnlocked) {return ["microtabs", "metaTabs"]}},

    ],
    update(diff) {
        player.m.metaGenPower = player.m.metaGenPower.add(tmp.m.effect.mul(diff))
        if (player.m.dialogueStep < metaDialogue[player.m.dialogueStatus].loriText().length * 1.2) {
            player.m.dialogueStep++
        }
        /* if (inChallenge('m', 61)) {
            if (player.g.generatorPower.gte(new Decimal(1e30).pow(challengeCompletions("m", 61) * 100 + 1)) && challengeCompletions("m", 61) < 1) {
                player.m.challenges[61] += 0.01
            }
        } */
        triggerDialogues()
    }
})
/* addLayer("gallery", {
    color: "#4A148C",
    symbol: "GA", 
    row: "side",
    tooltip() {return "Gallery"},
    unlocked() {return player.m.points.gte(1)},
    startData() {return {
        unlocked: false
    }},
    baseResource: "meta generators", 
    requires: new Decimal(1),
    microtabs: {
        gallerySubtabs: {
            "Fanart!!!": [

            ],
            "funny stuff (there isnt that many in here)": [
                
            ]
        }
    },
    tabFormat: [
        ["raw-html", `
            <h1>Prestigious Saplings: Glorious Generators<h1><br>
            <h2>The Gallery</h2><br><br>
            <img src="resources/gallery/loriRef.png" width='500'><br>
            <p>Lori's reference sheet</p>
        `],

    ]
}) */