// 'use strict';

// /* Controllers */

// function PhoneListCtrl($scope, $http) {
//   $http.get('phones/phones.json').success(function(data) {
//     $scope.phones = data;
//   });

//   $scope.orderProp = 'age';
// }

// //PhoneListCtrl.$inject = ['$scope', '$http'];


// function PhoneDetailCtrl($scope, $routeParams, $http) {
//   $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//     $scope.phone = data;
//     $scope.mainImageUrl = data.images[0];
//   });

//   $scope.setImage = function(imageUrl) {
//     $scope.mainImageUrl = imageUrl;
//   }
// }

// //PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];