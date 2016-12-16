'use strict';

(function(afspSeedApp){

    // Source: jeffjohnson9046 - https://gist.github.com/jeffjohnson9046/9470800
    afspSeedApp.filter('percentage', ['$filter', function ($filter) {
        return function (input, decimals) {
            return $filter('number')(input * 100, decimals) + '%';
        };
    }])

}(afspSeedApp));