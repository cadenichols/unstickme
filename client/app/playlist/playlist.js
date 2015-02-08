'use strict';

angular.module('unstuckMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playlist', {
        url: '/playlist',
        template: '<ui-view></ui-view>',
        controller: 'Playlist',
        abstract: true
      })
      .state('playlist.all', {
        url: '/playlist',
        templateUrl: 'app/playlist/playlist.html',
        controller: 'AllPlaylistCtrl'
      });
