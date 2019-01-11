(function(){
    "use strict";

    adminApp.controller('LoginController', loginController);

    loginController.$inject = [
        '$scope',
        'LoginService',
        '$state'
    ];

    function loginController(
        $scope,
        LoginService,
        $state
    ){
        $scope.login = {
            adminLogin: adminLogin
        }

        $scope.user = {
            email : '',
            password: '' 
        }

        function adminLogin(data){
            console.log('data: ', data);
            // LoginService.loginAdmin(data).then(function(response){
            //     console.log('response: ', response);
            // }).catch(function(error){

            // });
            if(data.password === 'India@123'){
                $state.go('users');
            }
        }
    }
}())