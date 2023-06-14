//IIFE - immediately invoked function expression - protects variables from being accessed from outside code
//ng app
(function () {
    "use strict";

    //creating the module
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController); 
    //properly inject scope into the controller using $inject property
     LunchCheckController.$inject = ['$scope', '$filter'];
     function LunchCheckController($scope, $filter) {
      //set the lunch items to empty string
      $scope.lunchItems = "";
      //set the message to empty string
        $scope.message = "";
         //set the message color to empty string
         $scope.messageColor = "";
           //set the message border color to empty string
           $scope.messageBorderColor = "";
   
        
   
        
       
         //function to check the number of items in the array
           $scope.checkLunch = function () {
           //variable to hold the lunch items
           const lunchItems = $scope.lunchItems;
           //create an array of lunch items split at the comma 
           const lunchArray = lunchItems.split(',')
           //remove any empty items from the array
           //this is the ES6 way of doing it
        //    const cleanLunchArray = lunchArray.filter(item => item.trim() !== '');
            //this is the angularJS way of doing it
            //$filter('filter')(array, expression, comparator, anyPropertyKey)
            //array - lunchArray
            //expression - item => item.trim() !== ''
            //comparator - not used
            //anyPropertyKey - not used
           const cleanLunchArray = $filter('filter')(lunchArray, item => item.trim() !== '');
              console.log(cleanLunchArray);


         
              
          
                //check if empty string
                  if (lunchItems === "") {
                      $scope.message = "Please enter data first";
                      $scope.messageColor = "red";
                        $scope.messageBorderColor = "red";
                  }
                  //check if the number of items is less than 3
                  else if (cleanLunchArray.length <= 3) {
                      $scope.message = "Enjoy!";
                        $scope.messageColor = "green";
                           $scope.messageBorderColor = "green";
                  }
                  //check if the number of items is greater than 3
                  else if (cleanLunchArray.length > 3) {
                      $scope.message = "Too much!";
                           $scope.messageColor = "green";
                           $scope.messageBorderColor = "green";
                  }
            };
      
   
   };

    
})();