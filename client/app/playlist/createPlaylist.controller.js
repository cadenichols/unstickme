'use strict';

angular.module('unstuckMeApp')
.controller('CreatePlaylistCtrl', function ($scope, Content, Playlist) {
  $scope.newPlaylist = {};
  $scope.temp = {} ;
  $scope.newPlaylist.contents = [{ link:""}];
  $scope.addContent= function(contents, form){
    if(contents.length > 0){
      debugger;
      if(form.$valid){
        var link = contents[contents.length -1 ].link ;
        Content.save(contents[contents.length -1 ], function(res){
          contents[contents.length -1] = res._id ;
          $scope.temp[res._id] = link;
          contents.push({ link: "" });
        }, function(err){ 
          console.log(err)
        })
      }
    }
  }

  $scope.addPlaylist = function(form){
    if(form.$valid){
      var contents = $scope.newPlaylist.contents ;
      Content.save(contents[contents.length -1 ], function(res){
        contents[contents.length -1] = res._id ;
        var playlist = new Playlist($scope.newPlaylist);
        playlist.$save(function(res){
          console.log(res);
        }, function(err){
          console.log(err);
        });
      }, function(err){ 
        console.log(err)
      });
    }
  }
});
