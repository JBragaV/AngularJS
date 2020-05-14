angular.module('painel', []).directive('meuPainel', function(){

    var ddo = {};

    ddo.restric = "AE"//Podemos usar essa diretiva como atributo de um elemento html ou como um elemento.

    ddo.scope = {
        titulo: "@"
    }

    ddo.transclude = true;//Informa ao angular que ele deve manter o elemento filho colocado no html, no código html, vai estar marcado o lugar do filho com a diretiva ng-transclude.

    ddo.templateUrl = 'js/directives/MeuPainel.html';

    return ddo;
})