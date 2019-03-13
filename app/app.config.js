'use strict';
// configure $routeProviders in the application
angular.
  module('LenioLabsFileUploadApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/fileupload', {
          // when calling /fileupload it will show the following component with it's templates
          template: '<file-upload></file-upload>'
        }).
        otherwise('/fileupload');
    }
  ]);
