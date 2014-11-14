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

                    var firsttime = true;
                    angular.forEach(data, function(k, v){
                        if (!firsttime) {
                            clientData += " , "
                        }
                        clientData += " \"" + k + "\" : \"" + v + "\"  ";
                        firsttime = false;
                    },null);

                    clientData += " }";
                    logData.message = "PAGELOAD";
                    logData.details = clientData.toString();
                    logData.source = window.location.href.toString();
                    //console.log('log data', logData);
                    createLogEntry();
                });
        };
        //console.log('about to log');
        this.init();
    }]);
