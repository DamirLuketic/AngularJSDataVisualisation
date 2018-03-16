describe('Test App', function() {

    beforeEach(module('app'));

    describe('Testing directive "scater-chart"', function() {
        var chartCtrl;
        var chartScope = {};
        var isolateScope = {};
        var template;
        var templateAsHtml;
        var interval;
        var restrict;

        beforeEach(inject(function($controller, $compile, $rootScope, $interval){
            chartScope = $rootScope.$new();
            chartCtrl = $controller('chartCtrl', { $scope: chartScope });

            var element = angular.element('<scatter-chart class="chart" data="logs"></scatter-chart>');

            template = $compile(element)(chartScope);
            chartScope.$digest();

            isolateScope = $rootScope.$new();
            isolateScope  = element.isolateScope();

            interval = $interval;
            restrict = element;
            templateAsHtml = template.html();
        }));

        it('should data pass properly from "chart" controller to "scatter-chart" directive', function () {
            expect(chartScope.logs.length).toBe(isolateScope.data.length);

            interval.flush(1000);
            expect(chartScope.logs).toEqual(isolateScope.data);
        });

        it('should data for directive is timely set', function () {
            interval.flush(10000);
            expect(isolateScope.data.length).toBe(11);
        });

        it('should generate thee correct HTML', function () {
            chartScope.$digest();
            isolateScope.$digest();

            expect(templateAsHtml).toContain('svg');
        });
    });

});