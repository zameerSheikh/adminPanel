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
    ){}
        
}());