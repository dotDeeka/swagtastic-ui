angular.module('swagtasticUI')
  .factory('Resource', [
    '$resource',
    'CONFIG',
    function ($resource, CONFIG) {
      'use strict';

      var Resource = $resource(CONFIG.url + ':path', {}, {
        query: {
          isArray: true,
          transformResponse: function (rawRes) {
            var res = angular.fromJson(rawRes);

            return res.apis;
          }
        },

        getDetails: {
          method: 'GET',
          isArray: false,
          params: {
            path: 'path'
          },
          transformResponse: function (rawRes) {
            var res = angular.fromJson(rawRes);
            return res;
          }
        }
      });


      return Resource;
    }
  ]);
