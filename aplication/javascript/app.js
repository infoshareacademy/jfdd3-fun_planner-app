/**
 * Created by mateuszszymula on 17.06.16.
 */

(function () {
    var app = angular.module('FunPlanner', []);

    app.controller('FunPlannerController', ctrl);

    function ctrl($scope) {
        $scope.name = 'Mateusz'
    }

})();