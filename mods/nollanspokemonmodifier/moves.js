exports.BattleMovedex = {

"stealthrock": {
        inherit: true,
        effect: {
            // this is a side condition
            onStart: function(side) {
                this.add('-sidestart',side,'move: Stealth Rock');
            },
            onSwitchIn: function(pokemon) {
                var typeMod = this.getEffectiveness('Rock', pokemon);
                var factor = 8;
                if (typeMod == 1) factor = 6;
                if (typeMod >= 2) factor = 4;
                if (typeMod == -1) factor = 16;
                if (typeMod <= -2) factor = 12;
                        //if (typeMod == 1) factor = 4;
                        //if (typeMod >= 2) factor = 2;
                        //if (typeMod == -1) factor = 16;
                        //if (typeMod <= -2) factor = 32;
                var damage = this.damage(pokemon.maxhp/factor);
            }
        }
    },
        "wildcharge": {
                num: 528,
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target. If the target lost HP, the user takes recoil damage equal to 1/4 that HP, rounded half up, but not less than 1HP. Makes contact.",
                shortDesc: "Has 1/4 recoil.",
                id: "wildcharge",
                isViable: true,
                name: "Wild Charge",
                pp: 15,
                priority: 0,
                isContact: true,
                recoil: [1,4],
                secondary: false,
                target: "normal",
                type: "Electric"
        },
        "submission": {
                num: 66,
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target. If the target lost HP, the user takes recoil damage equal to 1/4 that HP, rounded half up, but not less than 1HP. Makes contact.",
                shortDesc: "Has 1/4 recoil.",
                id: "submission",
                name: "Submission",
                pp: 25,
                priority: 0,
                isContact: true,
                recoil: [1,4],
                secondary: false,
                target: "normal",
                type: "Fighting"
        },
        "rockslide:": {
                inherit: true,
                accuracy: 100,
                basePower: 80
        },
        "airslash": {
                inherit: true
                accuracy: 100,
                basePower: 80
        },
        "spiderweb": {
                num: 169,
                accuracy: 90,
                basePower: 90,
                category: "Special",
                desc: "Deals damage and prevents one adjacent target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves.",
                shortDesc: "Deals damage and the target cannot switch out.",
                id: "spiderweb",
                isViable: true,
                name: "Spider Web",
                pp: 10,
                priority: 0,
                onHit: function(target) {
                        target.addVolatile('trapped');
                },
                secondary: false,
                target: "allAdjacentFoes",
                type: "Bug"
        },
 "shadowball": {
        inherit: true,
        basePower: 90,
          secondary: {
            chance: 10,
            boosts: {
            spd: -1
        }
  },
  "fissure": {
        num: 90,
        accuracy: 90,
        basePower: 140,
        category: "Physical",
        desc: "Deals damage to one adjacent target and lowers the user's Attack by 2 stages.",
        shortDesc: "Lowers the user's Atk by 2.",
        id: "fissure",
        isViable: true,
        name: "Fissure",
        pp: 5,
        priority: 0,
        self: {
        boosts: {
        atk: -2
        }
    },
    secondary: false,
    target: "normal",
    type: "Ground"
  },
  "focusblast": {
        inherit: true,
        accuracy: 85,
        secondary: false
  },
    "lunardance": {
        num: 461,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. Fails if the user is the last unfainted Pokemon in its party.",
        shortDesc: "User faints. Replacement is fully healed, with PP.",
        id: "lunardance",
        isViable: true,
        name: "Lunar Dance",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          spa: 1,
          spe: 1
        },
        secondary: false,
        target: "self",
        type: "Psychic"
  },
    "poisonjab": {
        inherit: true,
        basePower: 40,
        priority: 1,
        secondary: {
          chance: 10
        }
  },
  "shadowpunch": {
          inherit: true,
          basePower: 75
  },
  "ironhead": {
          inherit: true,
          basePower: 90,
          secondary: {
                chance: 10,
                volatileStatus: 'flinch'
          }
  },
        "venoshock": {
                num: 474,
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Deals damage to one adjacent target. Often causes paralysis.",
                shortDesc: "Deals damage with 30% to paralyze foe.",
                id: "venoshock",
                isViable: true,
                name: "Venoshock",
                pp: 10,
                priority: 0,
                secondary: {
                        chance: 30,
                        Status: 'par'
                }
                target: "normal",
                type: "Poison"
        },
  "sleeppowder": {
          inherit: true,
          accuracy: 80
  },
  "hypnosis": {
          inherit: true,
          isViable: true,
          accuracy: 80
  },
    "lockon": {
        num: 199,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Special Attack and Accuracy.",
        shortDesc: "Boosts SpA and Acc.",
        id: "lockon",
        isViable: true,
        name: "Lock-On",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          spa: 1,
          accuracy: 1
        },
        secondary: false,
        target: "self",
        type: "Normal"
  },
     "howl": {
        num: 336,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Attack, Special Attack and Speed.",
        shortDesc: "Boosts Atk, SpA and Spe.",
        id: "howl",
        isViable: true,
        name: "Howl",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          atk: 1,
          spa: 1,
          spe: 1
        },
        secondary: false,
        target: "self",
        type: "Dark"
  },
     "sharpen": {
        num: 159,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Attack by three stages.",
        shortDesc: "Boosts Atk by 3 stages.",
        id: "sharpen",
        isViable: true,
        name: "Sharpen",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          atk: 3
        },
        secondary: false,
        target: "self",
        type: "Steel"
  },
   "flameburst": {
        inherit: true,
        basePower: 40,
        isViable: true,
        priority: 1,
        secondary: false,
        }
  },
  "poisontail": {
          inherit: true,
          isViable: true,
          basePower: 95
  },
  "stoneedge": {
          inherit: true,
          accuracy: 90,
          critRatio: 1
  },
  "hex": {
          inherit: true,
          isViable: true,
          basePower: 60
  },
          "rage": {
                num: 99,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 50% chance to raise the user's Attack by 1 stage.",
                shortDesc: "50% chance to boost the user's Atk by 1.",
                id: "rage",
                isViable: true,
                name: "Rage",
                pp: 15,
                priority: 0,
                secondary: {
                        chance: 50,
                        self: {
                        boosts: {
                                atk: 1
                                }
                        }
                },
                target: "normal",
                type: "Normal"
        },
        "blackhole": {
                num: -100,
                accuracy: 90,
                basePower: 140,
                category: "Special",
                desc: "Deals damage to one adjacent target and lowers the user's Special Attack by 2 stages.",
                shortDesc: "Lowers the user's Sp. Atk by 2.",
                id: "blackhole",
                isViable: true,
                name: "Black Hole",
                pp: 5,
                priority: 0,
                self: {
                        boosts: {
                                spa: -2
                        }
                },
                secondary: false,
                target: "normal",
                type: "Dark"
        },
          "gammastrike": {
                num: -101,
                accuracy: 90,
                basePower: 140,
                category: "Physical",
                desc: "Deals damage to one adjacent target and lowers the user's Attack by 2 stages.",
                shortDesc: "Lowers the user's Atk by 2.",
                id: "gammastrike",
                isViable: true,
                name: "Gamma Strike",
                pp: 5,
                priority: 0,
                self: {
                        boosts: {
                                atk: -2
                        }
                },
                secondary: {
                        chance: 20,
                        Status: 'tox'
                target: "normal",
                type: "Poison"
        },
        "shieldbash": {
                num: -102,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Deals damage to one adjacent target based on Defense instead of Attack.",
                shortDesc: "Damages based on Def, not Atk.",
                id: "shieldbash",
                isViable: true,
                name: "Shield Bash",
                pp: 10,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Steel"
        },
        "paleowave": {
                num: -103
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 10% chance to increase Special Attack.",
                shortDesc: "10% chance to increase SpA by 1.",
                id: "paleowave",
                isViable: true,
                name: "Paleo Wave",
                pp: 15,
                priority: 0,
                secondary: {
                        chance: 10,
                        self: {
                                boosts: {
                                        spa: 1
                                }
                        }
                },
                target: "normal",
                type: "Rock"
        },
        "shadowstrike": {
                num: -104
                accuracy: 95,
                basePower: 80,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 50% chance to lower its Defense by 1 stage. Makes contact.",
                shortDesc: "50% chance to lower the target's Defense by 1.",
                id: "shadowstrike",
                isViable: true,
                name: "ShadowStrike",
                pp: 10,
                priority: 0,
                isContact: true,
                secondary: {
                        chance: 50,
                        boosts: {
                                def: -1
                                }
                },
                target: "normal",
                type: "Ghost"
        },
        "toxic": {
                inherit: true,
                accuracy: 100
        },
        "willowisp": {
                inherit: true,
                accuracy: 100
        },
        "leechseed": {
                inherit: true,
                accuracy: 100
        },
        "firefang": {
                inherit: true,
                accuracy: 100
        },
        "icefang": {
                inherit: true,
                accuracy: 100
        },
        "thunderfang": {
                inherit: true,
                accuracy: 100
        },
        "icywind": {
                inherit: true,
                accuracy: 100
        },
        "stunspore": {
                inherit: true,
                accuracy: 100
        },
        "poisonpowder": {
                inherit: true,
                accuracy: 100
        },
        "hiddenstrikebug": {
                num: -105
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikebug",
                name: "Hidden Strike Bug",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Bug"
        },
        "hiddenstrikedark": {
                num: -106
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikedark",
                isViable: true,
                name: "Hidden Strike Dark",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Dark"
        },
        "hiddenstrikedragon": {
                num: -107
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikedragon",
                name: "Hidden Strike Dragon",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Dragon"
        },
        "hiddenstrikeelectric": {
                num: -108
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikeelectric",
                isViable: true,
                name: "Hidden Strike Electric",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Electric"
        },
        "hiddenstrikefighting": {
                num: -109
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikefighting",
                isViable: true,
                name: "Hidden Strike Fighting",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Fighting"
        },
        "hiddenstrikefire": {
                num: -110
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikefire",
                isViable: true,
                name: "Hidden Strike Fire",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Fire"
        },
        "hiddenstrikeflying": {
                num: -111
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikeflying",
                name: "Hidden Strike Flying",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Flying"
        },
        "hiddenstrikeghost": {
                num: -112
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikeghost",
                isViable: true,
                name: "Hidden Strike Ghost",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Ghost"
        },
        "hiddenstrikegrass": {
                num: -113
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikegrass",
                name: "Hidden Strike Grass",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Grass"
        },
        "hiddenstrikeground": {
                num: -114
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikeground",
                isViable: true,
                name: "Hidden Strike Ground",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Ground"
        },
        "hiddenstrikeice": {
                num: -115
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikeice",
                isViable: true,
                name: "Hidden Strike Ice",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Ice"
        },
        "hiddenstrikepoison": {
                num: -116
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikepoison",
                name: "Hidden Strike Poison",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Poison"
        },
        "hiddenstrikepsychic": {
                num: -117
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikepsychic",
                name: "Hidden Strike Psychic",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Psychic"
        },
        "hiddenstrikerock": {
                num: -118
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikerock",
                isViable: true,
                name: "Hidden Strike Rock",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Rock"
        },
        "hiddenstrikesteel": {
                num: -119
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikesteel",
                name: "Hidden Strike Steel",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Steel"
        },
        "hiddenstrikewater": {
                num: -120
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "hiddenstrikewater",
                name: "Hidden Strike Water",
                pp: 15,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Water"
        },
 }; 
