
//IIFE
//ng app

(function () {
    "use strict";

    //creating the module
    angular.module("ShoppingListCheckOff", [])
    //creating the ToBuyController
    .controller("ToBuyController", ToBuyController)
    //creating the AlreadyBoughtController
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    //creating the service
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    //injecting the service
    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    //ToBuyController function
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }
    //injecting the service
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    //AlreadyBoughtController function
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }
    //ShoppingListCheckOffService function which is used to share data between controllers
    //and also to prepopulate the list of items to buy (singleton service)
    function ShoppingListCheckOffService() {
        var service = this;
        //array of items to buy to prepopulate the list
        var toBuyItems = [
            {
                name: "Spinach",
                quantity: 1
            },
            {
                name: "Eggs",
                quantity: 2 
            },
            {
                name: "Cheese",
                quantity: 1
            },
            {
                name: "Onions",
                quantity: 2
            },
            {
                name: "Bell Peppers",
                quantity: 2
            }
        ];
        //items already bought set to empty 
        var alreadyBoughtItems = [];
        //buyItem function which takes the item index as a parameter
        //and pushes the item to the already bought array while also
        // removes it from the to buy array
        service.buyItem = function (itemIndex) {
            //pushing the item to the already bought array
            alreadyBoughtItems.push(toBuyItems[itemIndex]);
            //removing the item from the to buy array
            toBuyItems.splice(itemIndex, 1);
        };
        //getToBuyItems function
        service.getToBuyItems = function () {
            return toBuyItems;
        };
        //getAlreadyBoughtItems function
        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;
        };
    }

    






})();