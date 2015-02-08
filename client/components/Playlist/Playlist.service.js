'use strict';

angular.module('unstuckMeApp')
.factory('Playlist', function () {
  // Service logic
  // ...
  return $resource('/api/playlists/:id/:controller', {
    id: '@_id'
  },{
    update: {
      method: 'PUT'
    }
  });

});
