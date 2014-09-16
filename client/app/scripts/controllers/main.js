angular.module('swagtasticUI')
  .controller('MainCtrl', [
    '$scope',
    'Resource',
    function ($scope, Resource) {
      'use strict';


      Resource.query(function (resources) {
        $scope.resources = resources;
      });

      $scope.getResourceDetails = function (resource) {
        if (typeof resource.details === 'undefined') {
          Resource.getDetails({path: resource.path}, function (details) {
            resource.details = details;
            // open the details section
          });
        } else {
          // open the details section
        }
      };

    }
  ]);
