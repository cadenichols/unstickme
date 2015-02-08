'use strict';

angular.module('unstuckMeApp')
.controller('PlaylistCtrl', function ($scope) {
  $scope.message = 'Hello';
});

.controller('AllPlaylistCtrl', function (Playlist, $scope) {
  $scope.message = 'Hello';
  $scope.playlists = Playlist.query()
});
