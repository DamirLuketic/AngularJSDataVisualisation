describe('Test App', function() {

    beforeEach(module('app'));

    describe('Testing directive "scater-chart"', function() {
        var chartCtrl;
        var chartScope = {};
        var isolateScope = {};
        var template;

        beforeEach(inject(function($controller, $compile, $rootScope){
            chartScope = $rootScope.$new();
            chartCtrl = $controller('chartCtrl', { $scope: chartScope });

            var element = angular.element('<scatter-chart class="chart" data="logs"></scatter-chart>');

            template = $compile(element)(chartScope);
            chartScope.$digest();

            isolateScope = $rootScope.$new();
            isolateScope  = element.isolateScope();
        }));

        it('first test', function () {

        });

    });

});