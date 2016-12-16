'use strict';

(function(afspSeedApp){

    afspSeedApp.factory('userService', function($http) {

        function fetchMyCompetitions() {
            return $http.get('/api/mycompetitions');
        }

        function fetchCompetition(id) {
            return $http.get('/api/competitions/' + id);
        }

        function fetchCompetitions() {
            return $http.get('/api/competitions/');
        }

        return {
            fetchMyCompetitions: fetchMyCompetitions,
            fetchCompetition: fetchCompetition,
            fetchCompetitions: fetchCompetitions
        }
    });

}(afspSeedApp));