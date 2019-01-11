(function(){
    "use strict";

    adminApp.run(applicationRun);

    applicationRun.$inject = [
        '$rootScope',
        '$state',
        '$localStorage'
    ];

    function applicationRun(
        $rootScope,
            $state,
            $localStorage
    ){

        $rootScope.adminApp = {
            toState: '',
            isSidePanelRequired: false,
            logout:logout
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        
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

        function logout(){
            delete $localStorage.token;
            $state.go('login');
        }
        
    }
}());