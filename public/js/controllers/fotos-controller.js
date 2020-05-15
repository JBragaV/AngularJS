angular.module('jocimarpic').controller('FotosControler', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('http://localhost:3000/v1/fotos')
        .success(function(retorno){
            $scope.fotos = retorno;
        })
        .error(function(erro){
            console.log(erro);
        })
    
    $scope.deletar = function(foto){
        $http.delete(`http://localhost:3000/v1/fotos/${foto._id}`)
            .success(function(){
                var indice = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indice, 1);
                $scope.mensagem = `Foto ${foto.titulo} apagada com sucesso!!!`;
            }).error(function(erro){
                console.log(erro);
                $scope.mensagem = `Não foi possível apagar a foto ${foto.titulo}. Tente novamente mais tarde!!!`;
            })
    }
})