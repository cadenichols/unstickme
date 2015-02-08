'use strict';

angular.module('unstuckMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playlist', {
        url: '/playlist',
        template: '<ui-view></ui-view>',
        controller: 'PlaylistCtrl',
        abstract: true,
      })
      .state('playlist.all', {
        url: '/playlist',
        templateUrl: 'app/playlist/playlist.html',
        controller: 'AllPlaylistCtrl'
      })
    .state('playlist.create', {
        url: '/create',
        authenticate: true ,
        templateUrl: 'app/playlist/create.html',
        controller: 'CreatePlaylistCtrl'
      });
