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
            $scope.login.isLoading = true;
            LoginService.loginAdmin(data).then(function(loginResponse){
                console.log('response: ', loginResponse);
                $localStorage.token = loginResponse.headers('sid');
                $localStorage.adminId = loginResponse.data.data.admin_uuid;
                $rootScope.isUnderMaintainance = loginResponse.data.data.maintenance_mode;
                AdminAppService.showSuccessMessage('Login Successfull');
                $timeout(function(){
                    $scope.login.isLoading = false;
                    if($rootScope.isUnderMaintainance)
                    $state.go('maintainanceMode');
                    else
                    $state.go('users');
                },1500);
            }).catch(function(error){
                $scope.login.isLoading = false;
            });
        }
    }
}());