(function(){
    "use strict";

    adminApp.controller('MaintainanceController', maintainanceController);

    maintainanceController.$inject = [
        '$scope',
        '$timeout',
        'LoginService',
        'AdminAppService'
    ]

    function maintainanceController(
        $scope,
        $timeout,
        LoginService,
        AdminAppService
    ){

        $scope.maintainance = {
            isMaintainanceEnabled: false,
            changeMode: changeMode
        };

        function changeMode(isEnabled){
            if(isEnabled){
                LoginService.enableMaintainance().then(function(response){
                    console.log('response: ', response);
                    AdminAppService.showSuccessMessage(response.data.data.message);
                }).catch(function(error){
                    console.log('error: ', error);
                });
            }else{
                LoginService.disableMaintainance().then(function(response){
                    console.log('response: ', response);
                    AdminAppService.showSuccessMessage(response.data.data.message);
                }).catch(function(error){
                    console.log('error: ', error);
                });
            }
        }
    }
    
}());