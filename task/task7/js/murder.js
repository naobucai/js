/**
 * Created by john on 2016-07-08.
 */
angular.module('myApp', [])
    .controller('murderCtrl', function ($scope, $state) {
        var peoples = JSON.parse($state.params.peoples);
        console.log(peoples);
        $scope.peoples = peoples;

        $scope.isClick = function (indexColor) {
            if (peoples[indexColor] == '死亡') return 'click';
        };

        var death = 1;
        angular.forEach(peoples, function (data, index, array) {
            if (data == '死亡') {
                death++;
            }
        });

        var id = '';

        id = (death%2) ?  '杀手' : '投票';

        console.log(id);



        // 选择要杀的人
        $scope.clickPeople = function (indexPeople) {

            if (peoples[indexPeople] == '死亡') {
                alert('此角色已死亡');
            }
            else {
                if (id == '杀手') {
                    if (peoples[indexPeople] == '杀手') {
                        alert('杀手不能选择杀手')
                    }
                    else {
                        change(indexPeople);
                    }
                }
                else if (id == '投票') {
                    change(indexPeople);
                }
            }


        };

        function change(indexPeople) {
            // 选择后改变div颜色
            $scope.isClick = function (indexColor) {
                if (indexPeople == indexColor || peoples[indexColor] == '死亡') return 'click';

            };
            console.log(indexPeople);
            next(indexPeople);
        }

        // 点击确定杀人
        function next(index) {
            $scope.clickBtn = function () {
                $state.go('expose', {peoples: $state.params.peoples, index: index})
            }
        }


    });
