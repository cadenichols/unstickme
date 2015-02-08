'use strict';

angular.module('unstuckMeApp')
.factory('Content', function () {
  return $resource('/api/contents/:id/:controller', {
    id: '@_id'
  },{
    update: {
      method: 'PUT'
    }
  });


});
