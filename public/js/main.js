angular.module('jocimarpic', ['painel', 'ngAnimate', 'fotoDiretiva', 'ngRoute', 'meuServico'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosControler'
    });

    $routeProvider.when('/foto/new', {
        templateUrl: 'partials/foto-nova.html',
        controller: 'fotoController'
    });

    $routeProvider.when('/foto/edit/:id_foto', {
        templateUrl: 'partials/foto-nova.html',
        controller: 'fotoController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
})