angular.module("marketDetail")
    .controller("marketDetailController", marketDetailController);

function marketDetailController($scope, $http, $stateParams) {
    $http.get('market/components/cameras/' + $stateParams.id + '.json').then(function(response) {
        $scope.camera = response.data;
    });
}