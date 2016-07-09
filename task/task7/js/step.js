/**
 * Created by john on 2016-07-08.
 */
angular.module('myApp', [])
    .controller('stepCtrl', function ($scope, $state) {
        console.log($state.params.peoples);

        var isShow = false;

        $scope.clickBtn = function () {

            isShow = !isShow;

            $scope.isShow = isShow;

        };

        $scope.next = function () {
            $state.go('murder', {peoples: $state.params.peoples})
        }

    });
