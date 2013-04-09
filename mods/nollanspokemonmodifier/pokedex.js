exports.BattlePokedex = {
  charizard:{num:6,species:"Charizard",types:["Fire","Dragon"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100},abilities:{0:"Blaze",DW:"Levitate"},heightm:1.7,weightkg:90.5,color:"Red",prevo:"charmeleon",evoLevel:36,eggGroups:["Monster","Dragon"]},
  blastoise:{num:9,species:"Blastoise",types:["Water"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:79,atk:83,def:100,spa:85,spd:105,spe:78},abilities:{0:"Torrent",DW:"Water Veil"},heightm:1.6,weightkg:85.5,color:"Blue",prevo:"wartortle",evoLevel:36,eggGroups:["Monster","Water 1"]},
  clefable:{num:36,species:"Clefable",types:["Normal","Psychic"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:95,atk:70,def:73,spa:85,spd:90,spe:60},abilities:{0:"Friend Guard",1:"Magic Guard",DW:"Unaware"},heightm:1.3,weightkg:40,color:"Pink",prevo:"clefairy",evoLevel:1,eggGroups:["Fairy"]},
  arcanine:{num:59,species:"Arcanine",types:["Fire"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:90,atk:110,def:80,spa:100,spd:80,spe:95},abilities:{0:"Intimidate",1:"Adrenaline",DW:"Justified"},heightm:1.9,weightkg:155,color:"Brown",prevo:"growlithe",evoLevel:1,eggGroups:["Ground"]},
  electrode:{num:101,species:"Electrode",types:["Electric"],gender:"N",baseStats:{hp:60,atk:50,def:70,spa:80,spd:80,spe:140},abilities:{0:"Soundproof",1:"Volt Absorb",DW:"Aftermath"},heightm:1.2,weightkg:66.6,color:"Red",prevo:"voltorb",evoLevel:30,eggGroups:["Mineral"]},
  exeggutor:{num:103,species:"Exeggutor",types:["Grass","Psychic"],baseStats:{hp:95,atk:95,def:85,spa:125,spd:65,spe:55},abilities:{0:"Chlorophyll",1:"Trickster"DW:"Harvest"},heightm:2,weightkg:120,color:"Yellow",prevo:"exeggcute",evoLevel:1,eggGroups:["Plant"]},
  weezing:{num:110,species:"Weezing",types:["Poison","Electric"],baseStats:{hp:65,atk:90,def:120,spa:85,spd:70,spe:60},abilities:{0:"Levitate"},heightm:1.2,weightkg:9.5,color:"Purple",prevo:"koffing",evoLevel:35,eggGroups:["Indeterminate"]},
  chansey:{num:113,species:"Chansey",types:["Normal"],gender:"F",baseStats:{hp:250,atk:5,def:5,spa:35,spd:105,spe:50},abilities:{0:"Natural Cure",1:"Friend Guard",DW:"Healer"},heightm:1.1,weightkg:34.6,color:"Pink",prevo:"happiny",evos:["blissey"],evoLevel:1,eggGroups:["Fairy"]},
  jynx:{num:124,species:"Jynx",types:["Ice","Psychic"],gender:"F",baseStats:{hp:65,atk:50,def:35,spa:115,spd:95,spe:95},abilities:{0:"Caution",1:"Forewarn",DW:"Dry Skin"},heightm:1.4,weightkg:40.6,color:"Red",prevo:"smoochum",evoLevel:30,eggGroups:["Humanshape"]},
  dragonair:{num:148,species:"Dragonair",types:["Dragon","Water"],baseStats:{hp:61,atk:84,def:65,spa:70,spd:70,spe:70},abilities:{0:"Shed Skin",DW:"Marvel Scale"},heightm:4,weightkg:16.5,color:"Blue",prevo:"dratini",evos:["dragonite"],evoLevel:30,eggGroups:["Water 1","Dragon"]},
  mewtwo:{num:150,species:"Mewtwo",types:["Psychic"],gender:"N",baseStats:{hp:106,atk:110,def:90,spa:154,spd:90,spe:130},abilities:{0:"Dauntless",DW:"Unnerve"},heightm:2,weightkg:122,color:"Purple",eggGroups:["No Eggs"]},
  piloswine:{num:221,species:"Piloswine",types:["Ice","Ground"],baseStats:{hp:100,atk:100,def:80,spa:60,spd:60,spe:50},abilities:{0:"Arctic Rush",1:"Snow Cloak",DW:"Thick Fat"},heightm:1.1,weightkg:55.8,color:"Brown",prevo:"swinub",evos:["mamoswine"],evoLevel:33,eggGroups:["Ground"]},
  mantine:{num:226,species:"Mantine",types:["Water","Flying"],baseStats:{hp:65,atk:40,def:70,spa:80,spd:140,spe:70},abilities:{0:"Swift Swim",1:"Water Absorb",DW:"Storm Drain"},heightm:2.1,weightkg:220,color:"Purple",prevo:"mantyke",evoLevel:1,eggGroups:["Water 1"]},
  skarmory:{num:227,species:"Skarmory",types:["Steel","Flying"],baseStats:{hp:65,atk:80,def:140,spa:40,spd:70,spe:70},abilities:{0:"Ancient Wind",1:"Sturdy",DW:"Weak Armor"},heightm:1.7,weightkg:50.5,color:"Gray",eggGroups:["Flying"]},
  kingdra:{num:230,species:"Kingdra",types:["Water","Dragon"],baseStats:{hp:75,atk:95,def:95,spa:95,spd:95,spe:85},abilities:{0:"Swift Swim",1:"Sniper",DW:"Water Veil"},heightm:1.8,weightkg:152,color:"Blue",prevo:"seadra",evoLevel:1,eggGroups:["Water 1","Dragon"]},
  blissey:{num:242,species:"Blissey",types:["Normal"],gender:"F",baseStats:{hp:255,atk:10,def:10,spa:75,spd:135,spe:55},abilities:{0:"Natural Cure",1:"Friend Guard",DW:"Healer"},heightm:1.5,weightkg:46.8,color:"Pink",prevo:"chansey",evoLevel:1,eggGroups:["Fairy"]},
  blaziken:{num:257,species:"Blaziken",types:["Fire","Fighting"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:120,def:70,spa:110,spd:70,spe:80},abilities:{0:"Blaze",DW:"Adrenaline"},heightm:1.9,weightkg:52,color:"Red",prevo:"combusken",evoLevel:36,eggGroups:["Ground"]},
  gardevoir:{num:282,species:"Gardevoir",types:["Psychic"],baseStats:{hp:68,atk:65,def:65,spa:125,spd:115,spe:80},abilities:{0:"Caution",1:"Trace",DW:"Justified"},heightm:1.6,weightkg:48.4,color:"White",prevo:"kirlia",evoLevel:30,eggGroups:["Indeterminate"]},
  wailord:{num:321,species:"Wailord",types:["Water"],baseStats:{hp:170,atk:90,def:45,spa:90,spd:45,spe:60},abilities:{0:"Hydration",1:"Oblivious",DW:"Pressure"},heightm:14.5,weightkg:398,color:"Blue",prevo:"wailmer",evoLevel:40,eggGroups:["Ground","Water 2"]},
  cacturne:{num:332,species:"Cacturne",types:["Grass","Dark"],baseStats:{hp:70,atk:115,def:60,spa:115,spd:60,spe:55},abilities:{0:"Sand Rush",DW:"Water Absorb"},heightm:1.3,weightkg:77.4,color:"Green",prevo:"cacnea",evoLevel:32,eggGroups:["Plant","Humanshape"]},
  claydol:{num:344,species:"Claydol",types:["Ground","Psychic"],gender:"N",baseStats:{hp:60,atk:70,def:105,spa:70,spd:120,spe:75},abilities:{0:"Magic Guard",DW:"Caution"},heightm:1.5,weightkg:108,color:"Black",prevo:"baltoy",evoLevel:36,eggGroups:["Mineral"]},
  milotic:{num:350,species:"Milotic",types:["Water"],baseStats:{hp:95,atk:60,def:79,spa:100,spd:125,spe:81},abilities:{0:"Multiscale",DW:"Cute Charm"},heightm:6.2,weightkg:162,color:"Pink",prevo:"feebas",evoLevel:1,eggGroups:["Water 1","Dragon"]},
  metagross:{num:376,species:"Metagross",types:["Steel","Psychic"],gender:"N",baseStats:{hp:80,atk:135,def:130,spa:95,spd:90,spe:70},abilities:{0:"Clear Body",1:"Gravitation"DW:"Light Metal"},heightm:1.6,weightkg:550,color:"Blue",prevo:"metang",evoLevel:45,eggGroups:["Mineral"]},
  regirock:{num:377,species:"Regirock",types:["Rock"],gender:"N",baseStats:{hp:80,atk:100,def:200,spa:50,spd:100,spe:50},abilities:{0:"Clear Body",DW:"Sand Veil"},heightm:1.7,weightkg:230,color:"Brown",eggGroups:["No Eggs"]},
  registeel:{num:379,species:"Registeel",types:["Steel"],gender:"N",baseStats:{hp:80,atk:75,def:150,spa:75,spd:150,spe:50},abilities:{0:"Clear Body",DW:"Heavy Metal"},heightm:1.9,weightkg:205,color:"Gray",eggGroups:["No Eggs"]},
  luxray:{num:405,species:"Luxray",types:["Electric","Dark"],baseStats:{hp:80,atk:120,def:79,spa:95,spd:79,spe:70},abilities:{0:"Rivalry",1:"Intimidate",DW:"Guts"},heightm:1.4,weightkg:42,color:"Blue",prevo:"luxio",evoLevel:30,eggGroups:["Ground"]},
  bastiodon:{num:411,species:"Bastiodon",types:["Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:52,def:168,spa:47,spd:138,spe:30},abilities:{0:"Sturdy",DW:"Soundproof"},heightm:1.3,weightkg:149.5,color:"Gray",prevo:"shieldon",evoLevel:30,eggGroups:["Monster"]},
  drifblim:{num:426,species:"Drifblim",types:["Ghost","Flying"],baseStats:{hp:150,atk:80,def:44,spa:90,spd:54,spe:80},abilities:{0:"Tempest",1:"Unburden",DW:"Flare Boost"},heightm:1.2,weightkg:15,color:"Purple",prevo:"drifloon",evoLevel:28,eggGroups:["Indeterminate"]},
  spiritomb:{num:442,species:"Spiritomb",types:["Ghost","Dark"],baseStats:{hp:50,atk:92,def:108,spa:92,spd:108,spe:35},abilities:{0:"Pressure",DW:"Trickster"},heightm:1,weightkg:108,color:"Purple",eggGroups:["Indeterminate"]},
  garchomp:{num:445,species:"Garchomp",types:["Dragon","Ground"],baseStats:{hp:108,atk:130,def:95,spa:80,spd:85,spe:102},abilities:{0:"Sand Veil",DW:"Mach Scale"},heightm:1.9,weightkg:95,color:"Blue",prevo:"gabite",evoLevel:48,eggGroups:["Monster","Dragon"]},
  hippowdon:{num:450,species:"Hippowdon",types:["Ground"],baseStats:{hp:108,atk:112,def:118,spa:68,spd:72,spe:47},abilities:{0:"Sand Stream",DW:"Sand Veil"},heightm:2,weightkg:300,color:"Brown",prevo:"hippopotas",evoLevel:34,eggGroups:["Ground"]},
  lumineon:{num:457,species:"Lumineon",types:["Water","Flying"],baseStats:{hp:69,atk:69,def:76,spa:69,spd:86,spe:91},abilities:{0:"Swift Swim",1:"Storm Drain",DW:"Water Veil"},heightm:1.2,weightkg:24,color:"Blue",prevo:"finneon",evoLevel:31,eggGroups:["Water 2"]},
  weavile:{num:461,species:"Weavile",types:["Dark","Ice"],baseStats:{hp:70,atk:120,def:65,spa:45,spd:85,spe:125},abilities:{0:"Technician",DW:"Pickpocket"},heightm:1.1,weightkg:34,color:"Black",prevo:"sneasel",evoLevel:1,eggGroups:["Ground"]},
  electivire:{num:466,species:"Electivire",types:["Electric","Fighting"],genderRatio:{M:0.75,F:0.25},baseStats:{hp:75,atk:123,def:67,spa:95,spd:85,spe:95},abilities:{0:"Motor Drive",DW:"Vital Spirit"},heightm:1.8,weightkg:138.6,color:"Yellow",prevo:"electabuzz",evoLevel:1,eggGroups:["Humanshape"]},
  yanmega:{num:469,species:"Yanmega",types:["Bug","Dragon"],baseStats:{hp:86,atk:76,def:86,spa:116,spd:56,spe:95},abilities:{0:"Speed Boost",1:"Compoundeyes",DW:"Frisk"},heightm:1.9,weightkg:51.5,color:"Green",prevo:"yanma",evoLevel:1,evoMove:"AncientPower",eggGroups:["Bug"]},
  glaceon:{num:471,species:"Glaceon",types:["Ice"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:65,atk:60,def:110,spa:130,spd:95,spe:65},abilities:{0:"Snow Cloak",DW:"Arctic Rush"},heightm:0.8,weightkg:25.9,color:"Blue",prevo:"eevee",evoLevel:1,eggGroups:["Ground"]},
  mamoswine:{num:473,species:"Mamoswine",types:["Ice","Ground"],baseStats:{hp:110,atk:130,def:80,spa:70,spd:60,spe:80},abilities:{0:"Arctic Rush",1:"Snow Cloak",DW:"Thick Fat"},heightm:2.5,weightkg:291,color:"Brown",prevo:"piloswine",evoLevel:1,evoMove:"AncientPower",eggGroups:["Ground"]},
  gallade:{num:475,species:"Gallade",types:["Psychic","Fighting"],gender:"M",baseStats:{hp:68,atk:125,def:65,spa:65,spd:115,spe:80},abilities:{0:"Caution",1:"Trace",DW:"Justified"},heightm:1.6,weightkg:52,color:"White",prevo:"kirlia",evoLevel:1,eggGroups:["Indeterminate"]},
  dusknoir:{num:477,species:"Dusknoir",types:["Ghost","Fighting"],baseStats:{hp:45,atk:100,def:135,spa:65,spd:135,spe:45},abilities:{0:"Iron Fist"},heightm:2.2,weightkg:106.6,color:"Black",prevo:"dusclops",evoLevel:1,eggGroups:["Indeterminate"]},
  serperior:{num:497,species:"Serperior",types:["Grass","Dragon"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:75,atk:75,def:95,spa:75,spd:95,spe:113},abilities:{0:"Overgrow",DW:"Contrary"},heightm:3.3,weightkg:63,color:"Green",prevo:"servine",evoLevel:36,eggGroups:["Ground","Plant"]},
  emboar:{num:500,species:"Emboar",types:["Fire","Dark"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:110,atk:123,def:65,spa:100,spd:65,spe:65},abilities:{0:"Blaze",DW:"Reckless"},heightm:1.6,weightkg:150,color:"Red",prevo:"pignite",evoLevel:36,eggGroups:["Ground"]},
  musharna:{num:518,species:"Musharna",types:["Psychic","Ghost"],baseStats:{hp:116,atk:55,def:85,spa:107,spd:95,spe:29},abilities:{0:"Forewarn",1:"Caution",DW:"Telepathy"},heightm:1.1,weightkg:60.5,color:"Pink",prevo:"munna",evoLevel:1,eggGroups:["Ground"]},
  darmanitan:{num:555,species:"Darmanitan",baseForme:"Standard",types:["Fire","Fighting"],baseStats:{hp:105,atk:140,def:55,spa:30,spd:55,spe:95},abilities:{0:"Sheer Force",1:"Reckless",DW:"Zen Mode"},heightm:1.3,weightkg:92.9,color:"Red",prevo:"darumaka",evoLevel:35,eggGroups:["Ground"],otherFormes:["darmanitanzen"]},
  sigilyph:{num:561,species:"Sigilyph",types:["Psychic","Flying"],baseStats:{hp:72,atk:58,def:80,spa:103,spd:80,spe:97},abilities:{0:"Ancient Wind",1:"Magic Guard",DW:"Tinted Lens"},heightm:1.4,weightkg:14,color:"Black",eggGroups:["Flying"]},
  cofagrigus:{num:563,species:"Cofagrigus",types:["Ghost","Steel"],baseStats:{hp:58,atk:50,def:145,spa:95,spd:105,spe:30},abilities:{0:"Mummy"},heightm:1.7,weightkg:76.5,color:"Yellow",prevo:"yamask",evoLevel:34,eggGroups:["Mineral","Indeterminate"]},
  zoroark:{num:571,species:"Zoroark",types:["Dark","Ghost"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:60,atk:105,def:60,spa:120,spd:60,spe:105},abilities:{0:"Illusion",DW:"Dauntless"},heightm:1.6,weightkg:81.1,color:"Gray",prevo:"zorua",evoLevel:30,eggGroups:["Ground"]},
  gothitelle:{num:576,species:"Gothitelle",types:["Psychic","Dark"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:70,atk:55,def:95,spa:95,spd:110,spe:65},abilities:{0:"Frisk",DW:"Shadow Tag"},heightm:1.5,weightkg:44,color:"Purple",prevo:"gothorita",evoLevel:41,eggGroups:["Humanshape"]},
  reuniclus:{num:579,species:"Reuniclus",types:["Psychic"],baseStats:{hp:110,atk:65,def:75,spa:125,spd:85,spe:30},abilities:{0:"Gravitation",1:"Magic Guard",DW:"Regenerator"},heightm:1,weightkg:20.1,color:"Green",prevo:"duosion",evoLevel:41,eggGroups:["Indeterminate"]},
  swanna:{num:581,species:"Swanna",types:["Water","Flying"],baseStats:{hp:75,atk:87,def:63,spa:87,spd:63,spe:98},abilities:{0:"Water Veil",1:"Big Pecks",DW:"Hydration"},heightm:1.3,weightkg:24.2,color:"White",prevo:"ducklett",evoLevel:35,eggGroups:["Water 1","Flying"]},
  vanilluxe:{num:584,species:"Vanilluxe",types:["Ice"],baseStats:{hp:71,atk:95,def:85,spa:110,spd:95,spe:79},abilities:{0:"Ice Body",1:"Snow Warning",DW:"Weak Armor"},heightm:1.3,weightkg:57.5,color:"White",prevo:"vanillish",evoLevel:47,eggGroups:["Mineral"]},
  escavalier:{num:589,species:"Escavalier",types:["Bug","Steel"],baseStats:{hp:70,atk:135,def:105,spa:60,spd:105,spe:20},abilities:{0:"Swarm",1:"Sturdy",DW:"Hyper Cutter"},heightm:1,weightkg:33,color:"Gray",prevo:"karrablast",evoLevel:1,eggGroups:["Bug"]}, 
  beheeyem:{num:606,species:"Beheeyem",types:["Psychic","Electric"],baseStats:{hp:75,atk:75,def:75,spa:125,spd:95,spe:40},abilities:{0:"Levitate",1:"Dauntless",DW:"Analytic"},heightm:1,weightkg:34.5,color:"Brown",prevo:"elgyem",evoLevel:42,eggGroups:["Humanshape"]},
  chandelure:{num:609,species:"Chandelure",types:["Ghost","Fire"],baseStats:{hp:60,atk:55,def:90,spa:145,spd:90,spe:80},abilities:{0:"Flash Fire",1:"Flame Body",DW:"Levitate"},heightm:1,weightkg:34.3,color:"Black",prevo:"lampent",evoLevel:1,eggGroups:["Indeterminate"]},
  beartic:{num:614,species:"Beartic",types:["Ice","Fighting"],baseStats:{hp:95,atk:110,def:80,spa:70,spd:80,spe:50},abilities:{0:"Snow Cloak",1:"Arctic Rush",DW:"Swift Swim"},heightm:2.6,weightkg:260,color:"White",prevo:"cubchoo",evoLevel:37,eggGroups:["Ground"]},
  cryogonal:{num:615,species:"Cryogonal",types:["Ice","Steel"],gender:"N",baseStats:{hp:70,atk:50,def:30,spa:95,spd:135,spe:105},abilities:{0:"Levitate"},heightm:1.1,weightkg:148,color:"Blue",eggGroups:["Mineral"]},
  druddigon:{num:621,species:"Druddigon",types:["Dragon","Rock"],baseStats:{hp:77,atk:120,def:90,spa:60,spd:90,spe:48},abilities:{0:"Mach Scale",1:"Solidify",DW:"Marvel Scale"},heightm:1.6,weightkg:139,color:"Red",eggGroups:["Monster","Dragon"]},
  tornadustherian:{num:641,species:"Tornadus-Therian",baseSpecies:"Tornadus",forme:"Therian",formeLetter:"T",types:["Flying"],gender:"M",baseStats:{hp:79,atk:100,def:80,spa:110,spd:90,spe:121},abilities:{0:"Tempest"},heightm:1.4,weightkg:63,color:"Green",eggGroups:["No Eggs"]},
  kyurem:{num:646,species:"Kyurem",types:["Dragon","Ice"],gender:"N",baseStats:{hp:125,atk:130,def:90,spa:130,spd:90,spe:95},abilities:{0:"Arctic Rush"},heightm:3,weightkg:325,color:"Gray",eggGroups:["No Eggs"],otherFormes:["kyuremblack","kyuremwhite"]},
  genesect:{num:649,species:"Genesect",types:["Bug","Steel"],gender:"N",baseStats:{hp:71,atk:120,def:95,spa:120,spd:95,spe:99},abilities:{0:"Compoundeyes"},heightm:1.5,weightkg:82.5,color:"Purple",eggGroups:["No Eggs"],otherFormes:["genesectdouse","genesectshock","genesectburn","genesectchill"]},
};
