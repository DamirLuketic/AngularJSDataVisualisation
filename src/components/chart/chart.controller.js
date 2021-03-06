var chartController = app.controller('chartCtrl', function($scope, $interval) {
    $scope.title = 'Chart';

    var time = new Date('2018-03-14 00:00:00 +0100');

    var randPoint = function() {
        var rand = Math.random;
        return { time: new Date(time.toString()), visitors: rand() * 100 };
    };

    $scope.logs = [ randPoint() ];

    $interval(function() {
        time.setSeconds(time.getSeconds() + 1);
        $scope.logs.push(randPoint());
    }, 1000);
});