angular.module('analyticsApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
})

    .controller('analyticsController', ['$http', function($http) {
        this.title = "test";

        var logData = {
            message:"",
            details: "",
            source:""
        };

        // process the data
        var createLogEntry = function () {
            var today = new Date();
            logData.date = today;

            $http.post('http://pdsullivan.azurewebsites.net/api/blogLog', JSON.stringify(logData))
                .success(function (data) {
                    logData = {};
                    //console.log('success', data);
                })
                .error(function (data) {
                    logFail = true;
                    //console.log('error', data);
                });

        };


        this.init = function () {
            var clientData = "{ ";
            $http.get('http://ip-api.com/json/')
                .success(function (data) {

                    logData.message = "PAGELOAD";
                    logData.details = data;
                    logData.source = window.location.href.toString();
                    createLogEntry();
                });
        };
        //console.log('about to log');
        this.init();
    }]);
