exports.BattleItems = {  	  
  "nevermeltice": {
        id: "nevermeltice",
        name: "NeverMeltIce",
        spritenum: 305,
        fling: {
          basePower: 30
        },
        onWeather: function(target, source, effect) {
          if (effect.id === 'hail') {
            this.heal(target.maxhp/16);
            }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'hail') return false;
        },
        desc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
  },
  "softsand": {
        id: "softsand",
        name: "Soft Sand",
        spritenum: 456,
        fling: {
          basePower: 10
        },
        onWeather: function(target, source, effect) {
          if (effect.id === 'sandstorm') {
            this.heal(target.maxhp/16);
            }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'sandstorm') return false;
        },
        desc: "If Sandstorm is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Sadnstorm.",
  },
  "silkscarf": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Normal')
          return basePower * 1.3;
        }
  },
  "flameplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Fire')
          return basePower * 1.3;
        }
  },
  "fistplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Fighting')
          return basePower * 1.3;
        }
  },
  "splashplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Water')
          return basePower * 1.3;
        }
  },
  "meadowplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Grass')
          return basePower * 1.3;
        }
  },
  "toxicplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Poison')
          return basePower * 1.3;
        }
  },
  "zapplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Electric')
          return basePower * 1.3;
        }
  },
  "earthplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Ground')
          return basePower * 1.3;
        }
  },
  "mindplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Psychic')
          return basePower * 1.3;
        }
  },
  "stoneplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Rock')
          return basePower * 1.3;
        }
  },
  "icicleplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Ice')
          return basePower * 1.3;
        }
  },
  "insectplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Bug')
          return basePower * 1.3;
        }
  },
  "dracoplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Dragon')
          return basePower * 1.3;
        }
  },
  "spookyplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Ghost')
          return basePower * 1.3;
        }
  },
  "dreadplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Dark')
          return basePower * 1.3;
        }
  },
  "ironplate": {
        inherit: true,
        onBasePower: function(basePower, user, target, move) {
          if (move && move.type === 'Steel')
          return basePower * 1.3;
        }
  },
  "expertbelt": {
        id: "expertbelt",
        name: "Expert Belt",
        spritenum: 132,
        fling: {
          basePower: 10
        },
        onBasePower: function(basePower, user, target, move) {
          if (move && this.getEffectiveness(move.type, target) > 0) {
            return basePower * 1.3;
            }
        },
        desc: "Super effective attacks are 30% stronger."
  },
  "muscleband": {
        id: "muscleband",
        name: "Muscle Band",
        spritenum: 297,
        fling: {
          basePower: 10
        },
        onBasePower: function(basePower, user, target, move) {
          if (move.category === 'Physical') {
            return basePower * 1.2;
            }
        },
        desc: "Raises power of physical moves 20%."
  },
  "wiseglasses": {
        id: "wiseglasses",
        name: "Wise Glasses",
        spritenum: 539,
        fling: {
          basePower: 10
        },
        onBasePower: function(basePower, user, target, move) {
          if (move.category === 'Special') {
            return basePower * 1.2;
            }
        },
        desc: "Raises damage from special moves 20%."
  },
  "quickpowder": {
        id: "quickpowder",
        name: "Quick Powder",
        spritenum: 374,
        fling: {
          basePower: 10
        },
        onModifySpe: function(spe) {
          return spe * 1.1;
        },
        desc: "Boosts Speed by 10%."
  },
  "metalpowder": {
        id: "metalpowder",
        name: "Metal Powder",
        fling: {
          basePower: 10
        },
        spritenum: 287,
        onSourceBasePower: function(basePower, user, target, move) {
          this.debug('-20% reduction');
          return basePower * 0.8;
        },        
        desc: "Reduces damage taken by attacks by 20%."
  },
  "widelens": {
        inherit: true,
        onModifyMove: function(move) {
          if (typeof move.accuracy === 'number') {
            move.accuracy *= 1.3;
            }
        },
        desc: "Raises accuracy 30%."
  },
  "zoomlens": {
        inherit: true,
        onModifyMove: function(move, user, target) {
          if (typeof move.accuracy === 'number' && !this.willMove(target)) {
            this.debug('Zoom Lens boosting accuracy');
            move.accuracy *= 1.5;
            }
        },
        desc: "Raises accuracy by 50% if the holder moves after the target."
  }
};
