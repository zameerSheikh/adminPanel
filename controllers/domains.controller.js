(function(){
    "use strict";

    adminApp.controller('DomainsController', domainscontroller);

    domainscontroller.$inject = [
        '$scope',
        'LoginService',
        '$state'
    ];

    function domainscontroller(
        $scope,
        LoginService,
        $state
    ){
        $scope.domainsObj = {
            allDomains: []
        };
        
        (function(){
            LoginService.getDomainsList().then(function(domainsResponse){
                $scope.domainsObj.allDomains = domainsResponse.data.data.active;
            }).catch(function(error){
                console.log('error: ', error);
            });
        }())
    }
        
}());