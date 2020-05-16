angular.module('jocimarpic').controller('fotoController', function($scope, servicoFotos, cadastroDeFoto, $routeParams){
  
    $scope.foto = {};
    $scope.mensagem = '';
    $scope.botao = 'Salvar';
    if($routeParams.id_foto){
        servicoFotos.get({ idFoto: $routeParams.id_foto}, function(foto){
            $scope.foto = foto;
            $scope.botao = "Atualizar";
        }, function(erro){
            console.log(erro);
            $scope.mensagem = "Erro!!!! Não foi possível trazer a foto!!!"
        })
    }

    $scope.enviar = function(){
        if($scope.formulario.$valid){
            cadastroDeFoto.adiciona($scope.foto)
                .then(function(dado){
                    $scope.mensagem = dado.mensagem;
                    if(dado.nova) {
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    }
                }).catch(function(dado){
                    $scope.mensagem = dado.mensagem;
                })
        }
    }
 
})



