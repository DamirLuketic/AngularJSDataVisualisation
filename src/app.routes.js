var appRoutes = app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/components/home/home.template.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: 'src/components/home/home.template.html',
            controller: 'homeCtrl'
        })
        .when('/chart', {
            templateUrl: 'src/components/chart/chart.template.html',
            controller: 'chartCtrl'
        })
        .otherwise({redirectTo: '/'});
});