'use strict';

(function(afspSeedApp){

    afspSeedApp.controller('LandingCtrl', function($scope, userService){

        var ctrl = this;
        ctrl.username = 'utdiscant';
        ctrl.mycompetitions = [];

        ctrl.form = {
            competition: undefined
        };

        function init() {
            userService.fetchMyCompetitions().then(function(response) {
                ctrl.mycompetitions = response.data.competitions;
            });

            userService.fetchCompetitions().then(function(response) {
                ctrl.allcompetitions = response.data.competitions;
            });

            ctrl.selectCompetition = function(competitionId) {
                console.log(competitionId);
            }

            ctrl.submitEntry = function() {
                alert('This goes nowhere yet.');
            };
        }

        init();

    });

}(afspSeedApp));