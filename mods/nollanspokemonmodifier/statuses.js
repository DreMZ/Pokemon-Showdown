exports.BattleStatuses = {
    hail: {
      inherit: true,
      onModifyStats: function(stats, pokemon) {
          if (pokemon.hasType('Ice')) {
            stats.def *= 3/2;
            }
        }
    },
    lockedmove: {
        inherit: true,
        durationCallback: function() {
            return 3;
            }
    }
};
