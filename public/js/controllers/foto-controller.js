angular.module('jocimarpic').controller('fotoController', function($scope, $http, $routeParams){
  
    $scope.foto = {};
    $scope.mensagem = '';
    if($routeParams.id_foto){
        $http.get(`http://localhost:3000/v1/fotos/${$routeParams.id_foto}`)
            .success(function(foto){
                $scope.foto = foto;
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = "Erro!!!! Não foi possível trazer a foto!!!"
            })
    }

    $scope.enviar = function(){
        if($routeParams.id_foto){
            $http.put(`http://localhost:3000/v1/fotos/${$routeParams.id_foto}`, $scope.foto)
                .success(function(){
                    $scope.mensagem = `Foto ${$scope.foto.titulo} atualizada com sucesso!!!`;
                })
                .error(function(erro){
                    $scope.mensagem = `Erro ao atualizar a foto ${$scope.foto.titulo} !!!`;
                })
        }else{
            if($scope.formulario.$valid){
                $http.post('http://localhost:3000/v1/fotos', $scope.foto)
                    .success(function(){
                        $scope.mensagem = "Foto Enviada com sucesso!!!";
                        $scope.foto = {};
    
                    })
                    .error(function(erro){
                        console.log(erro);
                        $scope.mensagem = "Erro ao enviar a foto!!!!";
                    })
            }
        }
    }
 
})