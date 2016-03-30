var myApp = angular.module('myApp',[])

myApp.service('HistoryService', function($http){ //http because we are interfacing with the internet, whilst $scope interfaces with the html file
        var baseUrl = "http://localhost:8080/" //This is just the address of server
        this.saveWord = function(newWord){ //We will be sending this to the server
            var url = baseUrl+"saveCurrent" //This is the address where we will send the stuff to
            return $http.post(url,{"word":newWord}) //word:newWord is the data that we are actually sending
            //Saveword is a function that is part of the myApp service, we use this service but putting the in value of the word from the html file
        }
        
    }) //This service is a little module that handles interfacing with the server, whilst the controller is interfacing with the app



myApp.controller('MyController', function($scope,HistoryService){ //controller is basically in charge of taking care of the state of the page. Any variables in the controller, eg newWord, this is being controlled by MyController. the $scope means what the html file can access, and HistoryService must be included because we are using that service rec 2:45
    
    
    $scope.newWord='cat' //js resets the box to cat every time you refresh the page
    $scope.saveThisWord = function(){ //$scope means that the word will be accessible by the html file
        HistoryService.saveWord($scope.newWord) //This line creates a promise that it will once come back with some value
        .then(saveSuccess,error) //Once the value arrives, only then do we run the line - either saves successfully, or error if the server couldn't do what it was requested
    }
    function saveSuccess(json){ //do not need to be visible from the html page, so will not write $scope
        console.log(json)   //The json 
    }
    function error(json){
        console.log(err)
    }
});