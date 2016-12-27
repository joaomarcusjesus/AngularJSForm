/**
 * Created by behoh on 22/12/2016.
 */
angular
    .module("app", [])
    .controller("MyController", formDirectives);

function formDirectives($scope) {
    $scope.formulario = {};

    $scope.init = function () {
      console.log($scope.formulario);
    };
}


angular
    .module("app")
    .directive("capitalizeSize", captalizeSize);

function captalizeSize () {
    return {
        restrict: "AE",
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
           element.css("text-transform", "capitalize");
        }
    };
}

angular
    .module("app")
    .directive("onlyLetters", onlyLetters);

function onlyLetters () {
    return {
        restrict: "AE",
        require: "ngModel",
        scope: {
           letters: "@onlyLetters",
           with: "@with"
        },
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.push(function (value) {
               if (! value ) return;
               var regex = new RegExp(scope.letters);
               var replaced = value.replace(regex, scope.with);
               if (replaced !== value) {
                   ctrl.$setViewValue(replaced);
                   ctrl.$render();
               }
               return replaced;
            });
        }
    };
}
