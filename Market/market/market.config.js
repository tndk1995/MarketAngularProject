angular.module('market')
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/home', {
            template: '<market-home></market-home>'
        }).
        when('/cameraStore', {
            template: '<market-main></market-main>'
        }).
        otherwise('/home');
    }]);