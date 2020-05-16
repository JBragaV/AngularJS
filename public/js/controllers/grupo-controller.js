angular.module('jocimarpic').controller('grupoController', function($scope, $http){
    $scope.grupos = [];

    $http.get('http://localhost:3000/v1/grupos')
        .success(function(grupos){
            $scope.grupos = grupos;
        }).error(function(erro){
            console.log(erro);
        });
})