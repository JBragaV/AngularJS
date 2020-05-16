angular.module('jocimarpic').controller('fotoController', function($scope, servicoFotos, $http, $routeParams){
  
    $scope.foto = {};
    $scope.mensagem = '';
    if($routeParams.id_foto){
        servicoFotos.get({ idFoto: $routeParams.id_foto}, function(foto){
            $scope.foto = foto;
        }, function(erro){
            console.log(erro);
            $scope.mensagem = "Erro!!!! Não foi possível trazer a foto!!!"
        })
    }

    $scope.enviar = function(){
        if($routeParams.id_foto){
            servicoFotos.update({ idFoto: $routeParams.id_foto}, function(){
                $scope.mensagem = `Foto ${$scope.foto.titulo} atualizada com sucesso!!!`;
            }, function(erro){
                $scope.mensagem = `Erro ao atualizar a foto ${$scope.foto.titulo} !!!`;
            })
        }else{
            if($scope.formulario.$valid){
                servicoFotos.save($scope.foto, function(){
                    $scope.mensagem = "Foto Enviada com sucesso!!!";
                    $scope.foto = {};
                    $scope.formulario.$setPristine();//Não dispara os erros depois de enviar a foto para o back-end
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = "Erro ao enviar a foto!!!!";
                })
            }
        }
    }
 
})