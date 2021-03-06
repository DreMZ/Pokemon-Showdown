    exports.BattleMovedex = {    
        "waterpulse": {
              inherit: true,
                basePower: 80
    	},
            "paleowave": {
              inherit: true,
        	isNonstandard: false
    	},
        "submission": {
              inherit: true,
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                secondary: {
                        chance: 10,
                        volatileStatus: 'flinch'
        }
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
			}
	}, 
        "airslash": {
              inherit: true,
                basePower: 90
    },
    "psyshock": {
	      inherit: true,
		basePower: 90
	},
	"icywind": {
	      inherit: true,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "Physical But Deals Special Damage.",
		shortDesc: "Physical but hits on special defense.",
		secondary: false
	}
};  
 

