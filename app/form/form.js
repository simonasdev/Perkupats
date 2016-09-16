
  angular.module('angularfireSlackApp')
    .controller('formController', function($scope, $firebase, $state, $http, $location,lead, $firebaseObject){
      $http.get('data.json').success(function(data){
        $scope.thisAlbum = $state.params.id;
        $scope.albums = data;
         });

      $scope.formData = {};
      $scope.klausimas1 = function() {
        lead.update('klausimas1', $scope.formData);
         var result = lead.get();
          console.log(result);
         $state.go('step2');
         };
        $scope.atgal = function() {
         $state.go('step1');
     };

   $scope.formData2 = {};
   $scope.klausimas2 = function() {
     lead.update('klausimas2', $scope.formData2);
     var result = lead.get();
     console.log(result);
      $state.go('step3');
};
$scope.atgal2 = function() {
 $state.go('step2');
};


   $scope.formData3 = {};
     $scope.lead = function() {
     lead.update('klausimas3', $scope.formData3);
       var result = lead.get();
       var klasuimas1 = result.klausimas1;
       var klasuimas2 = result.klausimas2;
       var klasuimas3 = result.klausimas3;
       var firebaseObj = new Firebase("https://test-4fabc.firebaseio.com/");
           console.log(result);
            firebaseObj.push({ klasuimas1: klasuimas1, klasuimas2: klasuimas2, klasuimas3: klasuimas3 });
          $state.go('sucess');
    };
    });
