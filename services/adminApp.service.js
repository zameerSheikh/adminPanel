(function(){
    "use strict";

    adminApp.factory('AdminAppService', adminAppService);

    adminAppService.$inject = [
        'toastr'
    ];

    function adminAppService(
            toastr) {

                return{
                    showSuccessMessage: showSuccessMessage,
                    showErrorMessage: showErrorMessage
                }

        function showSuccessMessage(successMessage) {
            toastr.success(successMessage,{
                allowHtml: true,
                closeButton: true
            });
        };
        function showErrorMessage(errorMessage) {
            toastr.error(errorMessage,{
                allowHtml: true,
                closeButton: true
            });
        };
    }
}());