angular.module('painel', []).directive('meuPainel', function(){

    var ddo = {};//ddo= Definition Directive Object

    ddo.restric = "AE"//Podemos usar essa diretiva como atributo de um elemento html ou como um elemento.

    ddo.scope = {
        titulo: "@"
    }

    ddo.transclude = true;//Informa ao angular que ele deve manter o elemento filho colocado no html, no código html, vai estar marcado o lugar do filho com a diretiva ng-transclude.

    ddo.templateUrl = 'js/directives/MeuPainel.html';

    return ddo;
}).directive("botaoPerigo", function(){

    var ddo = {};

    ddo.restric = "E";

    ddo.scope = {
        etiqueta: "@",
        acao: "&"
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{etiqueta}}</button>';

    return ddo;
}).directive("meuFoco", function(){
    var ddo = {};

    ddo.restric = "A";

    ddo.link = function(scope, elemento){
        scope.$on('fotoCadastrada', function(){
            elemento[0].focus();
        })
    }
    return ddo;
}).directive("meusTitulos", function(){
    var ddo = {}

    ddo.restric = "E";

    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';

    ddo.controller = function($scope, servicoFotos){
        servicoFotos.query(function(fotos){
            $scope.titulos = fotos.map(function(foto) {
                return foto.titulo;
            });
        })
    }
    return ddo;
})