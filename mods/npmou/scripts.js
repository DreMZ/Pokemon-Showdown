exports.BattleScripts = {
        init: function() {
        for (var i in this.data.FormatsData)
            this.data.FormatsData[i].dreamWorldRelease = true;
        
        this.data.Learnsets.venusaur.learnset.powerwhip = ['5L0'];
        
        this.data.Pokedex.charizard.types = ["Fire","Dragon"];
        this.data.Pokedex.charizard.abilities['DW'] = 'Levitate';
        this.data.Learnsets.charizard.learnset.dracometeor = ['5T'];
        
        this.data.Pokedex.blastoise.abilities['DW'] = 'Water Veil';
        
        this.data.Learnsets.sandslash.learnset.spikes = ['5L0'];
        
        this.data.Learnsets.nidoking.learnset.dragondance = ['5L0'];
        
        this.data.Pokedex.clefable.types = ["Normal","Psychic"];
        this.data.Pokedex.clefable.abilities['0'] = 'Friend Guard';
        
        this.data.Learnsets.tentacruel.learnset.thunderwave = ['5M'];
        this.data.Learnsets.tentacruel.learnset.thunderbolt = ['5M'];
        
        this.data.Pokedex.electrode.abilities['1'] = 'Volt Absorb';
        
        this.data.Pokedex.weezing.types = ["Poison","Electric"];
        this.data.Learnsets.weezing.learnset.wildcharge = ['5M'];
        
        this.data.Pokedex.chansey.abilities['1'] = 'Friend Guard';
        
        this.data.Pokedex.pinsir.types = ["Bug","Dark"];
        this.data.Learnsets.pinsir.learnset.crunch = ['5L0'];
        this.data.Learnsets.pinsir.learnset.pursuit = ['5L0'];
        
        this.data.Learnsets.aerodactyl.learnset.bravebird = ['5L0'];
        
        this.data.Pokedex.dragonair.types = ["Dragon","Water"];
        
        this.data.Learnsets.ampharos.learnset.tailglow = ['5L0'];
        
        this.data.Pokedex.azumarill.types = ["Water","Normal"];
        
        this.data.Pokedex.umbreon.abilities['DW'] = 'Magic Guard';
        
        this.data.Learnsets.steelix.learnset.coil = ['5L0'];
        this.data.Learnsets.steelix.learnset.slackoff = ['5L0'];
        
        this.data.Learnsets.qwilfish.learnset.poisontail = ['5L0'];
        
        this.data.Pokedex.kingdra.abilities['DW'] = 'Water Veil';
        
        this.data.Pokedex.blissey.abilities['1'] = 'Friend Guard';
        
        this.data.Learnsets.entei.learnset.earthquake = ['5M'];
        
        this.data.Learnsets.shiftry.learnset.hurricane = ['5L0'];
        
        this.data.Pokedex.gardevoir.abilities['DW'] = 'Justified';
        
        this.data.Pokedex.cacturne.abilities['0'] = 'Sand Rush';
        
        this.data.Pokedex.wailord.abilities['0'] = 'Hydration';
        
        this.data.Learnsets.flygon.learnset.stealthrock = ['5L0'];
        this.data.Learnsets.flygon.learnset.dragondance = ['5L0'];
        
        this.data.Learnsets.claydol.learnset.recover = ['5L0'];
        
        this.data.Pokedex.armaldo.abilities['0'] = 'Sand Force';
        
        this.data.Pokedex.milotic.abilities['0'] = 'Multiscale';
        
        this.data.Pokedex.luxray.types = ["Electric","Dark"];
        
        this.data.Pokedex.bastiodon.types = ["Steel"];
        
        this.data.Pokedex.lumineon.types = ["Water","Flying"];
        this.data.Learnsets.lumineon.learnset.airslash = ['5L0'];
        this.data.Learnsets.lumineon.learnset.hurricane = ['5L0'];
        
        this.data.Pokedex.electivire.types = ["Electric","Fighting"];
        this.data.Learnsets.electivire.learnset.submission = ['5L0'];
        this.data.Learnsets.electivire.learnset.drainpunch = ['5T'];
        
        this.data.Pokedex.yanmega.types = ["Bug","Dragon"];
        this.data.Pokedex.yanmega.abilities['1'] = 'Compoundeyes';
        this.data.Learnsets.yanmega.learnset.dracometeor = ['5T'];
        this.data.Learnsets.yanmega.learnset.dragonpulse = ['5T'];
        delete this.data.Learnsets.yanmega.learnset.hypnosis;
        
        this.data.Pokedex.dusknoir.types = ["Ghost","Fighting"];
        this.data.Pokedex.dusknoir.abilities['0'] = 'Iron Fist';
        this.data.Learnsets.dusknoir.learnset.drainpunch = ['5T'];
        this.data.Learnsets.dusknoir.learnset.superpower = ['5T'];
        this.data.Learnsets.dusknoir.learnset.moonlight = ['5L0'];
        
        this.data.Pokedex.serperior.types = ["Grass","Dragon"];
        this.data.Learnsets.serperior.learnset.dracometeor = ['5T'];
        
        this.data.Pokedex.emboar.types = ["Fire","Dark"];
        this.data.Learnsets.emboar.learnset.crunch = ['5L0'];
        this.data.Learnsets.emboar.learnset.suckerpunch = ['5L0'];
        
        this.data.Pokedex.musharna.types = ["Psychic","Ghost"];
        
        this.data.Pokedex.darmanitan.types = ["Fire","Fighting"];
        
        this.data.Pokedex.cofagrigus.types = ["Ghost","Steel"];
        this.data.Learnsets.cofagrigus.learnset.flashcannon = ['5M'];
        
        this.data.Pokedex.gothitelle.types = ["Psychic","Dark"];
        
        this.data.Pokedex.zoroark.types = ["Dark","Ghost"];
        
        this.data.Pokedex.eelektross.types = ["Electric","Dragon"];
        this.data.Learnsets.eelektross.learnset.outrage = ['5T'];
        this.data.Learnsets.eelektross.learnset.dragondance = ['5L0'];
        
        this.data.Pokedex.beheeyem.types = ["Psychic","Electric"];
        this.data.Learnsets.beheeyem.learnset.thunder = ['5M'];
        
        this.data.Pokedex.chandelure.abilities['DW'] = 'Levitate';
        
        this.data.Pokedex.beartic.types = ["Ice","Fighting"];
        this.data.Learnsets.beartic.learnset.drainpunch = ['5T'];
        
        this.data.Pokedex.cryogonal.types = ["Ice","Steel"];
        
        this.data.Pokedex.druddigon.types = ["Dragon","Rock"];
        this.data.Learnsets.druddigon.learnset.stoneedge = ['5M'];
        
        this.data.Pokedex.braviary.types = ["Fighting","Flying"];
        }
};
