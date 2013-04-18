//this is a work draft for when I manage to find time to work on this, it shouldn't affect the serv since no formats have it coded into them atm
        randomDoublesTeam: function(side) {
                var seasonalPokemonList = ['abomasnow', 'accelgor', 'aerodactyl', 'aipom', 'alakazam', 'ambipom', 'amoonguss', 'arcanine', 'arceus-dragon', 'arceus-electric', 'arceus-fire', 'arceus-ghost', 'arceus-ground', 'arceus-normal', 'arceus-steel', 'arceus-water', 'archeops', 'armaldo', 'articuno', 'azelf', 'azumarill', 'beheeyem', 'bisharp', 'blaziken', 'blissey', 'bouffalant', 'breloom', 'bronzong', 'bronzor', 'cacturne', 'camerupt', 'celebi', 'chandelure', 'chansey', 'clefable', 'clefairy', 'cloyster', 'cofagrigus', 'combusken', 'conkeldurr', 'cottonee', 'crawdaunt', 'cresselia', 'crobat', 'darkrai', 'darmanitan', 'deoxys-attack', 'deoxys-defense', 'deoxys-speed', 'dialga', 'diglett', 'dodrio', 'dragonite', 'drilbur', 'druddigon', 'dugtrio', 'duosion', 'durant', 'dusclops', 'dusknoir', 'eelektross', 'emboar', 'empoleon', 'escavalier', 'excadrill', 'exeggcute', 'exeggutor', 'ferroseed', 'ferrothorn', 'flygon', 'foongus', 'fraxure', 'froslass', 'gallade', 'galvantula', 'garchomp', 'gastrodon', 'gengar', 'gigalith', 'giratina', 'glaceon', 'gliscor', 'golduck', 'gorebyss', 'groundon', 'gurdurr', 'gyarados', 'hariyama', 'haxorus', 'heatran', 'heracross', 'herdier', 'hippopotas', 'hippowdon', 'hitmonchan', 'hitmonlee', 'hitmontop', 'honchkrow', 'ho-oh', 'houndoom', 'hydreigon', 'hypno', 'infernape', 'jellicent', 'jirachi', 'jolteon', 'jumpluff', 'jynx', 'kabutops', 'kadabra', 'kangaskhan', 'keldeo', 'kingdra', 'kingler', 'krookodile', 'kyogre', 'kyurem', 'kyurem-black', 'kyurem-white', 'lampent', 'landorus', 'landorus-therian', 'lanturn', 'lapras', 'latias', 'latios', 'lickilicky', 'lucario', 'ludicolo', 'lugia', 'machamp', 'machoke', 'magneton', 'magnezone', 'mamoswine', 'manaphy', 'manectric', 'marowak', 'medicham', 'meloetta', 'metagross', 'metang', 'mew', 'mewtwo', 'mienfoo', 'mienshao', 'moltres', 'murkrow', 'musharna', 'nidoking', 'nidoqueen', 'ninetales', 'ninjask', 'octillery', 'palkia', 'parasect', 'persian', 'pikachu', 'politoed', 'poliwrath', 'porygon-z', 'porygon2', 'qwilfish', 'raichu', 'raikou', 'regice', 'regigigas', 'regirock', 'registeel', 'relicanth', 'reshiram', 'reuniclus', 'rhydon', 'rhyperior', 'roserade', 'rotom-frost', 'rotom-heat', 'rotom-mow', 'rotom-wash', 'sableye', 'salamence', 'scizor', 'scrafty', 'scraggy', 'seaking', 'serperior', 'shedinja', 'shiftry', 'shuckle', 'slowbro', 'slowking', 'smeargle', 'sneasel', 'snorlax', 'snover', 'staraptor', 'starmie', 'stoutland', 'suicune', 'swampert', 'tangela', 'tangrowth', 'terrakion', 'thundurus', 'thundurus-therian', 'togekiss', 'togetic', 'tornadus', 'tornadus-therian', 'torterra', 'toxicroak', 'typhlosion', 'tyranitar', 'ursaring', 'uxie', 'vaporeon', 'venusaur', 'victini', 'virizion', 'volcarona', 'vulpix', 'wailmer', 'wailord', 'weavile', 'whimsicott', 'wobbuffet', 'yanmega', 'zapdos', 'zebstrika', 'zekrom', 'zoroark', 'zweilous'];
                
                seasonalPokemonList = seasonalPokemonList.randomize();
                var team = [];
                var mustHaveCloseCombat = {
                hitmontop:1,
                };
                var mustHaveHeatWave = {
                chandelure:1,
                };
                var mustHaveBlizzard = {
                abomasnow:1,
                };
                var mustHaveBugBuzz = {
                accelgor:1,
                };
                var mustHaveFinalGambit = {
                accelgor:1,
                };
                var mustHaveRockSlide = {
                aerodactyl:1,
                };
                var mustHaveReturn = {
                aipom:1, ambipom:1,
                };
                var mustHaveFakeOut = {
                aipom:1, ambipom:1,
                };
                for (var i=0; i<6; i++) {
                        var pokemon = seasonalPokemonList[i];
                        var template = this.getTemplate(pokemon);
                        var set = this.randomSet(template, i);
                        
                        if (template.id === 'abomasnow') {
                                var items = ['Ice Gem', 'Focus Sash'];
                                items = items.randomize();
                                set.evs = {hp: 252, def: 4, spd: 0, spa: 252, atk: 0, spe: 0};
                                set.ability = 'Snow Warning';
                                set.nature = 'Quiet';
                                delete template.viableMoves.focusblast;
                                delete template.viableMoves.leechseed;
                                delete template.viableMoves.substitute;
                                template.viableMoves.protect = 1;
                                template.viableMoves.lightscreen = 1;
                                template.viableMoves.icywind = 1;
                        } else if (template.id === 'accelgor') {
                                set.item = 'Bug Gem';
                                set.evs = {hp: 252, def: 0, spd: 0, spa: 220, atk: 0, spe: 36};
                                set.ability = 'Unburden';
                                set.nature = 'Timid';
                                delete template.viableMoves.focusblast;
                                delete template.viableMoves.gigadrain;
                                delete template.viableMoves.yawn;
                                delete template.viableMoves.spikes;
                                template.viableMoves.finalgambit = 1;
                                template.viableMoves.protect = 1;
                                template.viableMoves.raindance = 1;
                                template.viableMoves.acidspray = 1;
                        } else if (template.id === 'aerodactyl') {
                                var items = ['Focus Sash', 'Rock Gem'];
                                items = items.randomize();
                                set.evs = {hp: 4, def: 0, spd: 0, spa: 0, atk: 252, spe: 252};
                                set.ability = 'Unnerve';
                                set.nature = 'Jolly';
                                delete template.viableMoves.aquatail;
                                delete template.viableMoves.firefang;
                                delete template.viableMoves.roost;
                                delete template.viableMoves.stealthrock;
                                delete template.viableMoves.stoneedge;
                                template.viableMoves.skydrop = 1;
                                template.viableMoves.tailwind = 1;
                                template.viableMoves.protect = 1;
                        } else if (template.id === 'aipom') {
                                var items = ['Normal Gem', 'Focus Sash', 'Eviolite'];
                                items = items.randomize();
                                set.evs = {hp: 4, def: 0, spd: 0, spa: 0, atk: 252, spe: 252};
                                set.ability = 'Skill Link';
                                set.nature = 'Jolly';
                                delete template.viableMoves.brickbreak;
                                delete template.viableMoves.seedbomb;
                                delete template.viableMoves.shadowclaw;
                                delete template.viableMoves.uturn;
                                template.viableMoves.beatup = 1;
                                template.viableMoves.protect = 1;
                                template.viableMoves.thunderwave = 1;
                                template.viableMoves.acrobatics = 1;
                        } else if (template.id === 'alakazam') {
                                var items = ['Life Orb', 'Focus Sash'];
                                items = items.randomize();
                                set.evs = {hp: 4, def: 0, spd: 0, spa: 252, atk: 0, spe: 252};
                                set.ability = 'Magic Guard';
                                set.nature = 'Timid';
                                delete template.viableMoves.calmmind;
                                delete template.viableMoves.encore;
                                delete template.viableMoves.substitute;
                                template.viableMoves.protect = 1;
                        } else if (template.id === 'ambipom') {
                                var items = ['Normal Gem', 'Life Orb'];
                                items = items.randomize();
                                set.evs = {hp: 4, def: 0, spd: 0, spa: 0, atk: 252, spe: 252};
                                set.ability = 'Technician';
                                set.nature = 'Jolly';
                                delete template.viableMoves.lowsweep;
                                delete template.viableMoves.payback;
                                delete template.viableMoves.seedbomb;
                                delete template.viableMoves.switcheroo;
                                delete template.viableMoves.uturn;
                                template.viableMoves.beatup = 1;
                                template.viableMoves.lowkick = 1;
                                template.viableMoves.acrobatics = 1;
                                template.viableMoves.protect = 1;
                        } else if (template.id === 'chandelure') {
                                var items = ['Fire Gem', 'Shuca Berry'];
                                items = items.randomize();
                                set.evs = {hp: 252, def: 0, spd: 4, spa: 252, atk: 0, spe: 0};
                                set.ability = 'Flash Fire';
                                set.nature = 'Modest';
                                delete template.viableMoves.calmmind;
                                delete template.viableMoves.fireblast;
                                delete template.viableMoves.overheat;
                                delete template.viableMoves.energyball;
                                delete template.viableMoves.trick;
                                template.viableMoves.heatwave = 1;
                                template.viableMoves.protect = 1;
                                template.viableMoves.trickroom = 1;
                                template.viableMoves.imprison = 1;
                        } else if (template.id === 'hitmontop') {
                                set.item = 'Fighting Gem';
                                set.evs = {hp: 252, def: 0, spd: 4, spa: 0, atk: 252, spe: 0};
                                set.ability = 'Intimidate';
                                set.nature = 'Adamant';
                                delete template.viableMoves.toxic;
                                delete template.viableMoves.rapidspin;
                                delete template.viableMoves.machpunch;
                                template.viableMoves.protect = 1;
                                template.viableMoves.fakeout = 1;
                                template.viableMoves.rockslide = 1;
                                template.viableMoves.helpinghand = 1;
                                template.viableMoves.wideguard = 1;
                                template.viableMoves.feint = 1;
                        }
                        var set = this.randomSet(seasonalPokemonList[i], i);
                        var customScale = {
                        Abomasnow: 90, Accelgor: 95, Aerodactyl: 90, Aipom: 99, Alakazam: 90, Ambipom: 90, Amoonguss: 85, Arcanine: 90, Arceus-Dragon: 75, Arceus-Electric: 75, Arceus-Fire: 75, Arceus-Ghost: 75, Arceus-Ground: 75, Arceus-Normal: 75, Arceus-Steel: 75, Arceus-Water: 75, Archeops: 90, Armaldo: 90, Articuno: 90, Azelf: 90, Azumarill: 90, Beheeyem: 90, Bisharp: 90, Blaziken: 85, Blissey: 90, Bouffalant: 90, Breloom: 85, Bronzong: 85, Bronzor: 99, Cacturne: 95, Camerupt: 90, Celebi: 85, Chandelure: 85, Chansey: 95, Clefable: 95, Clefairy: 99, Cloyster: 90, Cofagrigus: 90, Combusken: 95, Conkeldurr: 85, Cottonee: 99, Crawdaunt: 95, Cresselia: 85, Crobat: 90, Darkrai: 75, Darmanitan: 90, Deoxys-Attack: 75, Deoxys-Defense: 85, Deoxys-Speed: 75, Dialga: 75, Diglett: 99, Dodrio: 95, Dragonite: 85, Drilbur: 99, Druddigon: 95, Dugtrio: 90, Duosion: 99, Durant: 90, Dusclops: 85, Dusknoir: 90, Eelektross: 90, Emboar: 95, Empoleon: 90, Escavalier: 95, Excadrill: 85, Exeggcute: 99, Exeggutor: 90, Ferroseed: 95, Ferrothorn: 85, Flygon: 90, Foongus: 99, Fraxure: 99, Froslass: 90, Gallade: 90, Galvantula: 90, Garchomp: 85, Gastrodon: 85, Gengar: 90, Gigalith: 95, Giratina: 75, Glaceon: 95, Gliscor: 90, Golduck: 95, Gorebyss: 90, Groudon: 75, Gurdurr: 99, Gyarados: 90, Hariyama: 95, Haxorus: 90, Heatran: 85, Heracross: 90, Herdier: 99, Hippopotas: 99, Hippowdon: 90, Hitmonchan: 90, Hitmonlee: 90, Hitmontop: 85, Honchkrow: 90, Ho-oh: 75, Houndoom: 90, Hydreigon: 85, Hypno: 95, Infernape: 90, Jellicent: 85, Jirachi: 85, Jolteon: 90, Jumpluff: 95, Jynx: 90, Kabutops: 90, Kadabra: 99, Kangaskhan: 95, Keldeo: 85, Kingdra: 85, Kingler: 95, Krookodile: 90, Kyogre: 75, Kyurem: 90, Kyurem-Black: 85, Kyurem-White: 75, Lampent: 99, Landorus: 85, Landorus-Therian: 85, Lanturn: 95, Lapras: 90, Latias: 85, Latios: 85, Lickilicky: 95, Lucario: 90, Ludicolo: 85, Lugia: 75, Machamp: 90, Machoke: 99, Magnezone: 90, Magneton: 95, Mamoswine: 90, Manaphy: 85, Manectric: 90, Marowak: 90, Medicham: 90, Meloetta: 85, Metagross: 85, Metang: 99, Mew: 85, Mewtwo: 75, Mienfoo: 99, Mienshao: 90, Moltres: 90, Murkrow: 95, Musharna: 90, Nidoking: 90, Nidoqueen: 90, Ninetales: 90, Ninjask: 90, Octillery: 95, Palkia: 75, Parasect: 95, Persian: 95, Pikachu: 99, Politoed: 85, Poliwrath: 95, Porygon-Z: 90, Porygon2: 90, Qwilfish: 95, Raichu: 95, Raikou: 85, Regice: 90, Regigigas: 90, Regirock: 90, Registeel: 90, Relicanth: 90, Reshiram: 75, Reuniclus: 90, Rhydon: 99, Rhyperior: 90, Roserade: 90, Rotom-Frost: 90, Rotom-Heat: 85, Rotom-Mow: 90, Rotom-Wash: 85, Sableye: 85, Salamence: 85, Scizor: 85, Scrafty: 90, Scraggy: 99, Seaking: 95, Serperior: 95, Shedinja: 95, Shiftry: 90, Shuckle: 95, Slowbro: 85, Slowking: 90, Smeargle: 90, Sneasel: 99, Snorlax: 90, Snover: 99, Staraptor: 90, Starmie: 90, Stoutland: 90, Suicune: 85, Swampert: 90, Tangela: 99, Tangrowth: 90, Terrakion: 85, Thundurus: 85, Thundurus-Therian: 85, Togekiss: 90, Togetic: 95, Tornadus: 85, Tornadus-Therian: 85, Torterra: 95, Toxicroak: 90, Typhlosion: 90, Tyranitar: 85, Ursaring: 90, Uxie: 90, Vaporeon: 90, Venusaur: 85, Victini: 85, Virizion: 90, Volcarona: 85, Vulpix: 99, Wailmer: 99, Wailord: 95, Weavile: 85, Whimsicott: 85, Wobbuffet: 90, Yanmega: 90, Zapdos: 85, Zebstrika: 95, Zekrom: 75, Zoroark: 90, Zweilous: 99
                        };
                        team.push(set);
                }
                return team;
        },
