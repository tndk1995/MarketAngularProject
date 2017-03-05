angular.module('marketMain')
    .controller('marketMainController');

function marketMainController($scope, $http) {
    $http.get('market/components/cameras/cameras.json').then(function(response) {
        $scope.cameras = response.data;
    });
    $scope.selectType = '';
}