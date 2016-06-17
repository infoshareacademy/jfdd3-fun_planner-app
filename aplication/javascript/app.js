/**
 * Created by mateuszszymula on 17.06.16.
 */

(function () {
    var app = angular.module('FunPlanner', ['uiGmapgoogle-maps']);

    app.controller('FunPlannerController', ctrl);
    app.controller('uiGmapgoogle-mapsController', mapCtrl);

    function ctrl($scope) {
        $scope.name = 'Mateusz'
    }

    function mapCtrl($scope) {
        $scope.map = {center: {latitude: 54.4444, longitude: 18.56444}, zoom: 10, disableDefaultUI: true, zoomControl: false, scaleControl: true}
    }

})();