var myApp = angular.module('myApp',[])
myApp.controller('MyController', function($scope){ //controller is basically in charge of taking care of the state of the page. Any variables in the controller, eg newWord, this is being controlled by MyController. the $scope means what the html file can access
    $scope.newWord='cat' //js resets the box to cat every time you refresh the page
});