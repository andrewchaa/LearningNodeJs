(function (angular) {

    var theModule = angular.module("notesView", []);
    
    theModule.controller("notesViewController",
        [
            "$scope",
            function ($scope) {
                $scope.notes = [
                    {
                        note : "Hello world 1",
                        author : "Andy",
                        colour : "blue"
                    }
                    ,
                    {
                        note : "Hello world 2",
                        author : "Sue",
                        colour : "red"
                    },
                    {
                        note : "Hello world 3",
                        author : "Joel",
                        colour : "purple"
                    }
                ];
            }
        ]);
        

})(window.angular);