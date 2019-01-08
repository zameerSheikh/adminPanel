"use strict"

adminApp.config(appConfig);

appConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$urlMatcherFactoryProvider'
];

function appConfig(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $urlMatcherFactoryProvider
){
    $urlRouterProvider.otherwise('/login');

    $stateProvider

    .state('login', {
        url          : '/login',
        templateUrl  : 'views/login.html',
        controller   : 'LoginController'
    })

    .state('users',{
        url          : '/users',
        templateUrl  : 'views/users.html',
        controller   : 'UsersController'
    })

    .state('maintainanceMode',{
        url          : '/maintainance',
        templateUrl  : 'views/maintainance.html',
        controller   : 'MaintainanceController'
    });

    //$locationProvider.html5Mode(true);
    //$urlMatcherFactoryProvider.strictMode(false);
}