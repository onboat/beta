app.controller("SampleCtrl", function($scope, $firebaseObject, $firebaseArray) {
  var ref = firebase.database().ref().child("boats/1/people");
  $scope.people = $firebaseArray(ref);

  var ref = firebase.database().ref().child("boats/1/data");
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");
});