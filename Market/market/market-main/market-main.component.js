angular.module('marketMain')
    .component('marketMain', {
        templateUrl: 'market/market-main/market-main.template.html',
        controller: marketMainController

    });

function marketMainController($http) {
    var self = this;
    $http.get('market/cameras/cameras.json').then(function(response) {
        self.cameras = response.data;
    });
    this.selectType = '';
}