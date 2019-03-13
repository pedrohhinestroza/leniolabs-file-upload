'use strict';

angular.module('fileUploadModule').
    config(['$routeProvider',
        function config($routeProvider) {
        $routeProvider.
            when('', {
                template: '<file-upload></file-upload>'
        }).
            otherwise('/');
        }
]);