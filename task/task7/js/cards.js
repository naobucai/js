/**
 * Created by john on 2016-07-07.
 */
angular.module('myApp', [])
    .controller('cardCtrl', function ($scope, $state) {

        var clickNum = 0; // 记录点击次数
        $scope.index = 1; // 记录几号
        $scope.btnTitle = '查看1号身份';

        var peoples = JSON.parse($state.params.peoples);
        console.log(peoples);

        $scope.clickBtn = function () {
            clickNum++;

            if ((clickNum+1)/2 > peoples.length) {
                $state.go('check', {peoples: JSON.stringify(peoples)});
            }
            else {
                change();
            }
        };

        // 改变页面图片文字
        function change() {
            if (clickNum % 2) {
                console.log(clickNum,(clickNum+1)/2);
                $scope.icon = 'images/page2.gif';
                $scope.name = '身份：' + peoples[$scope.index - 1];

                if ((clickNum+1)/2 == peoples.length) {
                    $scope.btnTitle = '法官查看';
                }
                else {
                    $scope.btnTitle = '隐藏并传递给' + ($scope.index + 1) + '号';
                }
            }
            else {
                $scope.name = null;
                $scope.icon = 'images/page1.gif';
                $scope.index++;
                $scope.btnTitle = '查看'+ $scope.index +'号身份';
            }
        }

    });
