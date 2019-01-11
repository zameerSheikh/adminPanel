(function(){
    "use strict";

    adminApp.controller('LoginController', loginController);

    loginController.$inject = [
        '$scope',
        '$rootScope',
        'LoginService',
        '$state',
        '$localStorage',
        'AdminAppService',
        '$timeout'
    ];

    function loginController(
        $scope,
        $rootScope,
        LoginService,
        $state,
        $localStorage,
        AdminAppService,
        $timeout
    ){
        $scope.login = {
            adminLogin: adminLogin,
            isLoading: false
        }

        $scope.user = {
            user_email : '',
            user_password: '' 
        }

        function adminLogin(data){
            console.log('data: ', data);
            $scope.login.isLoading = true;
            LoginService.loginAdmin(data).then(function(loginResponse){
                console.log('response: ', loginResponse);
                $localStorage.token = loginResponse.headers('sid');
                $localStorage.adminId = loginResponse.data.data.admin_uuid;
                AdminAppService.showSuccessMessage('Login Successfull');
                $timeout(function(){
                    $scope.login.isLoading = false;
                    $state.go('users');
                },2000);
            }).catch(function(error){
                $scope.login.isLoading = false;
            });
            // if(data.password === 'India@123'){
            //     $state.go('users');
            // }
        }
    }
}())