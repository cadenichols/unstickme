'use strict';

angular.module('unstuckMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playlist', {
        url: '/playlist',
        templateUrl: 'app/playlist/playlist.html',
        controller: 'PlaylistCtrl'
      });
  });