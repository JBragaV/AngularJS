angular.module('fotoDiretiva', []).directive('minhaFoto', function(){
    var ddo = {};

    ddo.restict = "AE";

    ddo.scope = {
        url: "@",
        titulo: "@"
    };

    ddo.templateUrl = 'js/directives/MinhaFoto.html';

    return ddo;

})