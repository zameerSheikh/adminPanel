(function(){
    "use strict";

    adminApp.controller('LoginController', loginController);

    loginController.$inject = [
        '$scope',
        'LoginService'
    ];

    function loginController(
        $scope,
        LoginService
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
        }
    }
}())