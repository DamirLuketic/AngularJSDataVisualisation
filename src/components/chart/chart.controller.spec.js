describe('Testing App', function () {

    beforeEach(module('app'));

    describe('Testing chart controller', function () {
        var ctrl;
        var scope = {};
        var interval;

        beforeEach(inject(function ($controller, $interval) {
            ctrl = $controller('chartCtrl', { $scope: scope });
            interval = $interval;
        }));

        it('should chart title is set and is set properly', function () {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Chart');
        });

        it('should logs is set', function () {
            expect(scope.logs).toBeDefined();
        });

        it('shoul interval is properly used', function () {
            interval.flush(1000);
            expect(scope.logs.length).toBe(2);
        });
    })
});