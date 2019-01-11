(function(){
    "use strict";

    adminApp.run(applicationRun);

    applicationRun.$inject = [
        '$rootScope',
        '$state'
    ];

    function applicationRun(
        $rootScope,
            $state
    ){

        $rootScope.adminApp = {
            toState: '',
            isSidePanelRequired: false
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('event: ', event);
        
            $rootScope.adminApp.toState = toState.name;

            if($rootScope.adminApp.toState === 'users' || $rootScope.adminApp.toState == 'maintainanceMode'){
                $rootScope.adminApp.isSidePanelRequired = true;
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if ($rootScope.adminApp.toState === 'login') {
                $rootScope.adminApp.isSidePanelRequired = false;
            }
        });

        
    }
}());