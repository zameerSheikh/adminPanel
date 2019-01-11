(function(){
    "use strict";

    adminApp.directive('adminLoaderImage', adminLoaderImage);

    adminLoaderImage.$inject = [];

    function adminLoaderImage(){
        return {
            restrict: 'E',
            template: '<i class="fa fa-refresh fa-spin fa-fw"></i>'
        }
    }
}());