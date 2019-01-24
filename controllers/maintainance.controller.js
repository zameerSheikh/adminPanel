(function(){
    "use strict";

    adminApp.controller('MaintainanceController', maintainanceController);

    maintainanceController.$inject = [
        '$scope',
        '$rootScope',
        '$timeout',
        'LoginService',
        'AdminAppService'
    ]

    function maintainanceController(
        $scope,
        $rootScope,
        $timeout,
        LoginService,
        AdminAppService
    ){

        $scope.maintainance = {
            isMaintainanceEnabled: $rootScope.isUnderMaintainance,
            changeMode: changeMode
        };

        function changeMode(isEnabled){
            if(isEnabled){
                LoginService.enableMaintainance().then(function(response){
                    console.log('response: ', response);
                    $rootScope.isUnderMaintainance = true;
                    AdminAppService.showSuccessMessage(response.data.data.message);
                }).catch(function(error){
                    console.log('error: ', error);
                });
            }else{
                LoginService.disableMaintainance().then(function(response){
                    console.log('response: ', response);
                    $rootScope.isUnderMaintainance = false;
                    AdminAppService.showSuccessMessage(response.data.data.message);
                }).catch(function(error){
                    console.log('error: ', error);
                });
            }
        }
    }
    
}());