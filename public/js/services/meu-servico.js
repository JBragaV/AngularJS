angular.module('meuServico', ['ngResource'])
.factory("servicoFotos", function($resource){

    return $resource(`http://localhost:3000/v1/fotos/:idFoto`, null, {
        update: {
            method: "PUT"
        } 
    });
}).factory("cadastroDeFoto", function($q, servicoFotos, $rootScope){
    //uma factory sempre tem quye retornar um objeto js
    var servico = {};
    var evento = 'fotoCadastrada';

    servico.adiciona = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){
                servicoFotos.update({ idFoto: foto._id}, foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem: `A foto ${foto.titulo} foi atualizada com sucesso!!!`,
                        nova: false
                    })
                }, function(erro){
                    console.log(erro);
                    reject({
                        mesnagem: `Erro ao atualizar ${foto.titulo}`
                    })
                })
            }else{
                servicoFotos.save(foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem: `A foto ${foto.titulo} foi adicionada com sucesso!!!`,
                        nova: true
                    })
                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: `Erro ao tentar salvar a foto ${foto.titulo}!!!`
                    })
                })
            }
        })
    };


    return servico;
});