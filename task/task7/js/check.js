/**
 * Created by john on 2016-07-08.
 */
angular.module('myApp', [])
    .controller('checkCtrl', function ($scope, $state) {

        var peoples = JSON.parse($state.params.peoples);
        console.log(peoples);
        $scope.peoples = peoples;

        $scope.clickBtn = function () {
            $state.go('step', {peoples: JSON.stringify(peoples)}, {reload: true})
        }

    });
