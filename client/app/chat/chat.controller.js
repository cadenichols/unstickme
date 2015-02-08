'use strict';

angular.module('unstuckMeApp')
.controller("ChatCtrl", function($scope){

    $scope.connected = false;
    
    $scope.activeCall = null;
    
    $scope.username = "";
    $scope.friendId = "";
    
    var callOptions = {
        constraints: {audio: true, video: true},
        
        onPreviewLocalMedia: function(evt) {
            setVideo('localVideoSource', evt.element)
        },
        onLocalMedia: function(evt) {
            setVideo('localVideoSource', evt.element)
        },
        
        onConnect: function(evt) {
            setVideo('remoteVideoSource', evt.element)
        }
        
    };
    
    
    $scope.client = new respoke.Client({
        appId: "7c5197d3-33ed-4057-96b0-9a32bafa920c",
        baseURL: "https://api.respoke.io",
        developmentMode: true
});
    
    // Listen for the 'connect' event
    $scope.client.listen('connect', function() {
        $scope.connected = true;
        $scope.$apply();
    });
    
    // Listen for the 'call' event
    $scope.client.listen('call', function(evt) {
        
        $scope.activeCall = evt.call;
        
        if ($scope.activeCall.initiator !== true) 
        {
            $scope.activeCall.answer(callOptions);
            $scope.activeCall.listen('hangup', function() {
                $scope.activeCall = null;
                $scope.$apply();
            });
        }
        $scope.$apply();
    });
    
    
    $scope.connect = function() {
        $scope.client.connect({
            endpointId: $scope.username
        });
    };
    
    $scope.call = function() {
        var recipientEndpoint = $scope.client.getEndpoint({ id: $scope.friendId });
        $scope.activeCall = recipientEndpoint.startVideoCall(callOptions);
    };
    
    $scope.hangup = function() {
        $scope.activeCall.hangup();
        $scope.activeCall = null;
    };
    
});
  