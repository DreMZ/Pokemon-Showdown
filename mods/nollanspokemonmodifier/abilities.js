exports.BattleAbilities = {
  "healer": {
          desc: "Heals 1\/25 HP each turn.",
        shortDesc: "Heals 1\/25 HP each turn.",
        id: "healer",
        name: "Healer",
        onResidualOrder: 5,
        onResidualSubOrder: 1,
        onResidual: function(pokemon) {
          this.heal(pokemon.maxhp/25);
        },
        rating: 0,
        num: 131
  },
  "arcticrush": {
              desc: "If this Pokemon is active while Hail is in effect, its speed is temporarily increased by 50%. The Pokemon is also immune to Hail damage",
              shortDesc: "If Hail is active, this Pokemon's Speed is 1.5x. Immunity to Hail",
              onImmunity: function(type, pokemon) {
              if (type === 'hail') return false;
              },
              onModifySpe: function(spe, pokemon) {
              if (this.isWeather('hail')) {
              return spe * 1.5;
              }
        },
        id: "arcticrush",
        name: "Arctic Rush",
        rating: 2,
        num: 2000
  },
  "swiftswim": {
        desc: "If this Pokemon is active while Rain Dance is in effect, its speed is temporarily increased by 50%.",
        shortDesc: "If Rain Dance is active, this Pokemon's Speed is 1.5x.",
        onModifySpe: function(spe, pokemon) {
          if (this.isWeather('raindance')) {
            return spe * 1.5;
            }
        },
        id: "swiftswim",
        name: "Swift Swim",
        rating: 2,
        num: 33
  },
  "chlorophyll": {
        desc: "If this Pokemon is active while Sunny Day is in effect, its speed is temporarily increased by 50%.",
        shortDesc: "If Sunny Day is active, this Pokemon's Speed is 1.5x.",
        onModifySpe: function(spe) {
          if (this.isWeather('sunnyday')) {
            return spe * 1.5;
            }
        },
        id: "chlorophyll",
        name: "Chlorophyll",
        rating: 2,
        num: 34
  },
  "sandrush": {
        desc: "If this Pokemon is active while Sandstorm is in effect, its speed is temporarily increased by 50%. The Pokemon is also immune to Sandstorm damage",
        shortDesc: "If Sandstorm is active, this Pokemon's Speed is 1.5x. Immunity to Sandstorm",
        onModifySpe: function(spe, pokemon) {
          if (this.isWeather('sandstorm')) {
            return spe * 1.5;
            }
        },
        onImmunity: function(type, pokemon) {
          if (type === 'sandstorm') return false;
        },
        id: "sandrush",
        name: "Sand Rush",
        rating: 2,
        num: 146
  },
  "lightmetal": {
        inherit: true,
        desc: "The user's speed is increased by 20%, and the user's weight is halved. The weight loss decreases the damage taken from Low Kick and Grass Knot, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
        shortDesc: "This Pokemon's speed is increased by 20%, and weight is halved.",
        onModifySpe: function(spe) {
          return spe * 1.2;
          }
  },
    "heavymetal": {
        inherit: true,
        desc: "The user's defense is increased by 20%, and the user's weight is doubled. The weight gain increases the damage given from Heavy Slam and Heat Crash, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
        shortDesc: "This Pokemon's defense is increased by 20%, and weight is doubled.",
        onModifyDef: function(def) {
          return def * 1.2;
          }
  },
  "zenmode": {
        desc: "When Darmanitan enters the battle, it will enter Zen Mode. This ability only works on Darmanitan, even if it is copied by Role Play, Entrainment, or swapped with Skill Swap.",
        shortDesc: "If this Pokemon is Darmanitan, it changes to Zen Mode.",
        onStart: function(pokemon) {
          if (pokemon.template.speciesid==='darmanitan' && pokemon.transformInto('Darmanitan-Zen')) {
          pokemon.transformed = false;
          this.add('-formechange', pokemon, 'Darmanitan-Zen');
          this.add('-message', 'Zen Mode triggered! (placeholder)');
            } else {
            return false;
            }
        },
        id: "zenmode",
        name: "Zen Mode",
        rating: 3,
        num: 161
  },
};
  "solarpower": {
        desc: "If this Pokemon is active while Sunny Day is in effect, its Special Attack temporarily receives a 30% boost.",
        shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('sunnyday')) {
            return spa * 1.3;
            }
        },
        id: "solarpower",
        name: "Solar Power",
        rating: 1.5,
        num: 94
  },
    "snowcloak": {
        desc: "If this Pokemon is active while Hail is in effect, its Special Attack temporarily receives a 30% boost. ",
        shortDesc: "If Hail is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('hail')) {
            return spa * 1.3;
            }
        },
        id: "snowcloak",
        name: "Snow Cloak",
        rating: 1.5,
        num: 81
  },
  "waterveil": {
        desc: "If this Pokemon is active while Rain Dance is in effect, its Special Attack temporarily receives a 30% boost.",
        shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('raindance')) {
            return spa * 1.3;
            }
        },
        id: "waterveil",
        name: "Water Veil",
        rating: 1.5,
        num: 41
  },
  "sandforce": {
        desc: "If this Pokemon is active while Sandstorm is in effect, its Attack temporarily receives a 30% boost.",
        shortDesc: "If Sandstorm is active, this Pokemon's Atk is 1.3x.",
        onModifyAtk: function(atk, pokemon) {
          if (this.isWeather('sandstorm')) {
            return atk * 1.3;
            }
        },
        id: "sandforce",
        name: "Sand Force",
        rating: 1.5,
        num: 159
  },
  "solidify": {
        desc: "While this Pokemon is active, its Defense increases by one stage at the end of every turn; the six stage maximum for stat boosts is still in effect.",
        shortDesc: "This Pokemon's Defense is boosted by 1 at the end of each full turn on the field.",
        onResidualOrder: 26,
        onResidualSubOrder: 1,
        onResidual: function(pokemon) {
          if (pokemon.activeTurns) {
          this.boost({def:1});
          }
        },
        id: "solidify",
        name: "Solidify",
        rating: 4.5,
        num: 2001
  },
  "filter": {
        desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
        shortDesc: "This Pokemon receives one-half damage from super effective attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) > 0) {
            this.debug('Filter neutralize');
            return basePower * 1/2;
          }
        },
        id: "filter",
        name: "Filter",
        rating: 3,
        num: 111
  },
  "solidrock": {
        desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
        shortDesc: "This Pokemon receives 1/2 damage from super effective attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) > 0) {
            this.debug('Solid Rock neutralize');
            return basePower * 1/2;
            }
        },
        id: "solidrock",
        name: "Solid Rock",
        rating: 3,
        num: 116
  },
  "gravitation": {
        desc: "When this Pokemon enters the battlefield, it causes a 5-turn Gravity.",
        shortDesc: "On switch-in, this Pokemon summons Gravity for 5 turns.",
        this.debug("Starting Gravity");
         onStart: function(pokemon) {
          if (this.pseudoWeather['gravity']) {
            this.removePseudoWeather('gravity', pokemon, pokemon);
        }
        this.addPseudoWeather('gravity', pokemon, pokemon);
        this.pseudoWeather['gravity'].duration = 5;
        },
        id: "gravitation",
        name: "Gravitation",
        rating: 5,
        num: 2002
  },
    "trickster" : {
        desc: "When this Pokemon enters the battlefield, it causes a permanent Toxic Rain that can only be stopped by Air Lock, Cloud Nine or another weather condition.",
        shortDesc: "On switch-in, this Pokemon summons Toxic Rain until another weather replaces it.",
        onStart: function(pokemon) {
          this.debug("Starting Trick Room");
          if (this.pseudoWeather['trickroom']) {
            this.removePseudoWeather('trickroom', pokemon, pokemon);
        }
        this.addPseudoWeather('trickroom', pokemon, pokemon);
        this.pseudoWeather['trickroom'].duration = 5;
        },
        id: "trickster",
        name: "Trickster",
        rating: 5,
        num: 2003
  },
  "ancientwind": {
        desc: "When this Pokemon enters the battlefield, it causes a 4-turn Tailwind.",
        shortDesc: "On switch-in, this Pokemon summons Tailwind for 4 turns.",
        onStart: function(pokemon) {
         this.debug("Starting Tailwind");
        this.addPseudoWeather('tailwind', pokemon, pokemon);
        this.pseudoWeather['tailwind'].duration = 4;
        id: "ancientwind",
        name: "Ancient Wind",
        rating: 5,
        num: 2004
  },
  "dauntless": {
        desc: "When a Pokemon with Dauntless faints another Pokemon, its Special Attack rises by one stage.",
        shortDesc: "This Pokemon's Special Attack is boosted by 1 if it attacks and faints another Pokemon.",
        onSourceFaint: function(target, source, effect) {
          if (effect && effect.effectType === 'Move') {
            this.boost({spa:1}, source);
            }
        },
        id: "dauntless",
        name: "Dauntless",
        rating: 4,
        num: 2005
  },
  "adrenaline": {
        desc: "When a Pokemon with Adrenaline faints another Pokemon, its Speed rises by one stage.",
        shortDesc: "This Pokemon's Speed is boosted by 1 if it attacks and faints another Pokemon.",
        onSourceFaint: function(target, source, effect) {
          if (effect && effect.effectType === 'Move') {
            this.boost({spe:1}, source);
            }
        },
        id: "adrenaline",
        name: "Adrenaline",
        rating: 4,
        num: 2006
  },
  "purepower": {
        desc: "This Pokemon's Special Attack stat is doubled. Therefore, if this Pokemon's Special Attack stat on the status screen is 200, it effectively has an Attack stat of 400; which is then subject to the full range of stat boosts and reductions.",
        shortDesc: "This Pokemon's Special Attack is doubled.",
        onModifySpA: function(spa) {
        return spa * 2;
        },
        id: "purepower",
        name: "Pure Power",
        rating: 5,
        num: 74
  },
  "caution": {
        desc: "If this Pokemon switches into an opponent with equal Offenses or higher Attack than Special Attack, this Pokemon's Defense receives a 50% boost. If this Pokemon switches into an opponent with higher Special Attack than ATtack, this Pokemon's Special Defense receive a 50% boost.",
        shortDesc: "On switch-in, Defense or Sp. Def is boosted by 1 based on the foes' weaker Offense.",
        onStart: function (pokemon) {
          var foeactive = pokemon.side.foe.active;
          var totalatk = 0;
          var totalspa = 0;
          for (var i=0; i<foeactive.length; i++) {
          if (!foeactive[i] || foeactive[i].fainted) continue;
        totalatk += foeactive[i].getStat('atk');
        totalspa += foeactive[i].getStat('spa');
        }
          if (totalatk && totalatk >= totalspa) {
          this.boost({spd:1});
          } else if (totalspa) {
          this.boost({def:1});
          }
        },
        id: "caution",
        name: "Caution",
        rating: 4,
        num: 2007
  },
  "icebody": {
        desc: "If active while Hail is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Ice-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Hail.",
        shortDesc: "If Hail is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Hail.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'hail') {
          this.heal(target.maxhp/12);
          }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'hail') return false;
        },
        id: "icebody",
        name: "Ice Body",
        rating: 3,
        num: 115
  },
    "sandveil": {
        desc: "If active while Snadstorm is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Rock, Ground, or Steel-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Sandstorm.",
        shortDesc: "If Sadnstorm is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Sandstorm.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'sandstorm') {
          this.heal(target.maxhp/12);
          }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'sandstorm') return false;
        },
        id: "sandveil",
        name: "Sand Veil",
        rating: 3,
        num: 8
  },
  "raindish": {
        desc: "If active while Rain Dance is in effect, this Pokemon recovers one-twelfth of its max HP after each turn.",
        shortDesc: "If Rain Dance is active, this Pokemon heals 1/12 of its max HP each turn.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'raindance') {
          this.heal(target.maxhp/12);
          }
        },
        id: "raindish",
        name: "Rain Dish",
        rating: 3,
        num: 44
  },
  "illuminate": {
        desc: "Raises this Pokemon's (and it's allies') accuracy by 20% (multiplied).",
        shortDesc: "This Pokemon's and its allies' moves have their accuracy boosted to 1.2x.",
        onAllyModifyMove: function(move) {
          if (typeof move.accuracy === 'number') {
          move.accuracy *= 1.2;
          }
        },
        id: "illuminate",
        name: "Illuminate",
        rating: 2,
        num: 35
  },
    "marvelscale": {
        desc: "Doubles damage given when at maximum HP.",
        shortDesc: "If this Pokemon is at full HP, it deals double damage with attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (attacker.hp >= attacker.maxhp) {
            this.debug('Marvel Scale boost');
           onModifySpA: function(spa) {
        return spa * 2;
            },
         if (attacker.hp >= attacker.maxhp) {
           onModifyAtk: function(atk) {
        return atk * 2;
            }
        },
        id: "marvelscale",
        name: "Marvel Scale",
        rating: 4,
        num: 63
  },
  "machscale": {
        desc: "Doubles speed when at maximum HP.",
        shortDesc: "If this Pokemon is at full HP, it has doubled speed.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (attacker.hp >= attacker.maxhp) {
            this.debug('Mach Scale boost');
            onModifySpe: function(spe) {
              return spe * 2;
            }
        },
        id: "marvelscale",
        name: "Marvel Scale",
        rating: 4,
        num: 2008
  },

  "tempest": {
        desc: "When this Pokemon enters the field, Water and Flying-type opponents cannot switch out nor flee the battle unless they are holding Shed Shell or use the attacks U-Turn or Baton Pass.",
        shortDesc: "Prevents Water and Flying-type foes from switching out normally.",
        onFoeModifyPokemon: function(pokemon) {
          if (pokemon.hasType('Water') || pokemon.hasType('Flying')) {
          pokemon.trapped = true;
          }
        },
        id: "tempest",
        name: "Tempest",
        rating: 5,
        num: 2009
        },
  "angerpoint": {
        desc: "If this Pokemon, or its Substitute, is struck by a Critical Hit, its Attack is boosted to six stages.",
        shortDesc: "If this Pokemon (not a Substitute) is hit by a critical hit, its Attack is boosted by 12.",
        onBasePower: function(basePower, attacker, defender, move) {
          if (move.category === "Physical" && attacker.hp <= attacker.maxhp/3) {
            this.debug('Anger Point boost');
            return basePower * 1.5;
            }
        },
        id: "angerpoint",
        name: "Anger Point",
        rating: 2,
        num: 83
        },
  "battlearmor": {
        desc: "Not very effective hits do two thirds damage to this pokemon.",
        shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) < 0) {
            this.debug('Battle Armor Weaken');
            return basePower*2/3;
            }
        },
        id: "battlearmor",
        name: "Battle Armor",
        rating: 1,
        num: 4
        },
 "shellarmor": {
        desc: "Not very effective hits do two thirds damage to this pokemon.",
        shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) < 0) {
            this.debug('Shell Armor Weaken');
            return basePower*2/3;
            }
        },
        id: "shellarmor",
        name: "Shell Armor",
        rating: 1,
        num: 75
        },
  "clearbody": {
        desc: "This pokemon's stats cannot be lowered.",
        shortDesc: "This pokemon's stats cannot be lowered.",
        onBoost: function(boost) {
          for (var i in boost) {
            if (boost[i] < 0)
            boost[i] = 0;
            }
        },
        id: "clearbody",
        name: "Clear Body",
      rating: 2,
      num: 29
      },
  "whitesmoke": {
        desc: "This pokemon's stats cannot be lowered.",
        shortDesc: "This pokemon's stats cannot be lowered.",
        onBoost: function(boost) {
          for (var i in boost) {
            if (boost[i] < 0)
            boost[i] = 0;
            }
        },
        id: "whitesmoke",
        name: "White Smoke",
      rating: 2,
      num: 73
      },
  "defeatist": {
        desc: "Speed is halved when HP is less than half.",
        shortDesc: "When this Pokemon has 1/2 or less of its max HP, its Speed is halved.",
        onModifySpe: function(spe, pokemon) {
          if (pokemon.hp < pokemon.maxhp/2) {
            return spe / 2;
            }
        },
        onResidual: function(pokemon) {
        pokemon.update();
        },
        id: "defeatist",
        name: "Defeatist",
        rating: -1,
        num: 129
        },
  "hypercutter": {
        desc: "This Pokemon receives a 20% power boost for the following attacks:.",
        shortDesc: "This Pokemon's slash-based attacks do 1.2x damage.",
        onBasePower: function(basePower, attacker, defender, move) {
          if (move.isSlashAttack) {
            this.debug('Hyper Cutter boost');
            return basePower * 12/10;
            }
        },
        id: "hypercutter",
        name: "Hyper Cutter",
        rating: 3,
        num: 52
        },
    "persistent": {
        desc: "Increases the duration of many field effects to eight turns when used by this Pokémon.",
        shortDesc: "The duration of certain field effects becomes 8 turns if used by this Pokemon.",
        id: "persistent",
        name: "Persistent",
// implemented in the corresponding move
        rating: 4,
        num: -4
        }
  };
