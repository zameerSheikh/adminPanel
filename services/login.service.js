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
            loginAdmin: loginAdmin,
            getUserList: getUserList,
            getDomainsList: getDomainsList
        }

        /*
         * @author: sandeep
         * @created: 18-10-2016
         * @params: User credentials(object)
         * @return: success, error functions
         * @purpose: Login customer
         */
        function loginAdmin(data) {
            var apiUrl = ADMIN_ENGAGETO_API_URL + 'admin/users/signin';
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

        /*
         * @author: sandeep
         * @created: 18-10-2016
         * @params: User credentials(object)
         * @return: success, error functions
         * @purpose: Login customer
         */
        function getUserList() {
            var apiUrl = ADMIN_ENGAGETO_API_URL + 'admin/' + $localStorage.adminId + '/users';
            var request = $http({
                method: "GET",
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + $localStorage.token,
                }
            });
            return(request
                    .then(getUserSuccess)
                    .catch(getUserError));

            //getUser error function
            function getUserError(response) {
                if (!angular.isObject(response.data) || !response.data.message) {
                    return($q.reject(response.data));
                }
                // Otherwise, use expected error message.
                return($q.reject(response.data.message));
            }

            //getUser success function
            function getUserSuccess(response) {
                return(response);
            }
        }

        /*
         * @author: sandeep
         * @created: 18-10-2016
         * @params: User credentials(object)
         * @return: success, error functions
         * @purpose: Login customer
         */
        function getDomainsList() {
            var apiUrl = ADMIN_ENGAGETO_API_URL + 'admin/' + $localStorage.adminId + '/domains';
            var request = $http({
                method: "GET",
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + $localStorage.token,
                }
            });
            return(request
                    .then(getDomainsSuccess)
                    .catch(getDomainsError));

            //getDomains error function
            function getDomainsError(response) {
                if (!angular.isObject(response.data) || !response.data.message) {
                    return($q.reject(response.data));
                }
                // Otherwise, use expected error message.
                return($q.reject(response.data.message));
            }

            //getDomains success function
            function getDomainsSuccess(response) {
                return(response);
            }
        }
    }
}())