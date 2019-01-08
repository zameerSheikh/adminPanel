(function(){
    "use strict";

    adminApp.factory('LoginService', loginService);

    loginService.$inject = [
        'ADMIN_ENGAGETO_API_URL',
        '$localStorage',
        '$rootScope',
        '$http',
        '$q'
    ];

    function loginService(
        ADMIN_ENGAGETO_API_URL,
        $localStorage,
        $rootScope,
        $http,
        $q
    ){

        console.log('inside login service');
        
        return {
            loginAdmin: loginAdmin
        }

        /*
         * @author: sandeep
         * @created: 18-10-2016
         * @params: User credentials(object)
         * @return: success, error functions
         * @purpose: Login customer
         */
        function loginAdmin(data) {
            var apiUrl = ADMIN_ENGAGETO_API_URL + 'users/signin';
            var request = $http({
                method: "POST",
                url: apiUrl,
                data: data
            });
            return(request
                    .then(loginSuccess)
                    .catch(loginError));

            //loginError function
            function loginError(response) {
                if (!angular.isObject(response.data) || !response.data.message) {
                    return($q.reject(response.data));
                }
                // Otherwise, use expected error message.
                return($q.reject(response.data.message));
            }

            //loginSuccess function
            function loginSuccess(response) {
                return(response);
            }
        }
    }
}())