/**
 * Created by john on 2016-07-07.
 */

angular.module('myApp', [])
    .controller('peoplesCtrl', function ($scope, $state) {

        $scope.killer = 0;
        $scope.populist = 0;

        var peoples = [];

        // 点击设置按钮
        $scope.setting = function () {
            isCorrect();
        };

        // 点击发牌按钮
        $scope.clickBtn = function () {

            if (peoples.length == $scope.number) {
                console.log('输入正确');
                $state.go('cards', {peoples: JSON.stringify(peoples)})
            }
            else {
                alert('请点击设置');
            }

        };

        // 判断是否正确函数
        function isCorrect () {
            var number = $scope.number;
            if (number >= 6 && number <= 18) {
                console.log("输入正确");

                // 计算杀手人数
                var killer = Math.floor(number / 4);
                if (number == 8) killer = 1;

                $scope.killer = killer;
                $scope.populist = number - killer;

                // 添加杀手和平民到数组
                for (var i = 0; i < killer; i++) {
                    peoples[i] = '杀手';
                }
                for (;i < number; i++) {
                    peoples[i] = '平民';
                }

                // 打乱数组
                peoples.sort( function() {
                    return 0.5 - Math.random()
                });

                $scope.isErr = true;

                console.log(peoples);
            }
            else {

                $scope.isErr = false;
                console.log("输入错误");
            }
        }

    });
