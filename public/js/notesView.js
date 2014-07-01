(function (angular) {

    var theModule = angular.module("notesView", []);
    
    theModule.controller("notesViewController",
        [
            "$scope", "$window", "$http",
            function ($scope, $window, $http) {
                var urlParts = $window.location.pathname.split("/");
                var categoryName = urlParts[urlParts.length - 1];
                
                $http.get("/api/notes/" + categoryName)
                    .then(
                        function (result) {
                            console.log(result);
                            $scope.notes = result.data.notes;
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
            }
        ]);
        

})(window.angular);