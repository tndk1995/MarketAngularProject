angular.module('market')
    .directive('activLi', activLi);

function activLi() {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                $('.nav li').removeClass('active');
                element.addClass('active');
            });
        }
    }
};