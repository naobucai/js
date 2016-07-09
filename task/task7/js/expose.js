/**
 * Created by john on 2016-07-09.
 */

angular.module('myApp', [])
    .controller('exposeCtrl', function ($scope, $state) {
        console.log($state.params.peoples);
        console.log($state.params.index);
        var peoples = JSON.parse($state.params.peoples);
        var index = $state.params.index;

        var death = 1;
        var killer = 0;
        var popu = 0;
        angular.forEach(peoples, function (data, index, array) {
            if (data == '死亡') death++;
        });

        var id = '';

        id = (death%2) ?  '杀手' : '投票';

        if ($scope.text == undefined) $scope.text = '';
        var text = $scope.text;
        $scope.text = text + (parseInt(index)+1) + '号被'+ id +'杀手了，其实他的身份是' + peoples[index];

        peoples[index] = '死亡';

        console.log(peoples);

        console.log(killer,popu);

        angular.forEach(peoples, function (data, index, array) {
            if (data == '平民') popu++;
            if (data == '杀手') killer++;
        });

        if (killer == 0 || popu == 0) {
            $scope.btnTitle = '查看游戏结果';
            $scope.clickBtn = function () {
                $state.go('over')
            }

        }
        else {
            if (id == '投票') {

                $scope.btnTitle = '下一天';
                $scope.isHide = true;

                $scope.clickBtn = function () {
                    $state.go('step', {peoples: JSON.stringify(peoples)})
                }
            }
            else {

                $scope.btnTitle = '去投票';
                $scope.isHide = false;

                $scope.clickBtn = function () {
                    $state.go('murder', {peoples: JSON.stringify(peoples)})
                }
            }
        }







    });
