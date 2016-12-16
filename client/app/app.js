'use strict';

var afspSeedApp = angular.module('afspSeedApp', ['ui.bootstrap', 'ui.router']);

afspSeedApp.config(function($stateProvider, $urlRouterProvider) {
    var landingState = {
        name: 'landing',
        url: '/',
        templateUrl: '/app/home/landing.html',
        controller: 'LandingCtrl as landing'
    };

    var competitionState = {
        name: 'competition',
        url: '/competition/:competition_id',
        templateUrl: '/app/comp/competition.html',
        controller: 'CompetitionCtrl as comp'
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider.state(landingState);
    $stateProvider.state(competitionState);
});