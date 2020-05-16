angular.module('meuServico', ['ngResource'])
.factory("servicoFotos", function($resource){

    return $resource(`http://localhost:3000/v1/fotos/:idFoto`, null, {
        update: {
            method: "PUT"
        } 
    });
});