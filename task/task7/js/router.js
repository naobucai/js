/**
 * Created by john on 2016-07-07.
 */

angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
    .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        var _lazyLoad = function(loaded) {
            return function($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };

        $urlRouterProvider.when("", "/home");
        $stateProvider

            // home页面
            .state('/', {
                url: '/home',
                templateUrl: 'view/home.html',
                resolve: {
                    loadMyFile: _lazyLoad('css/home.css')
                }
            })

            // 设置人数页面
            .state('peoples', {
                url: '/peoples',
                templateUrl: 'view/peoples.html',
                controller: 'peoplesCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['css/peoples.css', 'js/peoples.js'])
                }
            })

            // 设置查看身份页面
            .state('cards', {
                url: '/cards/:peoples',
                templateUrl: 'view/cards.html',
                controller: 'cardCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['css/cards.css', 'js/cards.js'])
                }
            })

            // 法官查看
            .state('check', {
                url: '/check/:peoples',
                templateUrl: 'view/check.html',
                controller: 'checkCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['css/check.css', 'js/check.js'])
                }

            })

            // 游戏步骤
            .state('step', {
                url: '/step/:peoples',
                templateUrl: 'view/step.html',
                controller: 'stepCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['js/step.js', 'css/step.css'])
                }
            })

            // 杀人
            .state('murder', {
                url: '/murder/:peoples',
                templateUrl: 'view/murder.html',
                controller: 'murderCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['js/murder.js', 'css/murder.css'])
                }
            })

            // 黑夜揭秘
            .state('expose', {
                url: '/expose/:peoples/:index',
                templateUrl: 'view/expose.html',
                controller: 'exposeCtrl',
                resolve: {
                    loadMyFile: _lazyLoad(['js/expose.js', 'css/expose.css'])
                }
            })
        
            // 游戏结束
            .state('over', {
                url: '/over',
                templateUrl: 'view/over.html',
                resolve: {
                    loadMyFile: _lazyLoad('css/over.css')
                }
            })


    });
