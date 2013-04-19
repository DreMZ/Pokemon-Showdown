exports.BattleScripts = {
        init: function() {
                for (var i in this.data.Pokedex) {
                        var color = '';
                        var adjustment = 0;
                        if (this.data.Pokedex[i]) color = this.data.Pokedex[i].color;
                        switch (color) {
                        case 'Purple':
                                adjustment = 18;
                                break;
                        case 'Red':
                                adjustment = 16;
                                break;
                        case 'Black':
                                adjustment = 14;
                                break;
                        case 'Gray':
                                adjustment = 12;
                                break;
                        case 'Yellow':
                                adjustment = 10;
                                break;
                        case 'White':
                                adjustment = 8;
                                break;
                        case 'Green':
                                adjustment = 6;
                                break;
                        case 'Pink':
                                adjustment = 4;
                                break;
                        case 'Blue':
                                adjustment = 2;
                                break;
                        case 'Brown':
                                adjustment = 0;
                        }
 
                        this.data.Pokedex[i].baseStats.hp += adjustment;
                        this.data.Pokedex[i].baseStats.atk += adjustment;
                        this.data.Pokedex[i].baseStats.def += adjustment;
                        this.data.Pokedex[i].baseStats.spa += adjustment;
                        this.data.Pokedex[i].baseStats.spd += adjustment;
                        this.data.Pokedex[i].baseStats.spe += adjustment;
                }
        }
};
