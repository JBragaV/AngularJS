angular.module('jocimarpic').controller('FotoControler', function($scope, $http){
    $scope.fotos = [];

    $http.get('http://localhost:3000/v1/fotos')
        .success(function(retorno){
            $scope.fotos = retorno;
        })
        .error(function(erro){
            console.log(erro);
        })
})