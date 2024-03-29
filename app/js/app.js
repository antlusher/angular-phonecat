// 'use strict';

// /* App Module */
// angular.module('phonecat', []).
//   config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//       when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
//       when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//       otherwise({redirectTo: '/phones'});
// }]);

// Add filters

// 'use strict';

// /* App Module */

// angular.module('phonecat', ['phonecatFilters']).
//   config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//       when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
//       when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//       otherwise({redirectTo: '/phones'});
// }]);

'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);