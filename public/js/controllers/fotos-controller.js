angular.module('jocimarpic').controller('FotosControler', function($scope,servicoFotos, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    servicoFotos.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    })
    
    $scope.deletar = function(foto){
        servicoFotos.delete({idFoto : foto._id}, function(){
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
            $scope.mensagem = `Foto ${foto.titulo} apagada com sucesso!!!`;
        }, function(erro){
            console.log(erro);
            $scope.mensagem = `Não foi possível apagar a foto ${foto.titulo}. Tente novamente mais tarde!!!`;
        })
    }
})