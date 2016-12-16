'use strict';

(function(afspSeedApp){

    afspSeedApp.controller('CompetitionCtrl', function($scope, userService, $stateParams){

        var ctrl = this;
        ctrl.username = 'utdiscant';
        ctrl.mycompetitions = [];
        ctrl.rowLimit = 50;
        ctrl.myFirstRow = -1;
        ctrl.myFirstEntry = null;

        function init() {

            // Would normally cache this rather than reloading using angular-cache.
            userService.fetchMyCompetitions().then(function(response) {
                ctrl.mycompetitions = response.data.competitions;
                var myCompetitionIds = _.map(ctrl.mycompetitions, 'id');

                userService.fetchCompetition($stateParams.competition_id).then(function(response) {
                    ctrl.competition = response.data.competition;
                    _.forEach(ctrl.competition.entries, function(entry, index){
                        if (_.includes(myCompetitionIds, entry.id)) {
                            entry.is_my_entry = true;
                            if (ctrl.myFirstRow < 0) {
                                ctrl.myFirstRow = index + 1;
                                ctrl.myFirstEntry = entry;
                            }
                        } else {
                            entry.is_my_entry = false;
                        }
                    });
                });

            });

        }

        init();

    });

}(afspSeedApp));