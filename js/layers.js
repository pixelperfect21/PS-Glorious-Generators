addLayer("achievements", {
    name: "achievements", 
    color: "#FFFF00",
    symbol: "A", 
    row: "side",
    resource: "achievements",
    layerShown(){return true},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        achievementPower: new Decimal(0),
    }},
    type: "none",

    achievementAmount() {
        let amount = player.g.points.add(player.achievements.points)
        return amount
    },
    achBase() {
        let base = new Decimal(2)
        if (player.c.points.gte(1)) {
            base = base.add(player.a.points.pow(0.5))
        }
        if (player.v.points.gte(1)) {
            base = base.add(player.d.points.pow(0.5))
        }
        return base
    },
    freeAchs() {
        let achs = new Decimal(0)
        if (player.c.points.gte(1)) {
            achs = achs.add(player.c.points.pow(0.5))
        }
        if (player.v.points.gte(1)) {
            achs = achs.mul(player.v.points.pow(0.5).add(1))
        }
        return achs
    },
    achievementEffectiveness() {
        let effect = new Decimal(1)
        if (player.m.points.gte(1)) {
            effect = effect.add(player.m.points.pow(0.5).div(50))
        }
        return effect
    },
    effect() {
        let effect = tmp.achievements.achBase.pow(tmp.achievements.achievementAmount.mul(tmp.achievements.achievementEffectiveness).add(tmp.achievements.freeAchs)).sub(1)
        return effect
    },

    achievements: {
        11: {
            name() {return "This Doesn't Look Glorious"},
            tooltip() {return "Earn a Generator."},
            done() {return player.g.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        12: {
            name() {return "Awesome Upgrade"},
            tooltip() {return "Purchase the <b>Stronger Generators</b> generator upgrade."},
            done() {return hasUpgrade('g', 11)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        13: {
            name() {return "Powerful"},
            tooltip() {return "Purchase the <b>Stronger Power</b> generator upgrade."},
            done() {return hasUpgrade('g', 14)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        14: {
            name() {return "A Row 3 Reset??? This Early???"},
            tooltip() {return "Earn an Alternator."},
            done() {return player.a.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        15: {
            name() {return "Aren't These Obsolete Now?"},
            tooltip() {return "Earn a Dynamo."},
            done() {return player.d.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        21: {
            name() {return "Less Destructive Alternators"},
            tooltip() {return "Reach 7 alternators."},
            done() {return player.a.points.gte(7)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        22: {
            name() {return "Less Destructive Dynamos"},
            tooltip() {return "Reach 7 dynamos."},
            done() {return player.d.points.gte(7)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        23: {
            name() {return "That One Rock Band"},
            tooltip() {return "Unlock both Alternators and Dynamos."},
            done() {return player.a.points.gte(1) && player.d.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        24: {
            name() {return "Inflation... Sorta"},
            tooltip() {return "Purchase either <b>Direct Alternation</b> or <b>Alternate Direction</b>."},
            done() {return hasUpgrade('a', 31) || hasUpgrade('d', 31)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        25: {
            name() {return "Powerful Yet Weak"},
            tooltip() {return "Earn a Charger."},
            done() {return player.c.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        31: {
            name() {return "You Can WHAT Generator Upgrades?"},
            tooltip() {return "Complete Generator Maintenance once."},
            done() {return challengeCompletions('c', 11) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        32: {
            name() {return "Alternators Are Awesome!!!"},
            tooltip() {return "Purchase the <b>Maintenance Boost</b> alternator upgrade."},
            done() {return hasUpgrade('a', 44)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        33: {
            name() {return "I Told You Already, These Are Obsolete"},
            tooltip() {return "Complete Dynamo Maintenance once."},
            done() {return challengeCompletions('c', 12) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        34: {
            name() {return "No Super Generators?"},
            tooltip() {return "Reach 100 generators."},
            done() {return player.g.points.gte(100)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        35: {
            name() {return "Alternators Are Terrible"},
            tooltip() {return "Complete Alternator Maintenance once."},
            done() {return challengeCompletions('c', 13) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        41: {
            name() {return "50% More Effective"},
            tooltip() {return "Reach 150% Generator Effectiveness"},
            done() {return tmp.g.generatorEffectiveness.gte(1.5)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        42: {
            name() {return "Finally!"},
            tooltip() {return "Complete Generator Maintenance 10 times."},
            done() {return challengeCompletions('c', 11) >= 10},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        43: {
            name() {return "Wait, I Wanna Earn More Chargers!"},
            tooltip() {return "Earn an Amplifier."},
            done() {return player.v.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        44: {
            name() {return "MORE PSEUDO UPGRADES!!!"},
            tooltip() {return "Complete Dynamo Maintenance 10 times."},
            done() {return challengeCompletions('c', 12) >= 10},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        45: {
            name() {return "Maintenance Instead of THIS?"},
            tooltip() {return "Unlock Batteries."},
            done() {return player.v.points.gte(10)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        51: {
            name() {return "OH MY GOD FINALLY"},
            tooltip() {return "Complete Alternator Maintenance 10 times."},
            done() {return challengeCompletions('c', 13) >= 10},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        52: {
            name() {return "Fully Charged"},
            tooltip() {return "Fully charge the Dynamo battery."},
            done() {return getBuyableAmount('c', 13).gte(100)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        53: {
            name() {return "Hospitalized"},
            tooltip() {return "Have an Amplifier voltage of 1e9V."},
            done() {return player.v.voltage.gte(1e9)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        54: {
            name() {return "Fully Charged, Again"},
            tooltip() {return "Fully charge the Charger battery."},
            done() {return getBuyableAmount('c', 22).gte(100)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        55: {
            name() {return "This Still Doesn't Look Glorious"},
            tooltip() {return "Earn a Meta-Generator."},
            done() {return player.m.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)}
        },
        61: {
            name() {return "There Is No Metaverse"},
            tooltip() {return "Purchase a Meta Upgrade."},
            done() {return getBuyableAmount('m', 11).gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        62: {
            name() {return "Super Effective"},
            tooltip() {return "Have 3 or more Meta Generator Power effects active at the same time."},
            done() {return player.m.upgrades.length >= 3},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        63: {
            name() {return "Not Again..."},
            tooltip() {return "Complete a Meta Maintenance challenge."},
            done() {return challengeCompletions('m', 11) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        64: {
            name() {return "Another Set"},
            tooltip() {return "Complete the first three Meta Maintenance challenges."},
            done() {return challengeCompletions('m', 11) >= 1 && challengeCompletions('m', 21) >= 1 && challengeCompletions('m', 31) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        65: {
            name() {return "Metamania"},
            tooltip() {return "Have 6 or more Meta Generator Power effects active at the same time."},
            done() {return player.m.upgrades.length >= 6},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        71: {
            name() {return "Maximized"},
            tooltip() {return "Buy <b>Overpowered Generators</b> 5 times."},
            done() {return getBuyableAmount('m', 11).gte(5)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        72: {
            name() {return "Supertoken"},
            tooltip() {return "Have more than 1000 Meta Tokens at a time."},
            done() {return player.m.metaTokens.gte(1000)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        73: {
            name() {return "Super Dynamo"},
            tooltip() {return "Reach 100 dynamos."},
            done() {return player.d.points.gte(100)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        74: {
            name() {return "Conquered Set"},
            tooltip() {return "Complete the second three Meta Maintenance challenges."},
            done() {return challengeCompletions('m', 12) >= 1 && challengeCompletions('m', 22) >= 1 && challengeCompletions('m', 32) >= 1},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        75: {
            name() {return "Meta Madness"},
            tooltip() {return "Have 10 or more Meta Generator Power effects active at the same time."},
            done() {return player.m.upgrades.length >= 10},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        
        
        /* 81: {
            name() {return "Meta Charge"},
            tooltip() {return "Charge the Generator Meta Battery to 1%."},
            done() {return challengeCompletions('m', 61) > 0},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        }, 
        82: {
            name() {return "Meta Voltage?"},
            tooltip() {return "Purchase an Amplifier Meta Upgrade."},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        83: {
            name() {return "You're Mature, Right?"},
            tooltip() {return "Purchase 13 Meta Generator Power effects, and form them into a... funny shape."},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        84: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        85: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        91: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        92: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        93: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        94: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        95: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        }, 
        101: {
            name() {return "Finally, It's Glorious!"},
            tooltip() {return "Earn a Glorious Generator."},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        102: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        103: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        104: {
            name() {return ""},
            tooltip() {return ""},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        },
        105: {
            name() {return "Goodbye, Generators!"},
            tooltip() {return "Beat the game."},
            done() {return false},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return player.m.points.gte(1)}
        }, */
    },

    update(diff) {
        player.achievements.achievementPower = player.achievements.achievementPower.add(tmp.achievements.effect.mul(diff))
    },
    tabFormat: [
        "main-display",
        "blank",
        ['display-text', () => {
            return "Generators and achievements are generating " + format(tmp.achievements.effect) + " achievement power per second"
        }],
        ['display-text', () => {
            if (player.a.points.gte(1) || player.d.points.gte(1)) {
                return "Alternators and dynamos add " + format(tmp.achievements.achBase.sub(2)) + " to the achievement base (Starts at 2.00)"
            }
        }],
        ['display-text', () => {
            if (player.c.points.gte(1)) {
                return "Chargers and amplifiers are granting " + format(tmp.achievements.freeAchs) + " free achievements"
            }
        }],
        ['display-text', () => {
            if (player.m.points.gte(1)) {
                return "Meta-Generators are increasing achievement effectiveness by " + format(tmp.achievements.achievementEffectiveness.mul(100)) + "%"
            }
        }],
        ['display-text', () => "You have " + format(player.achievements.achievementPower) + " achievement power, which does absolutely nothing :)"],
        "blank",
        "achievements",
    ]
})
addLayer("g", {
    name: "generators", 
    color: "#1B5E20",
    symbol: "G", 
    position: 0,
    row: 0,
    layerShown(){return true},

    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        generatorPower: new Decimal(0),
        best: new Decimal(0),

        pseudoUnlocks: []
    }},

    requires() {return inChallenge('m', 22) ? Decimal.dInf : new Decimal(10)}, 
    resource: "generators", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.5)
        if (player.g.points.gte(10)) exp = new Decimal(1.6)
        if (player.g.points.gte(100)) exp = new Decimal(1.625)
        if (player.g.points.gte(200)) exp = new Decimal(1.645)
        if (inChallenge('m', 31)) exp = new Decimal(2)
        return exp
    }, 
    hotkeys: [
        {key: "g", description: "G: Reset for generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    onPrestige() {
        if (!tmp.g.resetsNothing) {
            player.g.generatorPower = new Decimal(0)
        }
    },

    tooltip() {return format(player.g.points, 0) + " generators (" + format(tmp.g.generatorBase) + "^,  +" +  format(tmp.g.freeGens) + ", " + format(tmp.g.generatorEffectiveness.mul(100)) + "%)"},

    resetsNothing() {return hasMilestone('a', 0) || hasMilestone('d', 0)},
    canBuyMax() {return hasMilestone('a', 0) || hasMilestone('d', 0)},
    autoPrestige() {return hasUpgrade('a', 31) || hasUpgrade('d', 31)},

    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('m', 11)) mult = mult.div(upgradeEffect('m', 11))
        if (inChallenge('m', 61)) mult = mult.pow(2)
        /* mult = mult.div(challengeEffect('m', 61)[1]) */
        return mult
    },
    generatorBase() {
        let base = new Decimal(2)
        if (!inChallenge('c', 11)) {
            if (hasUpgrade('g', 21)) base = base.add(upgradeEffect('g', 21))
            if (hasUpgrade('a', 23)) base = base.add(upgradeEffect('a', 23))
            if (hasUpgrade('d', 42)) base = base.add(upgradeEffect('d', 42))
            if (hasUpgrade('v', 21)) base = base.add(upgradeEffect('v', 21))
        }
        if (player.a.alternatingCurrent.gte(1)) base = base.add(tmp.a.altCurEffect)
        base = base.add(buyableEffect('c', 11))
        if (hasUpgrade('m', 12)) base = base.add(upgradeEffect('m', 12))
        /* if (inChallenge('m', 61)) base = base.pow(0.5)
        base = base.add(challengeEffect('m', 61)[0]) */
        return base
    },
    freeGens() {
        let gens = new Decimal(0)
        if (!inChallenge('c', 11)) {
            if (hasUpgrade('g', 13)) gens = gens.add(upgradeEffect('g', 13))
            if (hasUpgrade('a', 42)) gens = gens.add(upgradeEffect('a', 42))
        }
        if (player.d.directCurrent.gte(1)) gens = gens.add(tmp.d.dirCurEffect)
        gens = gens.add(buyableEffect('c', 11))
        if (hasUpgrade('m', 13)) gens = gens.add(upgradeEffect('m', 13))
        /* if (inChallenge('m', 61)) gens = gens.pow(0.5)
        gens = gens.add(challengeEffect('m', 61)[0]) */
        return gens
    },
    effect() {
        let effect = tmp.g.generatorBase.pow(player.g.points.mul(tmp.g.generatorEffectiveness).add(tmp.g.freeGens)).sub(1)
        if (!inChallenge('c', 11)) {
            if (hasUpgrade('g', 12)) effect = effect.mul(upgradeEffect('g', 12))
            if (hasUpgrade('a', 23)) effect = effect.mul(upgradeEffect('a', 23))
            if (hasUpgrade('g', 43)) effect = effect.mul(upgradeEffect('g', 43))
        }
    	effect = effect.mul(tmp.v.voltageEffect)
        if (inChallenge('m', 11)) {
            effect = new Decimal(0)
        }
        return effect
    },
    effectDescription() {
        return "which are generating " + format(tmp.g.effect) + " generator power per second"
    },
    genPowEffect() {
        let effect = player.g.generatorPower.pow(0.25).add(1)
        if (!inChallenge('c', 11)) {
            if (hasUpgrade('g', 14)) effect = effect.pow(upgradeEffect('g', 14))
        }
        return effect
    },
    generatorEffectiveness() {
        let mult = new Decimal(1)
        mult = mult.add(tmp.c.chargeEffect)
        if (hasUpgrade('a', 41)) mult = mult.add(upgradeEffect('a', 41))
        if (hasUpgrade('d', 41)) mult = mult.add(upgradeEffect('d', 41))
        if (hasUpgrade('d', 44)) mult = mult.add(upgradeEffect('d', 44))
        if (hasUpgrade('v', 11)) mult = mult.add(upgradeEffect('v', 11))
        if (hasUpgrade('v', 24)) mult = mult.add(upgradeEffect('v', 24))
        if (challengeCompletions('c', 11) > 0) mult = mult.add(challengeEffect('c', 11))
        if (hasUpgrade('m', 14)) mult = mult.add(upgradeEffect('m', 14))
        /* if (inChallenge('m', 61)) mult = mult.pow(0.5)
        mult = mult.add(challengeEffect('m', 61)[2]) */
        return mult
    },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keptUpgrades = []
        if (hasUpgrade(this.layer, 31)) keptUpgrades.push(31)
        if (hasUpgrade(this.layer, 32)) keptUpgrades.push(32)
        if (hasUpgrade(this.layer, 33)) keptUpgrades.push(33)
        if (resettingLayer == "a") {
            if (hasMilestone('a', 1)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('a', 2)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
        }
        if (resettingLayer == "d") {
            if (hasMilestone('d', 1)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('d', 2)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
        }
        if (resettingLayer == "c") {
            if (hasMilestone('c', 1)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('c', 2)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
            if (hasMilestone('c', 5)) {
                if (hasUpgrade(this.layer, 41)) keptUpgrades.push(41)
                if (hasUpgrade(this.layer, 42)) keptUpgrades.push(42)
                if (hasUpgrade(this.layer, 43)) keptUpgrades.push(43)
                if (hasUpgrade(this.layer, 44)) keptUpgrades.push(44)
            }
        }
        if (resettingLayer == "v") {
            if (hasMilestone('v', 0)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('v', 1)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
            if (hasMilestone('v', 2)) {
                if (hasUpgrade(this.layer, 41)) keptUpgrades.push(41)
                if (hasUpgrade(this.layer, 42)) keptUpgrades.push(42)
                if (hasUpgrade(this.layer, 43)) keptUpgrades.push(43)
                if (hasUpgrade(this.layer, 44)) keptUpgrades.push(44)
            }
        }
      
        let keep = [];
        keep.push("best")

        layerDataReset(this.layer, keep);
      
        player[this.layer].upgrades.push(...keptUpgrades)
    },

    upgrades: {
        11: {
            title: "Stronger Generators",
            description() {return "Generators multiply point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(3),
            effect() {
                let effect = player.g.points.pow(0.9).add(1)
                effect = effect.mul(buyableEffect('m', 11))
                return effect
            },
            unlocked() {return true}
        },
        12: {
            title: "Faster Generators",
            description() {return "Points multiply generator power gain. Effect: x" + format(this.effect())},
            cost: new Decimal(5),
            effect() {
                let effect = player.points.add(1).log(2).add(1)
                effect = effect.mul(buyableEffect('m', 12))
                return effect
            },
            unlocked() {return hasUpgrade('g', 11)}
        },
        13: {
            title: "More Generators",
            description() {return "Earn free generators based on generator power. Effect: +" + format(this.effect())},
            cost: new Decimal(7),
            effect() {
                let effect = player.g.generatorPower.add(1).pow(0.1).log(10).add(1)
                effect = effect.mul(buyableEffect('m', 13))
                return effect
            },
            unlocked() {return hasUpgrade('g', 12)}
        },
        14: {
            title: "Stronger Power",
            description() {return "Generator power effect is squared. Effect: ^" + format(this.effect())},
            cost: new Decimal(9),
            effect() {
                let effect = new Decimal(2)
                effect = effect.mul(buyableEffect('m', 14))
                return effect
            },
            unlocked() {return hasUpgrade('g', 13)}
        },
        21: {
            title: "Better Generators",
            description() {return "Generator power adds to the generator base. Effect: +" + format(this.effect())},
            cost: new Decimal(250),
            effect() {
                let effect = player.g.generatorPower.add(1).log10().div(5)
                effect = effect.mul(buyableEffect('m', 21))
                return effect
            },
            unlocked() {return hasUpgrade('g', 11)},
            currencyLayer: "g",
            currencyDisplayName: "generator power",
            currencyInternalName: "generatorPower",
        },
        22: {
            title: "Self Generation",
            description() {return "Points multiply themselves. Effect: x" + format(this.effect())},
            cost: new Decimal(1000),
            effect() {
                let effect = player.points.add(1).log10().add(1)                
                effect = effect.mul(buyableEffect('m', 22))
                return effect
            },
            unlocked() {return hasUpgrade('g', 21)},
            currencyLayer: "g",
            currencyDisplayName: "generator power",
            currencyInternalName: "generatorPower",
        },
        23: {
            title: "Base Point",
            description() {return "Generator base multiplies point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(25000),
            effect() {
                let effect = tmp.g.generatorBase.pow(2)
                effect = effect.mul(buyableEffect('m', 23))
                return effect
            },
            unlocked() {return hasUpgrade('g', 22)},
            currencyLayer: "g",
            currencyDisplayName: "generator power",
            currencyInternalName: "generatorPower",
        },
        24: {
            title: "Multi Generation",
            description() {return "Generator effect multiplies points at a reduced rate. Effect: x" + format(this.effect())},
            cost: new Decimal(5000000),
            effect() {
                let effect = tmp.g.effect.pow(0.25).add(1)
                effect = effect.mul(buyableEffect('m', 24))
                return effect
            },
            unlocked() {return hasUpgrade('g', 23)},
            currencyLayer: "g",
            currencyDisplayName: "generator power",
            currencyInternalName: "generatorPower",
        },
        31: {
            title: "Alternating Current!",
            description() {return "Unlock the Alternator layer. Alternators produce AC which increases the generator base."},
            cost() {
                let cost = new Decimal(10)
                if (hasUpgrade('g', 32)) cost = new Decimal(20)
                return cost
            },
            unlocked() {return hasUpgrade('g', 14) || hasUpgrade('g', 31) || hasUpgrade('g', 32)},
            style: {"width": "160px", "height": "160px"}
        },
        32: {
            title: "Direct Current!",
            description() {return "Unlock the Dynamo layer. Dynamos produce DC which provides more free generators."},
            cost() {
                let cost = new Decimal(10)
                if (hasUpgrade('g', 31)) cost = new Decimal(20)
                return cost
            },
            unlocked() {return hasUpgrade('g', 14) || hasUpgrade('g', 31) || hasUpgrade('g', 32)},
            style: {"width": "160px", "height": "160px"}
        },
        33: {
            title: "Voltage!",
            description() {return "Unlock the Amplifier layer. Amplifiers produce Voltage which greatly speeds up point, generator power, AC, and DC generation."},
            cost: new Decimal(1e145),
            unlocked() {return hasUpgrade('g', 44)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
            style: {"width": "160px", "height": "160px"}
        },
        41: {
            fullDisplay() { 
                if (!player.g.pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 50 generators within <b>Generator Maintenance</b></p> \
                "} else {return " \
                    <h3>Charge Power</h3> \
                    <p>Generator power adds to the charger base. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 142 generators</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 5)},
            pseudoReq() {return inChallenge('c', 11) && player.g.points.gte(50)},
            canAfford() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.g.points.gte(142)
                }
            },
            onPurchase() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    player.g.pseudoUnlocks.push(this.id)
                    player.g.upgrades.pop()
                } else {
                    player.g.points = player.g.points.sub(142)
                }
            },
            effect() {
                let effect = player.g.generatorPower.add(1).log10().add(1).log10().div(25)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        42: {
            fullDisplay() { 
                if (!player.g.pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 232 free generators</p> \
                "} else {return " \
                    <h3>Multi Generation II</h3> \
                    <p>Generator effect multiplies DC gain at a reduced rate. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e1303 generator power</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 5)},
            pseudoReq() {return tmp.g.freeGens.gte(232)},
            canAfford() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.g.generatorPower.gte("1e1303")
                }
            },
            onPurchase() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    player.g.pseudoUnlocks.push(this.id)
                    player.g.upgrades.pop()
                } else {
                    player.g.generatorPower = player.g.generatorPower.sub("1e1303")
                }
            },
            effect() {
                let effect = tmp.g.effect.add(1).log10().add(1).log10().pow(10).add(1)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        43: {
            fullDisplay() { 
                if (!player.g.pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e370 points within <b>Dynamo Maintenance</b></p> \
                "} else {return " \
                    <h3>Direct Multiplier II</h3> \
                    <p>DC multiplies generator power generation. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 155 generators</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 5)},
            pseudoReq() {return inChallenge('c', 12) && player.points.gte("1e370")},
            canAfford() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.g.points.gte(155)
                }
            },
            onPurchase() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    player.g.pseudoUnlocks.push(this.id)
                    player.g.upgrades.pop()
                } else {
                    player.g.points = player.g.points.sub(155)
                }
            },
            effect() {
                let effect = player.d.directCurrent.add(1).log(5).pow(2).add(1)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        44: {
            fullDisplay() { 
                if (!player.g.pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 180% Generator Effectiveness</p> \
                "} else {return " \
                    <h3>More Chargers</h3> \
                    <p>Earn free chargers based on charge. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e1420 generator power</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 5)},
            pseudoReq() {return tmp.g.generatorEffectiveness.gte(1.8)},
            canAfford() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.g.generatorPower.gte("1e1420")
                }
            },
            onPurchase() {
                if (!player.g.pseudoUnlocks.includes(this.id)) {
                    player.g.pseudoUnlocks.push(this.id)
                    player.g.upgrades.pop()
                } else {
                    player.g.generatorPower = player.g.generatorPower.sub("1e1420")
                }
            },
            effect() {
                let effect = player.c.charge.add(1).log10().div(10)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.g.generatorPower) + " generator power, which is multiplying point gain by " + format(tmp.g.genPowEffect)],
        "blank",
        ["display-text", () => "Your generator base is " + format(tmp.g.generatorBase)],
        ["display-text", () => {
                if (tmp.g.freeGens.gt(0)) {
                    return "You have " + format(tmp.g.freeGens) + " free generators"
                } else {
                    return ""
                }
            }
        ],
        ["display-text", () => {
            if (tmp.g.generatorEffectiveness.gt(1)) {
                return "Your generator effectiveness is " + format(tmp.g.generatorEffectiveness.mul(100)) + "%"
            } else {
                return ""
            }
        }
        ],
        "blank",

        "upgrades"

    ],
    update(diff) {
        player.g.generatorPower = player.g.generatorPower.add(tmp.g.effect.mul(diff))
    }
})
addLayer("a", {
    branches: ['g'],
    name: "alternators", 
    color: "#B71C1C",
    symbol: "A", 
    position: 0,
    row: 1,
    displayRow: 2,
    layerShown(){return hasUpgrade('g', 31) || player.a.unlocked},

    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        alternatingCurrent: new Decimal(0),
        best: new Decimal(0),
        unlockOrder: 1,

        pseudoUnlocks: []
    }},
    increaseUnlockOrder: ["d"],
    requires() {
        if (player.a.unlockOrder == 2) {
            return new Decimal(1e36)
        } else {
            return inChallenge('m', 22) ? Decimal.dInf : new Decimal(1e12)
        }
    }, 
    resource: "alternators", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.5)
        if (player.a.unlockOrder == 2) exp = new Decimal(2)
        if (player.a.points.gte(11)) exp = exp.add(player.a.points.add(1).slog(10)).sub(1).mul(1.1)
        if (player.a.points.gte(45)) exp = exp.add(0.05)
        return exp
    }, 
    hotkeys: [
        {key: "a", description: "A: Reset for alternators", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.a.unlocked}},
    ],
    onPrestige() {
        if (!tmp.a.resetsNothing) {
            player.a.alternatingCurrent = new Decimal(0)
        }
    },

    tooltip() {return format(player.a.points, 0) + " alternators (" + format(tmp.a.alternatorBase) + "^,  +" +  format(tmp.a.freeAlts) + ")"},

    resetsNothing() {return hasMilestone('c', 7)},
    canBuyMax() {return hasMilestone('c', 7)},
    autoPrestige() {return hasMilestone('v', 2)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row || resettingLayer == "c") return;
      
        let keptUpgrades = []
        if (hasUpgrade(this.layer, 31)) keptUpgrades.push(31)
        if (resettingLayer == "v") {
            if (hasMilestone('v', 0)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('v', 1)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
            if (hasMilestone('c', 8)) {
                if (hasUpgrade(this.layer, 41)) keptUpgrades.push(41)
                if (hasUpgrade(this.layer, 42)) keptUpgrades.push(42)
                if (hasUpgrade(this.layer, 43)) keptUpgrades.push(43)
                if (hasUpgrade(this.layer, 44)) keptUpgrades.push(44)
                if (hasUpgrade(this.layer, 51)) keptUpgrades.push(51)
                if (hasUpgrade(this.layer, 52)) keptUpgrades.push(52)
                if (hasUpgrade(this.layer, 53)) keptUpgrades.push(53)
                if (hasUpgrade(this.layer, 54)) keptUpgrades.push(54)
            }
        }
        let keep = [];
        keep.push("milestones")
        keep.push("best")
      
        layerDataReset(this.layer, keep);
      
        player[this.layer].upgrades.push(...keptUpgrades)
    },

    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('m', 21)) mult = mult.div(upgradeEffect('m', 21))
        return mult
    },
    alternatorBase() {
        let base = new Decimal(2)
        if (!inChallenge('c', 13)) {
            if (hasUpgrade('a', 21)) base = base.add(upgradeEffect('a', 21))
            if (hasUpgrade('d', 44)) base = base.add(upgradeEffect('d', 44))
            if (hasUpgrade('v', 23)) base = base.add(upgradeEffect('v', 23))
            if (hasUpgrade('d', 53)) base = base.add(upgradeEffect('d', 53))
        }
        base = base.add(buyableEffect('c', 12))
        if (hasUpgrade('m', 22)) base = base.add(upgradeEffect('m', 22))
        return base
    },
    freeAlts() {
        let alts = new Decimal(0)
        if (!inChallenge('c', 13)) {
            if (hasUpgrade('a', 22)) alts = alts.add(upgradeEffect('a', 22))
            if (hasUpgrade('a', 14)) alts = alts.add(upgradeEffect('a', 14))
        }
        if (challengeCompletions('c', 13) > 0) alts = alts.add(challengeEffect('c', 13))
        alts = alts.add(buyableEffect('c', 12))
        if (hasUpgrade('m', 23)) alts = alts.add(upgradeEffect('m', 23))
        if (inChallenge('m', 21)) alts = alts.sub(tmp.a.alternatorBase).max(new Decimal(0))
        return alts
    },
    effect() {
        let effect = tmp.a.alternatorBase.pow(player.a.points.add(tmp.a.freeAlts)).sub(1)
        if (inChallenge('m', 31)) {
            effect = tmp.d.dynamoBase.pow(player.d.points.add(tmp.d.freeDynas)).sub(1)
        }
        if (!inChallenge('c', 13)) {
            if (hasUpgrade('a', 13)) effect = effect.mul(upgradeEffect('a', 13))
            if (hasUpgrade('v', 32)) effect = effect.mul(upgradeEffect('v', 32)[1])
        }
        effect = effect.mul(tmp.v.voltageEffect)
        if (hasUpgrade('m', 24)) effect = effect.mul(upgradeEffect('m', 24))
        if (inChallenge('m', 12)) {
            effect = new Decimal(0)
        }
        return effect
    },
    effectDescription() {
        if (inChallenge('m', 31)) {
            return "which are generating " + format(tmp.d.effect) + " <s>alternating</s> direct current per second"
        }
        return "which are generating " + format(tmp.a.effect) + " alternating current per second"
    },
    altCurEffect() {
        let effect = player.a.alternatingCurrent.add(1).log10().div(5)
        return effect
    },

    milestones: {
        0: {
            requirementDescription: "3 alternators",
            effectDescription: "Generators reset nothing. You can buy max generators up to your best amount.",
            done() { return player.a.points.gte(3) }
        },
        1: {
            requirementDescription: "4 alternators",
            effectDescription: "Keep row 1 generator upgrades on reset",
            done() { return player.a.points.gte(4) }
        },
        2: {
            requirementDescription: "7 alternators",
            effectDescription: "Keep row 2 generator upgrades on reset",
            done() { return player.a.points.gte(7) }
        },
    },

    upgrades: {
        11: {
            title: "Point Wire",
            description() {return "Alternating current multiplies point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(3),
            effect() {
                let effect = player.a.alternatingCurrent.add(1).pow(0.25)
                effect = effect.mul(buyableEffect('m', 31))
                return effect
            },
            unlocked() {return true}
        },
        12: {
            title: "Stronger Alternators",
            description() {return "Alternators multiply point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(4),
            effect() {
                let effect = player.a.points.add(1).pow(1.5)
                effect = effect.mul(buyableEffect('m', 32))
                return effect
            },
            unlocked() {return hasUpgrade('a', 11)}
        },
        13: {
            title: "Generative Current",
            description() {return "Generator power multiplies AC gain. Effect: x" + format(this.effect())},
            cost: new Decimal(7),
            effect() {
                let effect = player.g.generatorPower.add(1).log(5).add(1)
                effect = effect.mul(buyableEffect('m', 33))
                return effect
            },
            unlocked() {return hasUpgrade('a', 12)}
        },
        14: {
            title: "Bonus Stacking",
            description() {return "Earn free alternators based on the generator base. Effect: +" + format(this.effect())},
            cost: new Decimal(11),
            effect() {
                let effect = tmp.g.generatorBase.pow(0.2)
                effect = effect.mul(buyableEffect('m', 34))
                return effect
            },
            unlocked() {return hasUpgrade('a', 23)}
        },
        21: {
            title: "Better Alternators",
            description() {return "Alternating current adds to the alternator base. Effect: +" + format(this.effect())},
            cost: new Decimal(50000),
            effect() {
                let effect = player.a.alternatingCurrent.add(1).log10().div(5)
                effect = effect.mul(buyableEffect('m', 41))
                return effect
            },
            unlocked() {return hasUpgrade('a', 13)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        22: {
            title: "More Alternators",
            description() {return "Earn free alternators based on AC. Effect: +" + format(this.effect())},
            cost: new Decimal(5000000),
            effect() {
                let effect = player.a.alternatingCurrent.add(1).log(15).div(5)
                effect = effect.mul(buyableEffect('m', 42))
                return effect
            },
            unlocked() {return hasUpgrade('a', 21)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        23: {
            title: "Self Generation II",
            description() {return "Generator power multiplies itself. Effect: x" + format(this.effect())},
            cost: new Decimal(1e10),
            effect() {
                let effect = player.g.generatorPower.add(1).log(5).div(25).add(1)
                effect = effect.mul(buyableEffect('m', 43))
                return effect
            },
            unlocked() {return hasUpgrade('a', 22)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        24: {
            title: "Multi Alternation",
            description() {return "Alternator effect multiplies points at a reduced rate. Effect: x" + format(this.effect())},
            cost: new Decimal(5e13),
            effect() {
                let effect = tmp.a.effect.add(1).log(4).add(1)
                effect = effect.mul(buyableEffect('m', 44))
                return effect
            },
            unlocked() {return hasUpgrade('a', 22)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        31: {
            title: "Alternate Direction",
            description() {return "Dynamos behave as if you first unlocked them. Automatically perform Generator resets, and unlock a new layer if you have <b>Direct Alternation</b>."},
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('d', 24) && player.a.unlockOrder == 1},
            onPurchase() {player.d.unlockOrder = 1},
            style: {"width": "150px", "height": "150px"}
        },
        41: {
            title: "Alternator Effectiveness",
            description() {return "Increase generator effectiveness based on AC. Effect: +" + format(this.effect().mul(100)) + "%"},
            cost: new Decimal(1e42),
            effect() {
                let effect = player.a.alternatingCurrent.add(1).log10().add(1).log(10).div(45)
                return effect
            },
            unlocked() {return player.c.points.gte(1) && hasUpgrade('a', 31)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        42: {
            title: "Free Generator Effectiveness",
            description() {return "Earn free generators based on generator effectiveness. Effect: +" + format(this.effect())},
            cost: new Decimal(1e44),
            effect() {
                let effect = tmp.g.generatorEffectiveness.mul(3)
                return effect
            },
            unlocked() {return hasUpgrade('a', 41)},
            currencyLayer: "a",
            currencyDisplayName: "alternating current",
            currencyInternalName: "alternatingCurrent",
        },
        43: {
            title: "Self Generation III",
            description() {return "Direct current multiplies itself. Effect: x" + format(this.effect())},
            cost: new Decimal(30),
            effect() {
                let effect = player.d.directCurrent.add(1).log(10).div(10).pow(1.5).add(1)
                return effect
            },
            unlocked() {return hasUpgrade('a', 41)},
        },
        44: {
            title: "Maintenance Boost",
            description() {return "Increase the dynamo base based on generator maintenance completions. Effect: +" + format(this.effect())},
            cost: new Decimal(33),
            effect() {
                let effect = new Decimal(challengeCompletions('c', 11)).mul(1.5)
                return effect
            },
            unlocked() {return hasUpgrade('a', 43)},
        },
        51: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 116 alternator base.</p> \
                "} else {return " \
                    <h3>Overcharge</h3> \
                    <p>Multiply the charge limit and charge generation based on chargers. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 75 alternators</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 8)},
            pseudoReq() {return tmp.a.alternatorBase.gte(116)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.a.points.gte(75)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.a.points = player.a.points.sub(75)
                }
            },
            effect() {
                let effect = player.c.points.add(1).pow(0.6)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        52: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 75% charged Alternator Battery.</p> \
                "} else {return " \
                    <h3>Charged Amplifiers</h3> \
                    <p>Chargers increase the amplifier base. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 77 alternators</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 8)},
            pseudoReq() {return getBuyableAmount('c', 12).gte(75)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.a.points.gte(77)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.a.points = player.a.points.sub(77)
                }
            },
            effect() {
                let effect = player.c.points.div(100)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        53: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e132 AC without alternator upgrades and within <b>Alternator Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Amplified Chargers</h3> \
                    <p>Voltage increases the charge limit. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e456 alternating current</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 8)},
            pseudoReq() {return !hasUpgrade('a', 11) && !hasUpgrade('a', 41) && !hasUpgrade('a', 51) && inChallenge('c', 13) && player.a.alternatingCurrent.gte(1e132)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.a.alternatingCurrent.gte("1e456")
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.a.alternatingCurrent = player.a.alternatingCurrent.sub("1e456")
                }
            },
            effect() {
                let effect = player.v.voltage.add(1).log(10).add(1)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        54: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 50 alternators without alternator or dynamo upgrades.</p> \
                "} else {return " \
                    <h3>Charger Effectiveness</h3> \
                    <p>Generator effectiveness increases the charger base and grants free chargers. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e475 alternating current</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 8)},
            pseudoReq() {return !hasUpgrade('a', 11) && !hasUpgrade('a', 41) && !hasUpgrade('a', 51) && !hasUpgrade('d', 11) && !hasUpgrade('d', 41) && !hasUpgrade('d', 51) && player.a.points.gte(50)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.a.alternatingCurrent.gte("1e475")
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.a.alternatingCurrent = player.a.alternatingCurrent.sub("1e475")
                }
            },
            effect() {
                let effect = tmp.g.generatorEffectiveness.pow(0.75).div(2.5)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.a.alternatingCurrent) + " alternating current, which is increasing the generator base by " + format(tmp.a.altCurEffect)],
        "blank",
        ["display-text", () => "Your alternator base is " + format(tmp.a.alternatorBase)],
        ["display-text", () => {
                if (tmp.a.freeAlts.gt(0)) {
                    return "You have " + format(tmp.a.freeAlts) + " free alternators"
                } else {
                    return ""
                }
            }
        ],
        "blank",

        "milestones",
        "blank",
        "upgrades"

    ],
    update(diff) {
        player.a.alternatingCurrent = player.a.alternatingCurrent.add(tmp.a.effect.mul(diff))
    }
})
addLayer("d", {
    branches: ['g'],
    name: "dynamos", 
    color: "#C55D00",
    symbol: "D", 
    position: 1,
    row: 1,
    layerShown(){return hasUpgrade('g', 32) || player.d.unlocked},

    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        directCurrent: new Decimal(0),
        best: new Decimal(0),
        unlockOrder: 1,

        pseudoUnlocks: []
    }},
    increaseUnlockOrder: ["a"],
    requires() {
        if (player.d.unlockOrder == 2) {
            return new Decimal(1e30)
        } else {
            return inChallenge('m', 22) ? Decimal.dInf : new Decimal(1e10)
        }
    }, // 1e30 if alternators are unlocked first
    resource: "dynamos", 
    baseResource: "generator power", 
    baseAmount() {return player.g.generatorPower}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.5)
        if (player.d.unlockOrder == 2) exp = new Decimal(2)
        if (player.d.points.gte(11)) exp = exp.add(player.d.points.add(1).slog(10)).sub(1).mul(1.1)
        return exp
    }, 
    hotkeys: [
        {key: "d", description: "D: Reset for dynamos", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.d.unlocked}},
    ],
    onPrestige() {
        if (!tmp.d.resetsNothing) {
            player.d.directCurrent = new Decimal(0)
        }
    },

    tooltip() {return format(player.d.points, 0) + " dynamos (" + format(tmp.d.dynamoBase) + "^,  +" +  format(tmp.d.freeDynas) + ")"},

    resetsNothing() {return hasMilestone('c', 0)},
    canBuyMax() {return hasMilestone('c', 0)},
    autoPrestige() {return hasMilestone('c', 3)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row || resettingLayer == "v") return;
      
        let keptUpgrades = []
        if (hasUpgrade(this.layer, 31)) keptUpgrades.push(31)
        if (resettingLayer == "c") {
            if (hasMilestone('c', 1)) {
                if (hasUpgrade(this.layer, 11)) keptUpgrades.push(11)
                if (hasUpgrade(this.layer, 12)) keptUpgrades.push(12)
                if (hasUpgrade(this.layer, 13)) keptUpgrades.push(13)
                if (hasUpgrade(this.layer, 14)) keptUpgrades.push(14)
            }
            if (hasMilestone('c', 2)) {
                if (hasUpgrade(this.layer, 21)) keptUpgrades.push(21)
                if (hasUpgrade(this.layer, 22)) keptUpgrades.push(22)
                if (hasUpgrade(this.layer, 23)) keptUpgrades.push(23)
                if (hasUpgrade(this.layer, 24)) keptUpgrades.push(24)
            }
            if (hasMilestone('c', 6)) {
                if (hasUpgrade(this.layer, 41)) keptUpgrades.push(41)
                if (hasUpgrade(this.layer, 42)) keptUpgrades.push(42)
                if (hasUpgrade(this.layer, 43)) keptUpgrades.push(43)
                if (hasUpgrade(this.layer, 44)) keptUpgrades.push(44)
                if (hasUpgrade(this.layer, 51)) keptUpgrades.push(51)
                if (hasUpgrade(this.layer, 52)) keptUpgrades.push(52)
                if (hasUpgrade(this.layer, 53)) keptUpgrades.push(53)
                if (hasUpgrade(this.layer, 54)) keptUpgrades.push(54)
            }
        }
        let keep = [];
        keep.push("milestones")
        keep.push("best")
        
        layerDataReset(this.layer, keep);
      
        player[this.layer].upgrades.push(...keptUpgrades)
    },

    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('m', 31)) mult = mult.div(upgradeEffect('m', 31))
        return mult
    },
    dynamoBase() {
        let base = new Decimal(2)
        if (!inChallenge('c', 12)) {
            if (hasUpgrade('d', 21)) base = base.add(upgradeEffect('d', 21))
            if (hasUpgrade('d', 14)) base = base.add(upgradeEffect('d', 14))
            if (hasUpgrade('a', 44)) base = base.add(upgradeEffect('a', 44))
            if (hasUpgrade('v', 13)) base = base.add(upgradeEffect('v', 13))
        }
        base = base.add(buyableEffect('c', 13))
        if (hasUpgrade('m', 32)) base = base.add(upgradeEffect('m', 32))
        if (inChallenge('m', 32)) base = base.sub(tmp.d.freeDynas).max(new Decimal(1.1))
        return base
    },
    freeDynas() {
        let dynas = new Decimal(0)
        if (!inChallenge('c', 12)) {
            if (hasUpgrade('d', 22)) dynas = dynas.add(upgradeEffect('d', 22))
        }
        if (challengeCompletions('c', 12) > 0) dynas = dynas.add(challengeEffect('c', 12))
        dynas = dynas.add(buyableEffect('c', 13))
        if (hasUpgrade('m', 33)) dynas = dynas.add(upgradeEffect('m', 33))
        return dynas
    },
    effect() {
        let effect = tmp.d.dynamoBase.pow(player.d.points.add(tmp.d.freeDynas)).sub(1)
        if (inChallenge('m', 31)) {
            effect = tmp.a.alternatorBase.pow(player.a.points.add(tmp.a.freeAlts)).sub(1)
        }
        if (!inChallenge('c', 12)) {
            if (hasUpgrade('d', 13)) effect = effect.mul(upgradeEffect('d', 13))
            if (hasUpgrade('g', 42)) effect = effect.mul(upgradeEffect('d', 42))
            if (hasUpgrade('v', 32)) effect = effect.mul(upgradeEffect('v', 32)[0])
        }
        effect = effect.mul(tmp.v.voltageEffect)
        if (hasUpgrade('m', 34)) effect = effect.mul(upgradeEffect('m', 34))
        if (inChallenge('m', 12)) {
            effect = new Decimal(0)
        }
        return effect
    },
    effectDescription() {
        if (inChallenge('m', 31)) {
            return "which are generating " + format(tmp.d.effect) + " <s>direct</s> alternating current per second"
        }
        return "which are generating " + format(tmp.d.effect) + " direct current per second"
    },
    dirCurEffect() {
        let effect = player.d.directCurrent.add(1).log10().div(2)
        return effect
    },

    milestones: {
        0: {
            requirementDescription: "3 dynamos",
            effectDescription: "Generators reset nothing. You can buy max generators up to your best amount.",
            done() { return player.d.points.gte(3) }
        },
        1: {
            requirementDescription: "4 dynamos",
            effectDescription: "Keep row 1 generator upgrades on reset",
            done() { return player.d.points.gte(4) }
        },
        2: {
            requirementDescription: "7 dynamos",
            effectDescription: "Keep row 2 generator upgrades on reset",
            done() { return player.d.points.gte(7) }
        },
    },

    upgrades: {
        11: {
            title: "Direct Multiplier",
            description() {return "Direct current multiplies point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(3),
            effect() {
                let effect = player.d.directCurrent.add(1).pow(0.25)
                effect = effect.mul(buyableEffect('m', 51))
                return effect
            },
            unlocked() {return true}
        },
        12: {
            title: "Stronger Dynamos",
            description() {return "Dynamos multiply point gain. Effect: x" + format(this.effect())},
            cost: new Decimal(4),
            effect() {
                let effect = player.d.points.add(1).pow(1.5)
                effect = effect.mul(buyableEffect('m', 52))
                return effect
            },
            unlocked() {return hasUpgrade('d', 11)}
        },
        13: {
            title: "Direct Power",
            description() {return "Generator power multiplies DC gain. Effect: x" + format(this.effect())},
            cost: new Decimal(7),
            effect() {
                let effect = player.g.generatorPower.add(1).log(5).add(1)
                effect = effect.mul(buyableEffect('m', 53))
                return effect
            },
            unlocked() {return hasUpgrade('d', 12)}
        },
        14: {
            title: "Base After Base",
            description() {return "Increase the dynamo base based on free generators. Effect: +" + format(this.effect())},
            cost: new Decimal(11),
            effect() {
                let effect = tmp.g.freeGens.pow(0.2)
                effect = effect.mul(buyableEffect('m', 54))
                return effect
            },
            unlocked() {return hasUpgrade('d', 23)}
        },
        21: {
            title: "Better Dynamos",
            description() {return "Direct current adds to the dynamo base. Effect: +" + format(this.effect())},
            cost: new Decimal(50000),
            effect() {
                let effect = player.d.directCurrent.add(1).log10().div(5)
                effect = effect.mul(buyableEffect('m', 61))
                return effect
            },
            unlocked() {return hasUpgrade('d', 12)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        22: {
            title: "More Dynamos",
            description() {return "Earn free dynamos based on DC. Effect: +" + format(this.effect())},
            cost: new Decimal(5000000),
            effect() {
                let effect = player.d.directCurrent.add(1).log(15).div(5)
                effect = effect.mul(buyableEffect('m', 62))
                return effect
            },
            unlocked() {return hasUpgrade('d', 21)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        23: {
            title: "Free Base",
            description() {return "Increase the generator base based on free generators. Effect: +" + format(this.effect())},
            cost: new Decimal(1e10),
            effect() {
                let effect = tmp.g.freeGens.add(1).log(10).div(10).add(1)
                effect = effect.mul(buyableEffect('m', 63))
                return effect
            },
            unlocked() {return hasUpgrade('d', 22)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        24: {
            title: "Dynamic Generation",
            description() {return "Dynamo effect multiplies points at a reduced rate. Effect: x" + format(this.effect())},
            cost: new Decimal(5e13),
            effect() {
                let effect = tmp.d.effect.add(1).log(4).add(1)
                effect = effect.mul(buyableEffect('m', 64))
                return effect
            },
            unlocked() {return hasUpgrade('d', 23)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        31: {
            title: "Direct Alternation",
            description() {return "Alternators behave as if you first unlocked them. Automatically perform Generator resets, and unlock a new layer if you have <b>Alternate Direction</b>."},
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('a', 14) && player.d.unlockOrder == 1},
            onPurchase() {player.a.unlockOrder = 1},
            style: {"width": "150px", "height": "150px"}
        },
        41: {
            title: "Dynamo Effectiveness",
            description() {return "Increase generator effectiveness based on DC. Effect: +" + format(this.effect().mul(100)) + "%"},
            cost: new Decimal(1e111),
            effect() {
                let effect = player.d.directCurrent.add(1).log10().add(1).log(10).div(45)
                return effect
            },
            unlocked() {return hasMilestone('c', 4)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        42: {
            title: "Generator Base Effectiveness",
            description() {return "Increase the generator base based on generator effectiveness. Effect: +" + format(this.effect())},
            cost: new Decimal(51),
            effect() {
                let effect = tmp.g.generatorEffectiveness.mul(3)
                return effect
            },
            unlocked() {return hasUpgrade('d', 41)},
        },
        43: {
            title: "Maintenance Boost II",
            description() {return "Increase the alternator base based on dynamo maintenance completions. Effect: +" + format(this.effect())},
            cost: new Decimal(61),
            effect() {
                let effect = new Decimal(challengeCompletions('c', 12)).mul(0.5)
                return effect
            },
            unlocked() {return hasUpgrade('d', 42)},
        },
        44: {
            title: "Maintenance Boost III",
            description() {return "Increase generator effectiveness based on alternator maintenance completions. Effect: +" + format(this.effect().mul(100)) + "%"},
            cost: new Decimal(1e182),
            effect() {
                let effect = new Decimal(challengeCompletions('c', 13)).div(50)
                return effect
            },
            unlocked() {return hasUpgrade('d', 43)},
            currencyLayer: "d",
            currencyDisplayName: "direct current",
            currencyInternalName: "directCurrent",
        },
        51: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e110 DC within <b>Generator Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Free Points</h3> \
                    <p>Multiply points based on free generators. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 69 dynamos</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 6)},
            pseudoReq() {return inChallenge('c', 11) && player.d.directCurrent.gte(1e110)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.d.points.gte(69)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.d.points = player.d.points.sub(69)
                }
            },
            effect() {
                let effect = tmp.g.freeGens.add(1).pow(3)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        52: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 50 dynamos without dynamo upgrades. (Hint: Enter and exit <b>Dynamo Maintenance</b>).</p> \
                "} else {return " \
                    <h3>Dynamic Generation II</h3> \
                    <p>Dynamo effect multiplies AC generation at a reduced rate. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e225 direct current</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 6)},
            pseudoReq() {return !hasUpgrade('d', 11) && !hasUpgrade('d', 41) && player.d.points.gte(50)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.d.directCurrent.gte(1e225)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.d.directCurrent = player.d.directCurrent.sub(1e225)
                }
            },
            effect() {
                let effect = tmp.d.effect.add(1).log10().add(1)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        53: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: Dynamo base of 66.</p> \
                "} else {return " \
                    <h3>Even Better Alternators</h3> \
                    <p>DC increases the alternator base. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 2.3e232 direct current</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 6)},
            pseudoReq() {return tmp.d.dynamoBase.gte(66)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.d.directCurrent.gte(2.3e232)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.d.directCurrent = player.d.directCurrent.sub(2.3e232)
                }
            },
            effect() {
                let effect = player.d.directCurrent.add(232).log(2.32).div(116)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        54: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 190% Generator Effectiveness.</p> \
                "} else {return " \
                    <h3>Limitless</h3> \
                    <p>Multiply the charge limit based on charge. Effect: x" + format(this.effect()) + "</p><br> \
                    <p>Cost: 73 dynamos</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 6)},
            pseudoReq() {return tmp.g.generatorEffectiveness.gte(1.9)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.d.points.gte(73)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.d.points = player.d.points.sub(73)
                }
            },
            effect() {
                let effect = player.c.charge.add(1).log(2).pow(0.25).add(1)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.d.directCurrent) + " direct current, which are granting " + format(tmp.d.dirCurEffect) + " free generators"],
        "blank",
        ["display-text", () => "Your dynamo base is " + format(tmp.d.dynamoBase)],
        ["display-text", () => {
                if (tmp.d.freeDynas.gt(0)) {
                    return "You have " + format(tmp.d.freeDynas) + " free dynamos"
                } else {
                    return ""
                }
            }
        ],
        "blank",

        "milestones",
        "blank",
        "upgrades"

    ],
    update(diff) {
        player.d.directCurrent = player.d.directCurrent.add(tmp.d.effect.mul(diff))
    }
})
addLayer("c", {
    branches: ['d'],
    name: "chargers",
    symbol: "C",
    color: "#1A237E",
    layerShown: true,
    displayRow: 1,
    row: 2,
    position: 2,
    layerShown() {return hasUpgrade('a', 31) && hasUpgrade('d', 31) || player.c.unlocked},

    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        charge: new Decimal(0),
        best: new Decimal(0),

        resetTime: 1
    }},

    requires() {return inChallenge('m', 22) ? Decimal.dInf : new Decimal(1e36)},
    resource: "chargers", 
    baseResource: "direct current", 
    baseAmount() {return player.d.directCurrent}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.25)
        if (player.c.points.gte(10)) exp = exp.add(0.5)
        if (player.c.points.gte(50)) exp = exp.add(0.05)
        return exp
    }, 
    hotkeys: [
        {key: "c", description: "C: Reset for chargers", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.c.unlocked}},
    ],
    onPrestige() {
        player.c.charge = new Decimal(0)
    },

    tooltip() {return format(player.c.points, 0) + " chargers (" + format(tmp.c.chargerBase) + "^,  +" +  format(tmp.c.freeChargers) + ")"},

    canBuyMax() {return challengeCompletions('m', 11) >= 1},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        keep.push("milestones")
        keep.push("best")
        if (challengeCompletions('m', 22) >= 1) keep.push("buyables")

        let challengeKeep = [0, 0, 0];
        if (challengeCompletions('m', 11) >= 1) challengeKeep[0] = (challengeCompletions('c', 11))
        if (challengeCompletions('m', 21) >= 1) challengeKeep[1] = (challengeCompletions('c', 12))
        if (challengeCompletions('m', 21) >= 1) challengeKeep[2] = (challengeCompletions('c', 13))


        layerDataReset(this.layer, keep);

        player.c.challenges[11] = challengeKeep[0]
        player.c.challenges[12] = challengeKeep[1]
        player.c.challenges[13] = challengeKeep[2]


    },

    gainMult() { 
        mult = new Decimal(125).pow(player.c.points).pow(2)
        if (hasUpgrade('m', 41)) mult = mult.div(upgradeEffect('m', 41))
        return mult
    },
    chargerBase() { 
        base = new Decimal(1.5)
        if (hasUpgrade('g', 41)) base = base.add(upgradeEffect('g', 41))
        if (hasUpgrade('d', 44)) base = base.add(upgradeEffect('d', 44))
        if (hasUpgrade('a', 54)) base = base.add(upgradeEffect('a', 54))
        if (hasUpgrade('v', 33)) base = base.add(upgradeEffect('v', 33))
        base = base.add(buyableEffect('c', 22))
        if (hasUpgrade('m', 42)) base = base.add(upgradeEffect('m', 42))
        if (challengeCompletions('m', 31) >= 1) base = base.add(0.5)
        return base
    },
    freeChargers() {
        let chargers = new Decimal(0)
        if (hasUpgrade('g', 44)) chargers = chargers.add(upgradeEffect('g', 44))
        if (hasUpgrade('a', 54)) chargers = chargers.add(upgradeEffect('a', 54))
        if (hasUpgrade('v', 34)) chargers = chargers.add(upgradeEffect('v', 34))
        chargers = chargers.add(buyableEffect('c', 22))
        if (hasUpgrade('m', 43)) chargers = chargers.add(upgradeEffect('m', 43))
        if (challengeCompletions('m', 31) >= 1) chargers = chargers.add(1.5)
        return chargers
    },
    effect() {
        let effect = tmp.c.chargerBase.pow(player.c.points.add(tmp.c.freeChargers)).sub(1)
        if (hasUpgrade('v', 14)) effect = effect.mul(upgradeEffect('v', 14))
        if (hasUpgrade('a', 51)) effect = effect.mul(upgradeEffect('a', 51))
        if (hasUpgrade('v', 31)) effect = effect.mul(upgradeEffect('v', 31)[0])
        if (hasUpgrade('m', 44)) effect = effect.mul(upgradeEffect('m', 44))
        if (inChallenge('m', 12)) {
            effect = new Decimal(0)
        }
        return effect
    },
    effectDescription() {
        return "which are generating " + format(tmp.c.effect) + " charge per second, with a limit of " + format(tmp.c.chargeLimit) + " charge"
    },
    chargeEffect() {
        let effect = player.c.charge.add(1).log10().add(1).log10().pow(0.5).div(7.4)
        return effect
    },
    chargeLimit() {
        let limit = new Decimal(100).mul(tmp.c.chargerBase.pow(player.c.points.add(tmp.c.freeChargers)))
        if (hasUpgrade('d', 54)) limit = limit.mul(upgradeEffect('d', 54))
        if (hasUpgrade('a', 51)) limit = limit.mul(upgradeEffect('a', 51))
        if (hasUpgrade('a', 53)) limit = limit.mul(upgradeEffect('a', 53))
        if (hasUpgrade('v', 31)) limit = limit.mul(upgradeEffect('v', 31)[0])
        if (hasUpgrade('m', 44)) limit = limit.mul(upgradeEffect('m', 44))
        return limit
    },

    milestones: {
        0: {
            requirementDescription: "3 chargers",
            effectDescription: "Dynamos reset nothing. You can buy max dynamos up to your best amount.",
            done() { return player.c.points.gte(3) }
        },
        1: {
            requirementDescription: "4 chargers",
            effectDescription: "Keep row 1 dynamo and generator upgrades on reset. Unlock Generator Maintenance.",
            done() { return player.c.points.gte(4) }
        },
        2: {
            requirementDescription: "7 chargers",
            effectDescription: "Keep row 2 dynamo and generator upgrades on reset. Unlock Dynamo Maintenance.",
            done() { return player.c.points.gte(7) }
        },
        3: {
            requirementDescription: "10 chargers",
            effectDescription: "Automatically reset for dynamos.",
            done() { return player.c.points.gte(10) }
        },   
        4: {
            requirementDescription: "14 chargers",
            effectDescription: "Unlock Alternator Maintenance and more dynamo upgrades.",
            done() { return player.c.points.gte(14) }
        },    
        5: {
            requirementDescription: "10 generator maintenance completions",
            effectDescription: "You can explore further Generator upgrades. Keep row 4 generator upgrades on reset.",
            done() { return challengeCompletions('c', 11) > 9  },
            unlocked() {return hasMilestone('c', 1)}
        },  
        6: {
            requirementDescription: "10 dynamo maintenance completions",
            effectDescription: "You can explore further Dynamo upgrades. Keep row 4 and 5 dynamo upgrades on reset.",
            done() { return challengeCompletions('c', 12) > 9  },
            unlocked() {return hasMilestone('c', 2)}
        },  
        7: {
            requirementDescription: "1 alternator maintenance completion",
            effectDescription: "Alternators reset nothing. You can buy max alternators up to your best amount.",
            done() { return challengeCompletions('c', 13) > 0  },
            unlocked() {return hasMilestone('c', 4)}
        },  
        8: {
            requirementDescription: "10 alternator maintenance completions",
            effectDescription: "You can explore further Alternator upgrades. Keep row 4 and 5 alternator upgrades on Amplifier reset.",
            done() { return challengeCompletions('c', 13) > 9  },
            unlocked() {return hasMilestone('c', 4)}
        },  
        9: {
            requirementDescription: "100% charged Dynamo Battery",
            effectDescription: "Unlock 2 more batteries.",
            done() { return getBuyableAmount('c', 13).gte(100) },
            unlocked() {return hasMilestone('v', 3)}
        },  
        10: {
            requirementDescription: "25% charged Amplifier Battery",
            effectDescription: "You can explore further Amplifier upgrades.",
            done() { return getBuyableAmount('c', 21).gte(25) },
            unlocked() {return hasMilestone('c', 9)}
        },  
        11: {
            requirementDescription: "100% charged Charger Battery",
            effectDescription: "Unlock a new layer.",
            done() { return getBuyableAmount('c', 22).gte(100) },
            unlocked() {return hasMilestone('c', 9)}
        },  
    },

    challenges: {
        11: {
            name: "Generator Maintenance",
            fullDisplay() {return " \
                Resets all generator content. All upgrades affecting generator stats (base, free gens, etc.) are nullified.<br><br> \
                Reach " + format(this.req()) + " generators to complete.<br> \
                Earn +5% generator effectiveness per completion.<br> \
                Effect: +" + format(this.rewardEffect().mul(100)) + "%<br> \
                Completions: " + challengeCompletions('c', 11) + "/10"
            },
            rewardEffect() {
                let effect = new Decimal(0.05).mul(challengeCompletions('c', 11))
                return effect
            },
            canComplete() {return player.g.points.gte(tmp.c.challenges[11].req)},
            req() {
                let req = new Decimal(25)
                req = req.add(new Decimal(challengeCompletions('c', 11)).mul(2.5).floor())
                return req
            },
            onEnter() {player.g.upgrades = [31, 32]; if (hasUpgrade('g', 33)) {player.g.upgrades = [31, 32, 33]}; player.c.charge = new Decimal(0); player.g.best = new Decimal(0)},
            completionLimit: new Decimal(10),
            unlocked() {return hasMilestone('c', 1)}
        },
        12: {
            name: "Dynamo Maintenance",
            fullDisplay() {return " \
                Resets all dynamo content. All upgrades affecting dynamo stats (base, free dynas, etc.) are nullified, and dynamos act like they were unlocked last.<br><br> \
                Reach " + format(this.req()) + " dynamos to complete.<br> \
                Earn +1.25 free dynamos per completion.<br> \
                Effect: +" + format(this.rewardEffect()) + "<br> \
                Completions: " + challengeCompletions('c', 12) + "/10"
            },
            rewardEffect() {
                let effect = new Decimal(1.25).mul(challengeCompletions('c', 12))
                return effect
            },
            canComplete() {return player.d.points.gte(tmp.c.challenges[12].req)},
            req() {
                let req = new Decimal(14)
                req = req.add(new Decimal(new Decimal(challengeCompletions('c', 12)).mul(1.1).floor()))
                return req
            },
            onEnter() {player.d.upgrades = [31]; player.d.unlockOrder = 2; player.a.unlockOrder = 1; player.c.charge = new Decimal(0); player.d.best = new Decimal(0)},
            onExit() {player.d.unlockOrder = 1},
            completionLimit: new Decimal(10),
            unlocked() {return hasMilestone('c', 2)}
        },
        13: {
            name: "Alternator Maintenance",
            fullDisplay() {return " \
                Resets all alternator content. All upgrades affecting alternator stats (base, free alts, etc.) are nullified, and alternators act like they were unlocked last.<br><br> \
                Reach " + format(this.req()) + " alternators to complete.<br> \
                Earn +2.5 free alternators per completion.<br> \
                Effect: +" + format(this.rewardEffect()) + "<br> \
                Completions: " + challengeCompletions('c', 13) + "/10"
            },
            rewardEffect() {
                let effect = new Decimal(2.5).mul(challengeCompletions('c', 13))
                return effect
            },
            canComplete() {return player.a.points.gte(tmp.c.challenges[13].req)},
            req() {
                let req = new Decimal(18)
                req = req.add(new Decimal(new Decimal(challengeCompletions('c', 13)).mul(2)))
                return req
            },
            onEnter() {player.a.upgrades = [31]; player.a.unlockOrder = 2; player.d.unlockOrder = 1; player.a.points = new Decimal(0);  player.a.alternatingCurrent = new Decimal(0); player.c.charge = new Decimal(0); player.a.best = new Decimal(0)},
            onExit() {player.a.unlockOrder = 1},
            completionLimit: new Decimal(10),
            unlocked() {return hasMilestone('c', 4)}
        },
    },
    
    buyables: {
        11: {
            title() {return "Generator Battery (" + format(getBuyableAmount(this.layer, this.id), 0) + "/100%)"},
            cost(x) { return new Decimal(1e9).mul(x.mul(0.45).add(1)).mul(Decimal.pow(1.11, x)) },
            display() { return "Increasing free generators and the generator base by " + format(this.effect()) + "<br>Next % at " + format(this.cost()) + " charge" },
            canAfford() { return player.c.charge.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).pow(0.5).mul(4)
                return effect
            },
            purchaseLimit() {return new Decimal(100)},
            unlocked() {return hasMilestone('v', 3)}
        },
        12: {
            title() {return "Alternator Battery (" + format(getBuyableAmount(this.layer, this.id), 0) + "/100%)"},
            cost(x) { return new Decimal(1e9).mul(x.mul(0.55).add(1)).mul(Decimal.pow(1.12, x)) },
            display() { return "Increasing free alternators and the alterator base by " + format(this.effect()) + "<br>Next % at " + format(this.cost()) + " charge" },
            canAfford() { return player.c.charge.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))         
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).pow(0.5).mul(3)
                return effect
            },
            purchaseLimit() {return new Decimal(100)},
            unlocked() {return hasMilestone('v', 3)}
        },
        13: {
            title() {return "Dynamo Battery (" + format(getBuyableAmount(this.layer, this.id), 0) + "/100%)"},
            cost(x) { return new Decimal(1e9).mul(x.mul(0.65).add(1)).mul(Decimal.pow(1.13, x)) },
            display() { return "Increasing free dynamos and the dynamo base by " + format(this.effect()) + "<br>Next % at " + format(this.cost()) + " charge" },
            canAfford() { return player.c.charge.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))            
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).pow(0.5).mul(2)
                return effect
            },
            purchaseLimit() {return new Decimal(100)},
            unlocked() {return hasMilestone('v', 3)}
        },
        21: {
            title() {return "Amplifier Battery (" + format(getBuyableAmount(this.layer, this.id), 0) + "/100%)"},
            cost(x) { return new Decimal(1e23).mul(x.add(1)).mul(Decimal.pow(1.175, x)) },
            display() { return "Increasing free amplifiers and the amplifier base by " + format(this.effect()) + "<br>Next % at " + format(this.cost()) + " charge" },
            canAfford() { return player.c.charge.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))   
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).pow(0.5).mul(0.025)
                return effect
            },
            purchaseLimit() {return new Decimal(100)},
            unlocked() {return hasMilestone('c', 9)}
        },
        22: {
            title() {return "Charger Battery (" + format(getBuyableAmount(this.layer, this.id), 0) + "/100%)"},
            cost(x) { return new Decimal(1e23).mul(x.add(1)).mul(Decimal.pow(1.2, x)) },
            display() { return "Increasing free chargers and the charger base by " + format(this.effect()) + "<br>Next % at " + format(this.cost()) + " charge" },
            canAfford() { return player.c.charge.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))    
            },
            effect() {
                let effect = getBuyableAmount(this.layer, this.id).pow(0.5).mul(0.075)
                return effect
            },
            purchaseLimit() {return new Decimal(100)},
            unlocked() {return hasMilestone('c', 9)}
        },
    },

    microtabs: {
        chargeMicrotabs: {
            "Maintenance": {
                content: [
                    "blank", 
                    "challenges"
                ],
                unlocked() {return hasMilestone('c', 1)}
            },
            "Batteries": {
                content: [
                    "blank", 
                    "buyables",
                ],
                unlocked() {return hasMilestone('v', 3)}
            }
        }
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "You have " + format(player.c.charge) + " charge, which increases generator effectiveness by " + format(tmp.c.chargeEffect.mul(100)) + "%"],
        ["display-text", () => "Generator effectiveness grants a boost to non-free generators in the generator effect"],
        "blank",
        ["display-text", () => "Your charger base is " + format(tmp.c.chargerBase)],
        ["display-text", () => {
            if (tmp.c.freeChargers.gt(0)) {
                return "You have " + format(tmp.c.freeChargers) + " free chargers"
            } else {
                return ""
            }
        }],
        "blank",

        "milestones",
        "blank",
        ["microtabs", "chargeMicrotabs"],
    ],
    update(diff) {
	player.c.charge = player.c.charge.add(tmp.c.effect.mul(diff)).min(tmp.c.chargeLimit)
    }
})
addLayer("v", {
    branches: ['a'],
    name: "amplifiers", 
    color: "#FFEB3B",
    symbol: "V", 
    position: 1,
    row: 2,
    layerShown(){return hasUpgrade('g', 33) || player.v.unlocked},

    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        voltage: new Decimal(0),
        resetTime: 1,
        voltageOverflowTime: 0,
        best: new Decimal(0),

        pseudoUnlocks: []
    }},
    requires() {return inChallenge('m', 22) ? Decimal.dInf : new Decimal(1e145)},
    resource: "amplifiers", 
    baseResource: "alternating current", 
    baseAmount() {return player.a.alternatingCurrent}, 
    type: "static", 
    exponent() {
        let exp = new Decimal(1.25)
        if (player.v.points.gte(15)) exp = exp.add(0.25)
        if (player.v.points.gte(25)) exp = exp.add(0.25)
        return exp
    }, 
    hotkeys: [
        {key: "v", description: "V: Reset for amplifiers", onPress(){if (canReset(this.layer)) doReset(this.layer)}, unlocked() {return player.v.unlocked}},
    ],
    onPrestige() {
        player.v.voltage = new Decimal(0)
    },

    tooltip() {return format(player.v.points, 0) + " amplifiers (" + format(tmp.v.amplifierBase) + "^,  +" +  format(tmp.v.freeAmps) + ")"},

    canBuyMax() {return challengeCompletions('m', 22) >= 1},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;
      
        let keep = [];
        keep.push("milestones")
        keep.push("best")
      
        layerDataReset(this.layer, keep);
    },

    gainMult() { 
        mult = new Decimal(2).pow(player.v.points.pow(2)).pow(1.9)
        if (hasUpgrade('m', 51)) mult = mult.div(upgradeEffect('m', 51))
        return mult
    },
    amplifierBase() { 
        base = new Decimal(1.75)
        if (hasUpgrade('v', 12)) base = base.add(upgradeEffect('v', 12))
        if (hasUpgrade('a', 52)) base = base.add(upgradeEffect('a', 52))
        base = base.add(buyableEffect('c', 21))
        if (hasUpgrade('m', 52)) base = base.add(upgradeEffect('m', 52))
        if (challengeCompletions('m', 32) >= 1) base = base.add(1.25)
        return base
    },
    freeAmps() {
        let amps = new Decimal(0)
        if (hasUpgrade('v', 22)) amps = amps.add(upgradeEffect('v', 22))
        amps = amps.add(buyableEffect('c', 21))
        if (hasUpgrade('m', 53)) amps = amps.add(upgradeEffect('m', 53))
        return amps
    },
    effect() {
        let effect = tmp.v.amplifierBase.pow(player.v.points.add(tmp.v.freeAmps)).sub(1)
        if (hasUpgrade('v', 31)) effect = effect.mul(upgradeEffect('v', 31)[0])
        if (hasUpgrade('m', 54)) effect = effect.add(upgradeEffect('m', 54))
        effect = effect.mul(tmp.v.voltageReduction)
        if (inChallenge('m', 12)) {
            effect = new Decimal(0)
        }
        return effect
    },
    effectDescription() {
        return "which are generating a base of " + format(tmp.v.effect.div(tmp.v.voltageReduction)) + " voltage per second"
    },
    voltageEffect() {
        let effect = player.v.voltage.add(1).log(1.1).pow(1.5).add(1)
        return effect
    },
    voltageReduction() {
        let effect = new Decimal(2).pow(new Decimal(0 - player.v.resetTime).div(10))
        return effect.max(0.01)
    },

    milestones: {
        0: {
            requirementDescription: "3 amplifiers",
            effectDescription: "Keep row 1 alternator and generator upgrades on reset",
            done() { return player.v.points.gte(3) }
        },
        1: {
            requirementDescription: "4 amplifiers",
            effectDescription: "Keep row 2 alternator and generator upgrades on reset. Unlock charge/voltage upgrades.",
            done() { return player.v.points.gte(4) }
        },
        2: {
            requirementDescription: "7 amplifiers",
            effectDescription: "Keep row 4 generator upgrades on reset. Automatically reset for alternators.",
            done() { return player.v.points.gte(7) }
        },
        3: {
            requirementDescription: "10 amplifiers",
            effectDescription: "Unlock Batteries (in the Charger layer).",
            done() { return player.v.points.gte(10) }
        },
    },

    upgrades: {
        11: {
            title: "Amplified Generators",
            description() {return "Increase generator effectiveness based on voltage. Effect: +" + format(this.effect().mul(100)) + "%"},
            cost: new Decimal(50),
            effect() {
                let effect = player.v.points.pow(0.5).add(1).div(100)
                return effect
            },
            unlocked() {return hasMilestone('v', 1)},
            currencyLayer: "v",
            currencyDisplayName: "voltage",
            currencyInternalName: "voltage",
        },
        12: {
            title: "Better Amplifiers",
            description() {return "Increase the amplifier base based on voltage. Effect: +" + format(this.effect())},
            cost: new Decimal(100),
            effect() {
                let effect = player.v.points.add(1).log10().div(100).add(0.15)
                return effect
            },
            unlocked() {return hasUpgrade('v', 11)},
            currencyLayer: "v",
            currencyDisplayName: "voltage",
            currencyInternalName: "voltage",
        },
        13: {
            title: "Dynamo Effectiveness?",
            description() {return "Increase the dynamo base based on generator effectiveness. Effect: +" + format(this.effect())},
            cost: new Decimal(1700),
            effect() {
                let effect = tmp.g.generatorEffectiveness.div(1.25)
                return effect
            },
            unlocked() {return hasUpgrade('v', 12)},
            currencyLayer: "v",
            currencyDisplayName: "voltage",
            currencyInternalName: "voltage",
        },
        14: {
            title: "Faster Chargers",
            description() {return "Multiply charge generation based on voltage. Effect: x" + format(this.effect())},
            cost: new Decimal(3400),
            effect() {
                let effect = player.v.voltage.add(1).pow(0.25)
                return effect
            },
            unlocked() {return hasUpgrade('v', 13)},
            currencyLayer: "v",
            currencyDisplayName: "voltage",
            currencyInternalName: "voltage",
        },
        21: {
            title: "Charged Base",
            description() {return "Charge increases the generator base. Effect: +" + format(this.effect())},
            cost: new Decimal(1e7),
            effect() {
                let effect = player.c.charge.add(1).log10()
                return effect
            },
            unlocked() {return hasMilestone('v', 1)},
            currencyLayer: "c",
            currencyDisplayName: "charge",
            currencyInternalName: "charge",
        },
        22: {
            title: "More Amplifiers",
            description() {return "Earn free amplifiers based on charge. Effect: +" + format(this.effect())},
            cost: new Decimal(5e7),
            effect() {
                let effect = player.c.charge.add(1).log(10).div(100).add(0.1)
                return effect
            },
            unlocked() {return hasUpgrade('v', 21)},
            currencyLayer: "c",
            currencyDisplayName: "charge",
            currencyInternalName: "charge",
        },
        23: {
            title: "Alternator Effectiveness?",
            description() {return "Increase the alternator base based on generator effectiveness. Effect: +" + format(this.effect())},
            cost: new Decimal(2.5e8),
            effect() {
                let effect = tmp.g.generatorEffectiveness
                return effect
            },
            unlocked() {return hasUpgrade('v', 22)},
            currencyLayer: "c",
            currencyDisplayName: "charge",
            currencyInternalName: "charge",
        },
        24: {
            title: "Maintenance Sucks",
            description() {return "The sum of all your batteries' percentages increase generator effectiveness. Effect: +" + format(this.effect().mul(100)) + "%"},
            cost: new Decimal(1.25e9),
            effect() {
                let effect = getBuyableAmount('c', 11).add(getBuyableAmount('c', 12)).add(getBuyableAmount('c', 13)).add(getBuyableAmount('c', 21)).add(getBuyableAmount('c', 22)).add(1).log10().div(50)
                return effect
            },
            unlocked() {return hasUpgrade('v', 23)},
            currencyLayer: "c",
            currencyDisplayName: "charge",
            currencyInternalName: "charge",
        },
        31: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 114 generators within <b>Generator Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Duality</h3> \
                    <p>Charge and voltage multiply each others' gains, and voltage multiplies the charge limit. Effect: x" + format(this.effect()[0]) + " charge/charge limit, x" + format(this.effect()[1]) + " voltage</p><br> \
                    <p>Cost: 5e10 voltage</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 10)},
            pseudoReq() {return inChallenge('c', 11) && player.g.points.gte(114)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.v.voltage.gte(5e10)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.v.voltage = player.v.voltage.sub(5e10)
                }
            },
            effect() {
                let effect1 = player.v.voltage.add(1).log(25).div(1.5).add(1)
                let effect2 = player.c.charge.add(1).log(25).mul(2.5).add(1)
                let effect = [effect1, effect2]
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        32: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e93 direct current within <b>Dynamo Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Duality II</h3> \
                    <p>AC and DC multiply each others' gains. Effect: x" + format(this.effect()[0]) + " direct current, x" + format(this.effect()[1]) + " alternating current</p><br> \
                    <p>Cost: 1e29 charge</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 10)},
            pseudoReq() {return inChallenge('c', 12) && player.d.directCurrent.gte(1e93)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.c.charge.gte(1e29)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.c.charge = player.c.charge.sub(1e29)
                }
            },
            effect() {
                let effect1 = player.a.alternatingCurrent.add(1).log(750).mul(50).add(1)
                let effect2 = player.d.directCurrent.add(1).log(750).mul(50).add(1)
                let effect = [effect1, effect2]
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        33: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e145 alternating current within <b>Alternator Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Better Chargers</h3> \
                    <p>Increase the charger base based on charge. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 3e11 voltage</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 10)},
            pseudoReq() {return inChallenge('c', 13) && player.a.alternatingCurrent.gte(1e145)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.v.voltage.gte(3e11)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.v.voltage = player.v.voltage.sub(3e11)
                }
            },
            effect() {
                let effect = player.c.charge.add(1).log10().div(200)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
        34: {
            fullDisplay() { 
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {return " \
                    <h3>Explore A New Upgrade</h3> \
                    <p>Req: 1e281 direct current within <b>Generator Maintenance</b>.</p> \
                "} else {return " \
                    <h3>Final Push</h3> \
                    <p>Earn free chargers based on voltage. Effect: +" + format(this.effect()) + "</p><br> \
                    <p>Cost: 1e30 charge</p>\
                "}
            },
            unlocked() {return hasMilestone('c', 10)},
            pseudoReq() {return inChallenge('c', 11) && player.d.directCurrent.gte(1e281)},
            canAfford() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    return this.pseudoReq()
                } else {
                    return player.c.charge.gte(1e30)
                }
            },
            onPurchase() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id)) {
                    player[this.layer].pseudoUnlocks.push(this.id)
                    player[this.layer].upgrades.pop()
                } else {
                    player.c.charge = player.c.charge.sub(1e30)
                }
            },
            effect() {
                let effect = player.v.voltage.add(1).log(2).div(10)
                return effect
            },
            style() {
                if (!player[this.layer].pseudoUnlocks.includes(this.id) && !this.pseudoReq()) {return {
                   "border": "2px dotted white",
                   "background-color": "#000000",
                   "cursor": "not-allowed",
                   "color": "#ffffff"
                }} else if (!player[this.layer].pseudoUnlocks.includes(this.id) && this.pseudoReq()) {return {
                    "border": "2px dotted white",
                    "background-color": "#f5b942",
                    "color": "#ffffff"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && hasUpgrade(this.layer, this.id)) {return {
                    "background-color": "#77bf5f",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && !this.canAfford()) {return {
                    "background-color": "#bf8f8f",
                    "cursor": "not-allowed",
                    "color": "#000000"
                }} else if (player[this.layer].pseudoUnlocks.includes(this.id) && this.canAfford() && !hasUpgrade(this.layer, this.id)) {return {
                    "background-color": tmp[this.layer].color,
                    "color": "#000000"
                }}
            }
        },
    },

	clickables: {
		11: {
            title: "Force amplifier reset (Use if voltage generation is too low)",
            onClick() {
                doReset('v', true)
            },
            canClick() {return true},
        }
	},

    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",

        "blank",
        ["display-text", () => "Voltage generation is currently " + format(tmp.v.effect) + "V/s"],
        ["display-text", () => "Your voltage is " + format(player.v.voltage) + "V, which multiply point, generator power, AC, and DC gain by " + format(tmp.v.voltageEffect)],
        ["display-text", () => "Time since last Amplifier reset is multiplying voltage gain by " + format(tmp.v.voltageReduction) + " (minimum 0.01)"],
        "blank",
        ["display-text", () => "Your amplifier base is " + format(tmp.v.amplifierBase)],
        ["display-text", () => {
            if (tmp.v.freeAmps.gt(0)) {
                return "You have " + format(tmp.v.freeAmps) + " free amplifiers"
            } else {
                return ""
            }
        }],
        "blank",

        "milestones",
		"blank",
		"clickables"
        "blank",
        "upgrades"

    ],
    update(diff) {
        player.v.voltage = player.v.voltage.add(tmp.v.effect.mul(diff))
        if (player.v.voltage > tmp.v.calculateVoltageLimit) player.v.voltageOverflowTime = player.v.resetTime
        if (player.v.resetTime - player.v.voltageUnderflowTime > 60) {player.v.voltage = new Decimal(0); player.v.resetTime = 0}
    }
})
