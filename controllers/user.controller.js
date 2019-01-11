(function(){
    "use strict";

    adminApp.controller('UsersController', usersController);

    usersController.$inject = [
        '$scope',
        '$timeout',
        'LoginService',
    ];

    function usersController(
        $scope,
        $timeout,
        LoginService
    ){

        $scope.users = {
            usersList: []
        };

        (function(){
            LoginService.getUserList().then(function(usersResponse){
                console.log('usersResponse: ', usersResponse);
                $scope.users.usersList = usersResponse.data.data.active;
            }).catch(function(error){
                console.log('error: ', error);

            }); 
        }());
    }
    
}())