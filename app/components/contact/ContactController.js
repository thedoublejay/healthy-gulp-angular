(function () {

    var app = angular.module("airnodaApp");

    var ContactController = function ($scope) {

        let ContactCtrl = this;

        ContactCtrl.number = 12345678;

    };
    
    ContactController.$inject = [ '$scope' ];
    app.controller("ContactController", ContactController);

}());