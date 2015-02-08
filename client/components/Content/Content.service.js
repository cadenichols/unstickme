'use strict';

angular.module('unstuckMeApp')
.factory('Content', function ($resource) {
  return $resource('/api/contents/:id/:controller', {
    id: '@_id'
  },{
    update: {
      method: 'PUT'
    }
  });


});
