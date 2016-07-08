/**
 * Created by john on 2016-07-08.
 */
angular.module('myApp', [])
    .controller('murderCtrl', function ($scope, $state) {
        var peoples = JSON.parse($state.params.peoples);
        console.log($state.params.peoples);
        $scope.peoples = peoples;

        

    });
