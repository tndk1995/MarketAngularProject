angular.module('marketMain')
    .component('marketMain', {
        templateUrl: 'market/market-main/market-main.template.html',
        controller: function marketMainController() {
            this.cameras = [{
                name: "Canon1",
                type: "dslr"
            }, {
                name: "Canon2",
                type: "compact"
            }];
            this.selectType = '';
        }

    });